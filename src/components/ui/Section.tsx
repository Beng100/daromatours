import type { HTMLAttributes, ReactNode } from 'react';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  tone?: 'default' | 'sand' | 'night';
  as?: 'section' | 'div';
}

const toneClasses: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'bg-transparent',
  sand: 'bg-sand-100',
  night: 'bg-night-800 text-white'
};

export function Section({ children, tone = 'default', as = 'section', className = '', ...props }: SectionProps) {
  const Tag = as;
  return (
    <Tag className={`${toneClasses[tone]} py-14 sm:py-20 ${className}`} {...props}>
      <Container>{children}</Container>
    </Tag>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'start' | 'center';
  tone?: 'default' | 'night';
}

export function SectionHeading({ eyebrow, title, description, align = 'start', tone = 'default' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-start';
  const descColor = tone === 'night' ? 'text-sand-200' : 'text-night-400';
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ember-500">{eyebrow}</p>
      )}
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
      {description && <p className={`mt-4 text-lg leading-relaxed ${descColor}`}>{description}</p>}
    </div>
  );
}
