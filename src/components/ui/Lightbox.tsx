import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string }[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const current = images[index];

  useEffect(() => {
    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    function handleKey(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [index, images.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-night-900/90 p-4"
      onClick={onClose}
    >
      <button
        ref={closeButtonRef}
        type="button"
        onClick={onClose}
        aria-label="סגירת תצוגה מוגדלת"
        className="absolute end-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X size={22} />
      </button>

      <button
        type="button"
        aria-label="התמונה הקודמת"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + images.length) % images.length);
        }}
        className="absolute start-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:start-4"
      >
        <ChevronRight size={24} />
      </button>

      <img
        src={current.src}
        alt={current.alt}
        className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        aria-label="התמונה הבאה"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % images.length);
        }}
        className="absolute end-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 sm:end-4"
      >
        <ChevronLeft size={24} />
      </button>
    </div>
  );
}
