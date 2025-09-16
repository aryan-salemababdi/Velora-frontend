'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Button } from '@/components/atom/Button/Button';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const veloraSnippet = `// main.go
package main

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
}`;

const CodeExampleSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(veloraSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative w-full py-20 px-6 bg-gray-900 text-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-extrabold text-blue-400">
          Quick Start with Velora
        </h2>
        <p className="mt-3 text-gray-400 text-lg">
          See how easy it is to register a module and middleware in Velora.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-5xl mx-auto bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      >
        <SyntaxHighlighter
          language="go"
          style={oneDark}
          className="rounded-xl p-6 !bg-gray-800"
        >
          {veloraSnippet}
        </SyntaxHighlighter>

        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center mt-8"
      >
        <Button
          className={twMerge(
            'bg-[#00ADD8] text-black hover:bg-[#00CFFF] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold',
          )}
        >
          <Link href="/documentation/introduction">Get Started</Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CodeExampleSection;
