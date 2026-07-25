import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { enterpriseFeature } from '../../content/home';

export function EnterpriseFeature() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="animate-fade-up">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-ember-500">{enterpriseFeature.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-night-800 sm:text-4xl">
            {enterpriseFeature.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-night-500">{enterpriseFeature.description}</p>
          <ul className="mt-7 space-y-3">
            {enterpriseFeature.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-night-700">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-ember-500" aria-hidden="true" />
                <span className="leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>
          <Button to={enterpriseFeature.href} size="lg" className="mt-8">
            {enterpriseFeature.cta}
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
        </div>
        <img
          src={enterpriseFeature.image}
          alt="אירוע חברה מופק על ידי דרומה בשטח המדבר"
          className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
          loading="lazy"
          width={720}
          height={540}
        />
      </div>
    </Section>
  );
}
