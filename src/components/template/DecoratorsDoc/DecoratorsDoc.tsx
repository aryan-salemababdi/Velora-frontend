'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';

const DecoratorsDoc = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-4xl"
    >
      <Heading level={1}>🎨 Decorators</Heading>

      <p className="text-gray-300">
        In <span className="text-[#00ADD8] font-semibold">Velora</span>,{' '}
        <strong>Decorators</strong> are lightweight wrappers for route handlers.
        They allow you to compose extra behavior around a handler in a reusable
        way, similar to function composition.
      </p>

      <Heading className="my-12" level={2}>
        🛠️ Core Implementation
      </Heading>
      <p className="text-gray-300 my-5">
        Velora provides a simple decorator system:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`package app

import "github.com/gofiber/fiber/v2"

type Decorator func(fiber.Handler) fiber.Handler

func Use(decorators ...Decorator) func(fiber.Handler) fiber.Handler {
    return func(h fiber.Handler) fiber.Handler {
        for i := len(decorators) - 1; i >= 0; i-- {
            h = decorators[i](h)
        }
        return h
    }
}`}
        </code>
      </pre>

      <p className="text-gray-300 my-5">
        A <code>Decorator</code> is a function that takes a{' '}
        <code>fiber.Handler</code>
        and returns a new handler with extra logic applied.
      </p>

      <Heading className="my-12" level={2}>
        🔍 Example: Logging Decorator
      </Heading>
      <p className="text-gray-300 my-5">
        This decorator logs before and after the request is handled:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`func LoggingDecorator() app.Decorator {
    return func(next fiber.Handler) fiber.Handler {
        return func(c *fiber.Ctx) error {
            fmt.Println("➡️ Before:", c.Path())
            err := next(c)
            fmt.Println("⬅️ After:", c.Path())
            return err
        }
    }
}`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        ⚡ Using Decorators in Routes
      </Heading>
      <p className="text-gray-300 my-5">
        You can wrap handlers when registering routes. For example, in a real
        Velora app:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`a.HTTP().Get("/hello", app.Use(LoggingDecorator())(
    func(c *fiber.Ctx) error {
        return c.SendString("Hello, world!")
    },
))`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🧩 Real Project Example
      </Heading>
      <p className="text-gray-300 my-5">
        In a full Velora project, you might have global middlewares and
        module-specific routes:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`// Register global middlewares
velora.RegisterMiddleware("auth", AuthMiddleware)
velora.RegisterMiddleware("logging", LoggingMiddleware)
velora.RegisterMiddleware("cors", CORSMiddleware)
a.UseGlobalMiddleware("logging", "cors", "auth")

// Module route with decorator
a.HTTP().Get("/secure", app.Use(LoggingDecorator(), AuthDecorator())(
    func(c *fiber.Ctx) error {
        return c.SendString("Secure route")
    },
))`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🧩 Composing Multiple Decorators
      </Heading>
      <p className="text-gray-300 my-5">
        You can chain decorators together. They are executed in reverse order,
        similar to middleware stacks.
      </p>

      <Heading className="my-12" level={2}>
        🚀 Best Practices
      </Heading>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Use decorators for <strong>per-route logic</strong> instead of global
          logic.
        </li>
        <li>
          Examples: logging, auth guards, caching, error handling wrappers.
        </li>
        <li>
          Decorators are applied only where you explicitly use them (unlike
          global middleware).
        </li>
        <li>Keep decorators small, composable, and reusable.</li>
      </ul>

      <p className="mt-6 text-gray-400">
        Next: combine{' '}
        <a
          href="/documentation/middleware"
          className="text-[#00ADD8] underline"
        >
          middlewares
        </a>{' '}
        with decorators to build powerful request flows.
      </p>
    </motion.div>
  );
};

export default DecoratorsDoc;
