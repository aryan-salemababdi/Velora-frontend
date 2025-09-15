'use client';
import Link from 'next/link';
import { Button } from '@/components/atom/Button/Button';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import rocketImg from '../../../../public/logo/logo3.png';

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-black text-white min-h-[90vh] flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, #00ADD822 0%, #000 80%)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#00ADD811_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="text-center max-w-2xl">
        <h1 className="relative text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-8">
          <span className="relative inline-flex items-center gap-3 px-4 py-2 rounded-2xl shadow-2xl bg-gradient-to-br from-black to-gray-900">
            <Image
              src={rocketImg}
              alt="logo"
              width={78}
              height={78}
              className="animate-bounce"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ADD8] to-[#00CFFF] drop-shadow-lg">
              Velora
            </span>
            <span className="text-white bg-[#00ADD8] px-3 py-1 rounded-xl text-xl shadow-md animate-pulse">
              framework
            </span>
          </span>
          <span className="block mt-4 text-base sm:text-lg text-gray-400 font-medium tracking-wide">
            Lightweight Go Framework. High Performance.
          </span>
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-gray-400 mb-8">
          Build modular, scalable, and fast backend applications effortlessly
          with Velora. Experience developer-first performance and clean
          architecture.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            className={twMerge(
              'bg-[#00ADD8] text-black hover:bg-[#00CFFF] px-6 py-3 text-base font-semibold',
            )}
          >
            Get Started
          </Button>

          <Link
            href="https://github.com/aryan-salemababdi/Velora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent border border-[#00ADD8] text-[#00ADD8] hover:bg-[#00ADD8]/10 px-6 py-3 text-base font-semibold flex items-center gap-2">
              <FaGithub className="text-lg" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;