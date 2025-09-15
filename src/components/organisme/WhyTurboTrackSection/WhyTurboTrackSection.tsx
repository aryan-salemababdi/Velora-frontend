"use client";
import { motion } from "framer-motion";
import { benefits } from "./data";

const WhyVeloraSection = () => {
  return (
    <section className="relative w-full py-16 px-6 bg-gradient-to-b from-[#0d1b2a] via-[#112240] to-[#1e2d45] overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-16 -left-16 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Why Velora?</h2>
        <p className="mt-3 text-md sm:text-lg text-gray-300">
          Discover the power, speed, and simplicity of our modular Go framework.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {benefits.map(({ icon, title, description }, index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
            className="bg-[#112240] rounded-xl p-6 sm:p-8 shadow-md flex flex-col items-center text-center cursor-default hover:shadow-xl hover:scale-105 transition-all"
          >
            <div className="bg-blue-500 text-white p-4 sm:p-5 rounded-full text-3xl sm:text-4xl mb-4 sm:mb-5 drop-shadow-lg">
              {icon}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1 sm:mb-2">{title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyVeloraSection;