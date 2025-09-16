'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';

export default function GettingStartedPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-3xl"
    >
      <Heading level={1}>Getting Started</Heading>
      <p className="text-gray-300">
        This guide will walk you through installing{' '}
        <span className="text-[#00ADD8] font-semibold">Velora</span>, setting up
        your first project, and running a simple example. 🚀
      </p>

      <Heading className="my-12" level={2}>
        📦 Installation
      </Heading>
      <p className="text-gray-300 mt-5">
        Make sure you have Go <strong>v1.22+</strong> installed on your machine.
        You can check your version using:
      </p>
      <pre className="bg-[#112240] mt-5 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>go version</code>
      </pre>

      <p className="text-gray-300 mt-5">
        Install Velora globally using <code>go install</code>:
      </p>
      <pre className="bg-[#112240] text-gray-100 p-4 my-5 rounded-lg overflow-x-auto text-sm">
        <code>go install github.com/aryan-salemababdi/velora@latest</code>
      </pre>

      <p className="text-gray-300 mt-5">
        Or add it directly to your project using <code>go get</code>:
      </p>
      <pre className="bg-[#112240] mt-5 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>go get github.com/aryan-salemababdi/velora</code>
      </pre>

      <Heading className="my-12" level={2}>
        📂 Project Setup
      </Heading>
      <p className="text-gray-300 mt-5">
        Create a new Go project and initialize a module:
      </p>
      <pre className="bg-[#112240] mt-5 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`mkdir my-velora-app
velora new my-velora-app
cd my-velora-app`}
        </code>
      </pre>

      <Heading className="my-12" level={2}>
        👋 Hello Velora
      </Heading>
      <p className="text-gray-300 mt-5">
        Here’s the simplest example to get started:
      </p>
      <pre className="bg-[#112240] mt-5 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>
          {`package main

import (
	"log"

	"myapp/app"

	velora "github.com/aryan-salemababdi/Velora/app"
)

func main() {
	a := velora.New()

	if err := a.RegisterModule(app.New()); err != nil {
		log.Fatal(err)
	}
	if err := a.Start(":3000"); err != nil {
		log.Fatal(err)
	}
}
`}
        </code>
      </pre>

      <p className="text-gray-300 mt-5">Run your application:</p>
      <pre className="bg-[#112240] mt-5 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
        <code>go run main.go</code>
      </pre>
      <p className="text-gray-300 mt-5">
        Open <code>http://localhost:3000</code> in your browser, and you should
        see your first Velora app in action!
      </p>

      <Heading className="my-12" level={2}>
        🚀 Next Steps
      </Heading>
      <p className="text-gray-300">
        Now that your app is running, you can explore:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <a href="/documentation/controllers" className="text-[#00ADD8] underline">
            Routing
          </a>{' '}
          — Learn how to define routes and handle requests.
        </li>
        <li>
          <a href="/documentation/modules" className="text-[#00ADD8] underline">
            Modules
          </a>{' '}
          — Organize your app with Velora’s modular system.
        </li>
        <li>
          <a href="/documentation/middleware" className="text-[#00ADD8] underline">
            Middleware
          </a>{' '}
          — Add custom logic to requests and responses.
        </li>
      </ul>
    </motion.div>
  );
}
