import { clients } from '../../content/clients';
import { Container } from '../ui/Container';

export function TrustStrip() {
  if (clients.length === 0) return null;

  return (
    <div className="border-b border-sand-200 bg-white py-8">
      <Container>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-between">
          <p className="shrink-0 text-sm font-semibold text-night-400">ארגונים ורשויות עובדים איתנו</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {clients.map((client) => (
              <img
                key={client.name}
                src={client.logo}
                alt={client.name}
                className="h-10 w-auto object-contain grayscale transition hover:grayscale-0"
                loading="lazy"
                width={110}
                height={40}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
