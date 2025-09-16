'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-4xl"
    >
      <Heading level={1}>⚙️ Services</Heading>

      <p className="text-gray-300">
        In <span className="text-[#00ADD8] font-semibold">Velora</span>,{' '}
        <strong>Services</strong> contain the business logic of your application. 
        They should not depend on HTTP or controllers directly. Services are 
        injected into controllers using Velora’s dependency injection system 
        powered by <code>dig.Container</code>.
      </p>

      <Heading className="my-12" level={2}>
        🛠️ Creating a Service
      </Heading>
      <p className="text-gray-300 my-5">
        A typical service is a simple struct with methods. Example:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
{`package user

type Service struct{}

func NewService() *Service {
    return &Service{}
}

func (s *Service) FindAll() []string {
    return []string{"Alice", "Bob", "Charlie"}
}`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        🔌 Dependency Injection
      </Heading>
      <p className="text-gray-300 my-5">
        Services are registered in the DI container inside the module’s 
        <code>Register</code> function:
      </p>

      <pre className="bg-[#112240] text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
{`func (m *UserModule) Register(container *dig.Container, app *fiber.App) error {
    container.Provide(NewService) // make Service injectable
    return nil
}`}
        </code>
      </pre>

      <p className="text-gray-300 my-5">
        Now, controllers can automatically receive the service as a dependency.
      </p>

      <Heading className="my-12" level={2}>
        🚀 Best Practices
      </Heading>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Keep services independent from HTTP (no <code>fiber.Ctx</code> inside services).</li>
        <li>Write unit tests for services separately.</li>
        <li>Use services to implement core domain logic, reusable across controllers.</li>
      </ul>
    </motion.div>
  );
}