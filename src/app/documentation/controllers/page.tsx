'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';

export default function ControllersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-4xl"
    >
      <Heading level={1}>🧭 Controllers</Heading>

      <p className="text-gray-300">
        In <span className="text-[#00ADD8] font-semibold">Velora</span>,{' '}
        <strong>Controllers</strong> define HTTP routes and handle requests. 
        They connect to services to execute business logic and return responses.
      </p>

      <Heading className="my-12" level={2}>
        🛠️ Creating a Controller
      </Heading>
      <p className="text-gray-300 my-5">
        A controller is usually a struct that depends on a service. It must 
        implement the <code>RegisterRoutes(app *fiber.App)</code> method:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
{`package user

import "github.com/gofiber/fiber/v2"

type Controller struct {
    service *Service
}

func NewController(s *Service) *Controller {
    return &Controller{service: s}
}

func (c *Controller) RegisterRoutes(app *fiber.App) {
    app.Get("/users", c.findAll)
}

func (c *Controller) findAll(ctx *fiber.Ctx) error {
    users := c.service.FindAll()
    return ctx.JSON(users)
}`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🔌 Dependency Injection
      </Heading>
      <p className="text-gray-300 my-5">
        The controller is provided in the module along with the service:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
{`func (m *UserModule) Register(container *dig.Container, app *fiber.App) error {
    container.Provide(NewService)
    container.Provide(NewController)

    // Invoke RegisterRoutes with dependencies
    return container.Invoke(func(c *Controller) {
        c.RegisterRoutes(app)
    })
}`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🚀 Best Practices
      </Heading>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Keep controllers focused only on request/response handling.</li>
        <li>Delegate all logic to services instead of writing it in controllers.</li>
        <li>Use DTOs for input validation and consistent response formats.</li>
      </ul>
    </motion.div>
  );
}