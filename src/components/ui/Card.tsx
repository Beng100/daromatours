import type { HTMLAttributes } from 'react';

export function Card({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-sand-200 bg-white shadow-card ${className}`}
      {...props}
    />
  );
}
