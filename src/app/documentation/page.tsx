import { Heading } from '@/components/atom/Heading/Heading';
import DocsLayout from '@/components/template/DocsLayout/DocsLayout';

export default function DocsPage() {
  return (
    <>
      <Heading level={1}>Introduction</Heading>
      <p className="text-gray-300">
        Welcome to Velora’s official documentation. Here you’ll learn how to
        quickly set up and build scalable apps with Go.
      </p>
    </>
  );
}
