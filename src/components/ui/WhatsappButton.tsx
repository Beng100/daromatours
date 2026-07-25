import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../../config/business';

interface WhatsappButtonProps {
  message?: string;
  variant?: 'floating' | 'inline';
  label?: string;
}

export function WhatsappButton({ message, variant = 'inline', label = 'שיחה בוואטסאפ' }: WhatsappButtonProps) {
  if (variant === 'floating') {
    return (
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="פתיחת שיחה בוואטסאפ עם דרומה"
        className="fixed bottom-5 left-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-transform hover:scale-105 sm:bottom-6 sm:left-6"
      >
        <MessageCircle size={26} aria-hidden="true" />
      </a>
    );
  }

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
    >
      <MessageCircle size={18} aria-hidden="true" />
      {label}
    </a>
  );
}
