'use client';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/organisme/HeroSection/HeroSection';
import WhyTurboTrackSection from '@/components/organisme/WhyTurboTrackSection/WhyTurboTrackSection';

const CodeExampleSection = dynamic(
  () => import('@/components/organisme/CodeExampleSection/CodeExampleSection'),
  { ssr: false },
);

const ContactUsSection = dynamic(
  () => import('@/components/organisme/ContactUsSection/ContactUsSection'),
  { ssr: false },
);

const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <WhyTurboTrackSection />
      <CodeExampleSection />
      <ContactUsSection />
    </>
  );
};

export default LandingPage;
