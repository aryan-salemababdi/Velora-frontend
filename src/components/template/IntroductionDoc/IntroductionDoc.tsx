'use client';

import { Heading } from '@/components/atom/Heading/Heading';
import { motion } from 'framer-motion';


const IntroductionDoc = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-3xl"
    >
      <Heading level={1}>Introduction</Heading>
      <p className="text-gray-300 leading-relaxed">
        <span className="text-[#00ADD8] font-semibold">Velora</span> is more
        than just another backend framework for Go — it is a philosophy. It was
        born from the idea that developers deserve a tool that combines{' '}
        <strong>raw performance</strong>, <strong>clean architecture</strong>,
        and <strong>developer happiness</strong> in one cohesive package. Velora
        gives you the speed of low-level frameworks while guiding you to build
        apps that stay maintainable as they grow.
      </p>

      <Heading level={2} className="mt-12">
        🌱 Why Velora Exists
      </Heading>
      <p className="text-gray-300">
        When building Go applications, developers often face a trade-off:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Frameworks like <em>Fiber</em> provide <strong>blazing speed</strong>,
          but leave you with little structure. As projects grow, codebases can
          become tangled and hard to scale.
        </li>
        <li>
          On the other hand, enterprise-style frameworks bring{' '}
          <strong>structure and organization</strong>, but usually at the cost
          of performance, simplicity, or too much boilerplate.
        </li>
      </ul>
      <p className="text-gray-300 mt-4">
        Velora was designed to solve this problem. Inspired by{' '}
        <strong>NestJS</strong> in the JavaScript ecosystem, Velora brings a{' '}
        <strong>modular, layered architecture</strong> into the world of Go —
        while keeping Fiber’s unmatched speed at its core.
      </p>

      <Heading level={2} className="mt-12">
        🚀 Core Philosophy
      </Heading>
      <p className="text-gray-300">
        The guiding principles behind Velora can be summarized in three pillars:
      </p>
      <ol className="list-decimal list-inside text-gray-300 space-y-2">
        <li>
          <strong>Performance First</strong> — built on Fiber, Velora ensures
          that your applications remain lightweight and fast, ready for
          production workloads.
        </li>
        <li>
          <strong>Modular by Default</strong> — everything in Velora is
          organized into <em>modules</em>, making large applications manageable,
          scalable, and easy to reason about.
        </li>
        <li>
          <strong>Developer Happiness</strong> — minimal boilerplate, consistent
          patterns, and intuitive APIs that let you focus on business logic
          instead of framework internals.
        </li>
      </ol>

      <Heading level={2} className="mt-12">
        🧩 Architecture at a Glance
      </Heading>
      <p className="text-gray-300">
        Velora introduces a modular design where applications are broken down
        into isolated, reusable units called <strong>modules</strong>. Each
        module encapsulates its own controllers, services, and providers, which
        results in:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Better separation of concerns</li>
        <li>Improved testability</li>
        <li>Reusability across different parts of your app</li>
        <li>A structure that grows with your project</li>
      </ul>

      <Heading level={2} className="mt-12">
        🔥 How Velora Stands Out
      </Heading>
      <p className="text-gray-300">
        Unlike traditional Go frameworks, Velora doesn’t lock you into a rigid
        ecosystem. It is <strong>minimal but powerful</strong>:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Fiber-based core</strong> — take advantage of one of the
          fastest HTTP engines in Go.
        </li>
        <li>
          <strong>Familiar patterns</strong> — if you’ve used NestJS, Spring, or
          Angular, the modular architecture will feel natural.
        </li>
        <li>
          <strong>Plug-and-play integrations</strong> — easily add middleware,
          authentication, logging, or databases without fighting the framework.
        </li>
        <li>
          <strong>No bloat</strong> — only use what you need. Velora stays out
          of your way when you want to keep things simple.
        </li>
      </ul>

      <Heading level={2} className="mt-12">
        🌍 Real-World Use Cases
      </Heading>
      <p className="text-gray-300">
        Velora is well-suited for projects of all scales. From small REST APIs
        to distributed microservices, the framework is designed to adapt to your
        needs:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          ⚡ High-performance APIs that can handle thousands of requests per
          second.
        </li>
        <li>
          🧩 Modular monoliths — structure large codebases cleanly without
          microservice overhead.
        </li>
        <li>
          ☁️ Cloud-native microservices with easy integration to gRPC, Kafka, or
          message brokers.
        </li>
        <li>
          🔒 Secure, middleware-rich backends for production-grade applications.
        </li>
      </ul>

      <Heading level={2} className="mt-12">
        🔭 The Vision Ahead
      </Heading>
      <p className="text-gray-300">
        Velora is still growing, but its roadmap is ambitious. The project aims
        to become the go-to <strong>modern framework for Go developers</strong>,
        with plans to introduce:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>CLI tooling for scaffolding modules and projects</li>
        <li>First-class support for GraphQL and gRPC</li>
        <li>Built-in testing utilities</li>
        <li>Community-driven plugins and ecosystem packages</li>
        <li>Microservice supporting</li>
      </ul>
      <p className="text-gray-300 mt-4">
        At its heart, Velora will always remain true to its roots: performance,
        modularity, and developer-first design.
      </p>

      <Heading level={2} className="mt-12">
        🤝 Community & Contribution
      </Heading>
      <p className="text-gray-300">
        Velora is an open-source project that thrives on collaboration. Whether
        you’re fixing bugs, writing documentation, or contributing features,
        your help is welcome. The goal is to create not just a framework, but a{' '}
        <strong>community</strong> where developers can learn, share, and build
        amazing things together.
      </p>

      <p className="mt-10 text-gray-400">
        👉 To get your hands dirty and start coding, head over to{' '}
        <a
          href="/documentation/getting-started"
          className="text-[#00ADD8] underline"
        >
          Getting Started
        </a>{' '}
        where you’ll learn how to install Velora and spin up your first app in
        minutes.
      </p>
    </motion.div>
  );
};

export default IntroductionDoc;
