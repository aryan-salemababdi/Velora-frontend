'use client';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/organisme/HeroSection/HeroSection';
import WhyVeloraSection from '@/components/organisme/WhyVeloraSection/WhyVeloraSection';

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
      <WhyVeloraSection />
      <CodeExampleSection />
      <ContactUsSection />
    </>
  );
};

export default LandingPage;
