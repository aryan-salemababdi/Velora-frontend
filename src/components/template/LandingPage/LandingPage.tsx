'use client';
import dynamic from 'next/dynamic';



const HeroSection = dynamic(
  () => import('@/components/organisme/HeroSection/HeroSection'),
  { ssr: false },
);


const WhyTurboTrackSection = dynamic(
  () =>
    import('@/components/organisme/WhyTurboTrackSection/WhyTurboTrackSection'),
  { ssr: false },
);

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
