"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { items } from "./data";
import logo from "../../../../public/logo/logo3.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 shadow-xl backdrop-blur border-b border-[#00ADD822]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-white flex flex-col md:flex-row items-start md:items-center gap-2">
          <div className="flex items-center">
            <Image
              src={logo}
              alt="Velora Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
            Velora
          </div>
          <span className="hidden md:inline text-sm font-semibold text-gray-400 ml-2">
            Lightweight Go Framework
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 font-bold text-gray-300">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="transition-all duration-200 hover:text-[#00ADD8]"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur border-t border-[#00ADD822]"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-gray-300 font-bold">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={closeMenu}
                  className="hover:text-[#00ADD8] transition-all duration-200"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;