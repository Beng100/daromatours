import { ArrowLeft } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Button } from '../ui/Button';
import { audienceSegments } from '../../content/home';

export function AudienceSegments() {
  return (
    <Section tone="sand">
      <SectionHeading eyebrow="מתאימים לכם" title="מי אנחנו מלווים במדבר" />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {audienceSegments.map((segment) => (
          <div key={segment.href} className="group relative overflow-hidden rounded-2xl shadow-card">
            <img
              src={segment.image}
              alt={segment.title}
              loading="lazy"
              width={480}
              height={560}
              className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night-900/90 via-night-900/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <h3 className="font-display text-xl font-semibold text-white">{segment.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand-100">{segment.description}</p>
              <Button to={segment.href} variant="ghost" size="md" className="mt-4">
                לפרטים
                <ArrowLeft size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
