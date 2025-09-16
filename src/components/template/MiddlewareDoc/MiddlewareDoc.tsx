'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';


const MiddlewareDoc = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-4xl"
    >
      <Heading level={1}>⚙️ Middlewares</Heading>

      <p className="text-gray-300">
        In <span className="text-[#00ADD8] font-semibold">Velora</span>,
        middlewares provide a way to add custom logic before or after request
        handling. They can be applied globally (to all routes) or locally (to a
        specific module). Velora uses a centralized{' '}
        <code>middlewareRegistry</code> to manage them.
      </p>

      <Heading className="my-12" level={2}>
        🗂️ Middleware Registry
      </Heading>
      <p className="text-gray-300 my-5">
        All middlewares must be registered inside Velora before they can be used
        globally or in modules. The registry keeps track of available
        middlewares by name:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`package app

import "github.com/gofiber/fiber/v2"

// Alias for Fiber handler
type MiddlewareFunc = fiber.Handler

// Global registry
var middlewareRegistry = map[string]MiddlewareFunc{}

// Register a new middleware by name
func RegisterMiddleware(name string, fn MiddlewareFunc) {
    middlewareRegistry[name] = fn
}

// Retrieve a middleware by name
func GetMiddleware(name string) (MiddlewareFunc, bool) {
    fn, ok := middlewareRegistry[name]
    return fn, ok
}`}
        </code>
      </pre>

      <ul className="list-disc list-inside mt-5 text-gray-300 space-y-2">
        <li>
          <code>RegisterMiddleware</code> — Adds a middleware to the global
          registry with a unique name.
        </li>
        <li>
          <code>GetMiddleware</code> — Retrieves a middleware by name. Returns{' '}
          <code>false</code> if not found.
        </li>
        <li>
          <strong>Important:</strong> A middleware must be registered before it
          can be used.
        </li>
      </ul>

      <Heading className="my-12" level={2}>
        🌍 Global Middlewares
      </Heading>
      <p className="text-gray-300 my-5">
        Global middlewares apply to <strong>all routes</strong> in the
        application. They are attached using <code>UseGlobalMiddleware</code>:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`app := velora.New()

// Register custom middlewares
velora.RegisterMiddleware("logging", func(c *fiber.Ctx) error {
    fmt.Println("[LOG]", c.Path())
    return c.Next()
})

velora.RegisterMiddleware("cors", func(c *fiber.Ctx) error {
    c.Set("Access-Control-Allow-Origin", "*")
    return c.Next()
})

// Attach them globally
app.UseGlobalMiddleware("logging", "cors")`}
        </code>
      </pre>

      <p className="text-gray-300 mt-5">
        If a global middleware is not found in the registry, Velora will print a
        ⚠️ warning but continue running.
      </p>

      <Heading className="my-12" level={2}>
        📦 Module Middlewares
      </Heading>
      <p className="text-gray-300 my-5">
        Each module must implement the <code>Middlewares() []string</code>{' '}
        method. This returns an array of middleware names that are applied only
        to that module’s routes.
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`func (m *AppModule) Middlewares() []string {
    return []string{"auth", "logging"} // required for every module
}`}
        </code>
      </pre>

      <p className="text-gray-300 my-5">
        ❗ <strong>Important:</strong> Every module must define{' '}
        <code>Middlewares()</code>. Even if the module has no specific
        middlewares, it should return an empty array:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`func (m *EmptyModule) Middlewares() []string {
    return []string{} // required to avoid runtime error
}`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🔒 Example: Auth Middleware
      </Heading>
      <p className="text-gray-300 my-5">
        Here’s an example of a simple authentication guard middleware:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`velora.RegisterMiddleware("auth", func(c *fiber.Ctx) error {
    token := c.Get("Authorization")
    if token == "" {
        return c.Status(401).SendString("Unauthorized")
    }
    return c.Next()
})`}
        </code>
      </pre>

      <p className="text-gray-300 my-5">
        Modules that require authentication can simply return{' '}
        <code>
          []string{'{'}"auth{'}'}
        </code>{' '}
        in their <code>Middlewares</code>.
      </p>

      <Heading className="my-12" level={2}>
        🚀 Summary
      </Heading>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Register middlewares globally with <code>RegisterMiddleware</code>.
        </li>
        <li>
          Apply them globally with <code>UseGlobalMiddleware</code>.
        </li>
        <li>
          Each module <strong>must</strong> implement <code>Middlewares()</code>
          .
        </li>
        <li>
          Middlewares can be applied per-module or globally, depending on the
          use case.
        </li>
      </ul>

      <p className="mt-6 text-gray-400">
        Next, learn how to{' '}
        <a
          href="/documentation/configuration"
          className="text-[#00ADD8] underline"
        >
          configure Velora
        </a>{' '}
        to integrate databases, Redis, and more.
      </p>
    </motion.div>
  );
};

export default MiddlewareDoc;
