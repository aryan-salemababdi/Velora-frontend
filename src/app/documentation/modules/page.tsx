'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';

export default function ModulesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-4xl"
    >
      <Heading level={1}>Modules</Heading>

      <p className="text-gray-300">
        In <span className="text-[#00ADD8] font-semibold">Velora</span>, modules
        are the core building blocks of your application. Each module
        encapsulates a specific domain of functionality, including routes,
        services, middlewares, and dependencies. Velora's modular architecture
        ensures clean separation of concerns, easy testing, and scalability for
        large applications.
      </p>

      <Heading className="my-12" level={2}>
        🧩 What is a Module?
      </Heading>
      <p className="text-gray-300">
        A <strong>module</strong> is a Go struct implementing the{' '}
        <code>Module</code> interface. This interface requires:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <code>Register(container *dig.Container, app *fiber.App) error</code>{' '}
          — This method registers the module's routes, services, and
          dependencies.
        </li>
        <li>
          <code>Middlewares() []string</code> — Returns middlewares that should
          be applied specifically to this module.
        </li>
      </ul>

      <Heading className="my-12" level={2}>
        📂 Module File Structure (*.module.go)
      </Heading>
      <p className="text-gray-300">
        Each module is typically defined in a file with the{' '}
        <code>.module.go</code> suffix. This file contains the module struct,
        its registration logic, services, controllers, and local middlewares.
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`package app

import (
    "github.com/gofiber/fiber/v2"
    "go.uber.org/dig"
    "gorm.io/gorm"
    velora "github.com/aryan-salemababdi/Velora/app"
)

type AppModule struct{}

func New() *AppModule { return &AppModule{} }

func (m *AppModule) Register(container *dig.Container, app *fiber.App) error {
    db := InitDB() // initialize database
    container.Provide(func() *gorm.DB { return db })
    container.Provide(NewService)
    container.Provide(NewController)
    return container.Invoke(func(ctrl *Controller) {
        ctrl.RegisterRoutes(app)
    })
}

func (m *AppModule) Middlewares() []string {
    return []string{"auth", "logging"} // local middlewares for this module
}`}
        </code>
      </pre>

      <p className="text-gray-300">Important points about module files:</p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Register:</strong> Sets up services, controllers,
          dependencies, and registers routes with Fiber.
        </li>
        <li>
          <strong>Middlewares:</strong> Returns an array of middleware names
          that are applied only to this module's routes.
        </li>
        <li>Helps Velora detect unregistered modules automatically.</li>
        <li>
          ❗ Important: Always define at least one middleware per module. Velora
          will throw an error if a module has no middlewares.
        </li>
      </ul>

      <Heading className="my-12" level={2}>
        📦 Registering Modules in main.go
      </Heading>
      <p className="text-gray-300">
        Every new module you create in Velora must be explicitly registered in{' '}
        <code>main.go</code>. This is essential because Velora needs to know
        about all modules in order to:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Apply the module-specific middlewares.</li>
        <li>Register the module's routes to the Fiber app.</li>
        <li>Provide its services and dependencies via the DI container.</li>
        <li>Track registered modules and detect unregistered ones.</li>
      </ul>

      <p className="text-gray-300">
        Failing to register a module in <code>main.go</code> will result in a
        warning when starting the application, showing which modules exist on
        disk but are not registered.
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`app := velora.New()
if err := app.RegisterModule("user", userModule); err != nil {
    log.Fatal(err)
}`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🌱 Module Lifecycle
      </Heading>
      <p className="text-gray-300">
        Each module goes through the following lifecycle:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Initialization:</strong> Setup services, DB connections, and
          dependencies inside <code>Register</code>.
        </li>
        <li>
          <strong>Middleware registration:</strong> Middlewares from{' '}
          <code>Middlewares()</code> are applied automatically.
        </li>
        <li>
          <strong>Routing:</strong> Routes implementing{' '}
          <code>RouteRegisterer</code> are registered on Fiber.
        </li>
        <li>
          <strong>Dependency Injection:</strong> All module dependencies are
          provided via Dig container.
        </li>
      </ul>

      <Heading className="my-12" level={2}>
        🛠️ Global vs Module Middlewares
      </Heading>
      <p className="text-gray-300">
        Velora allows you to attach middlewares globally or per-module:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Global Middleware:</strong> Applied to all routes via{' '}
          <code>UseGlobalMiddleware</code>.
        </li>
        <li>
          <strong>Module Middleware:</strong> Only applied to this module's
          routes, returned by <code>Middlewares()</code>.
        </li>
      </ul>

      <Heading className="my-12" level={2}>
        🔍 Module Watching
      </Heading>
      <p className="text-gray-300">
        Velora can monitor your project directory for unregistered modules using{' '}
        <code>WatchModules</code>. This ensures all modules are properly
        registered and prevents runtime errors.
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`app.WatchModules("./modules", time.Second*2) // checks every 2 seconds`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🚀 Summary
      </Heading>
      <p className="text-gray-300">
        Modules in Velora are the main way to structure applications. They
        provide:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Encapsulation of routes, services, and logic.</li>
        <li>Automatic middleware management.</li>
        <li>Integration with dependency injection container.</li>
        <li>Easy detection of unregistered modules.</li>
        <li>Scalability and maintainability for large applications.</li>
      </ul>

      <p className="mt-6 text-gray-400">
        Next, explore{' '}
        <a href="/documentation/controllers" className="text-[#00ADD8] underline">
          Routing
        </a>{' '}
        to learn how to define endpoints and connect them with modules.
      </p>
    </motion.div>
  );
}
