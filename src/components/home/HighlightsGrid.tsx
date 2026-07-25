import { ArrowLeft } from 'lucide-react';
import { Section, SectionHeading } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { homeHighlights } from '../../content/home';

export function HighlightsGrid() {
  return (
    <Section tone="sand">
      <SectionHeading eyebrow="עוד מהעולם של דרומה" title="חוויות משלימות לכל אירוע" />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {homeHighlights.map((item) => (
          <Card key={item.href} className="flex flex-col overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="h-44 w-full object-cover"
              loading="lazy"
              width={400}
              height={280}
            />
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-night-800">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-night-500">{item.description}</p>
              <Button to={item.href} variant="secondary" size="md" className="mt-5 self-start">
                עוד פרטים
                <ArrowLeft size={16} aria-hidden="true" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
