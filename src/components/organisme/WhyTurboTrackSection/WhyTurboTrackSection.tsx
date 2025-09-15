"use client";
import { motion } from "framer-motion";
import { benefits } from "./data";

const WhyVeloraSection = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-[#0d1b2a] via-[#112240] to-[#1e2d45] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto text-center mb-14"
      >
        <h2 className="text-4xl font-extrabold text-white">Why Velora?</h2>
        <p className="mt-3 text-lg text-gray-300">
          Discover the power, speed, and simplicity of our modular Go framework.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {benefits.map(({ icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 * index, duration: 0.6, ease: "easeOut" }}
            className="bg-[#112240] rounded-xl p-8 shadow-md flex flex-col items-center text-center cursor-default hover:shadow-xl hover:scale-105 transition-all"
          >
            <div className="bg-blue-500 text-white p-5 rounded-full text-4xl mb-5 drop-shadow-lg">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyVeloraSection;