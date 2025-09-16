'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/atom/Button/Button';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';
import rocketImg from '../../../../public/logo/logo3.png';

const HeroSection = () => {
  const router = useRouter();

  return (
    <section className="relative isolate overflow-hidden bg-black text-white min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
      <div
        className="absolute inset-0 -z-10 opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, #00ADD822 0%, #000 80%)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#00ADD811_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="text-center max-w-3xl mx-auto">
        <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight mb-6 sm:mb-8">
          <span className="relative inline-flex items-center gap-3 px-3 sm:px-4 py-2 rounded-2xl shadow-2xl bg-gradient-to-br from-black to-gray-900">
            <Image
              src={rocketImg}
              alt="logo"
              width={60}
              height={60}
              className="animate-bounce sm:w-16 sm:h-16"
              loading="lazy"
            />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00ADD8] to-[#00CFFF] drop-shadow-lg text-lg sm:text-2xl md:text-3xl">
              Velora
            </span>
            <span className="text-white bg-[#00ADD8] px-2 sm:px-3 py-1 rounded-xl text-sm sm:text-lg md:text-xl shadow-md animate-pulse">
              framework
            </span>
          </span>
          <span className="block mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 font-medium tracking-wide">
            Lightweight Go Framework. High Performance.
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 sm:mb-8 px-2 sm:px-0">
          Build modular, scalable, and fast backend applications effortlessly
          with Velora. Experience developer-first performance and clean
          architecture.
        </p>

        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          <Button
            className={twMerge(
              'bg-[#00ADD8] text-black hover:bg-[#00CFFF] px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold',
            )}
          >
            <Link href="/documentation/introduction">Get Started</Link>
          </Button>

          <Link
            href="https://github.com/aryan-salemababdi/Velora"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-transparent border border-[#00ADD8] text-[#00ADD8] hover:bg-[#00ADD8]/10 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold flex items-center gap-2">
              <FaGithub className="text-sm sm:text-base" />
              View on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
