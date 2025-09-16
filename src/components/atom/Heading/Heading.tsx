import type { JSX } from 'react';

type HeadingProps = {
  level?: 1 | 2 | 3;
  className?: string;
  children: React.ReactNode;
};

export const Heading = ({ level = 1, className, children }: HeadingProps) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const baseStyles = 'font-bold text-white';
  const styles =
    level === 1
      ? 'text-4xl mb-4'
      : level === 2
        ? 'text-2xl mb-3'
        : 'text-xl mb-2';
  return <Tag className={`${baseStyles} ${styles} ${className}`}>{children}</Tag>;
};
