import { Section, SectionHeading } from '../ui/Section';
import { processSteps } from '../../content/home';

export function ProcessTimeline() {
  return (
    <Section>
      <SectionHeading align="center" eyebrow="תהליך העבודה" title="משלב הרעיון ועד הביצוע בשטח" />
      <div className="relative mt-14 grid gap-10 md:grid-cols-3">
        <div
          aria-hidden="true"
          className="absolute top-6 hidden h-px w-full bg-gradient-to-l from-transparent via-sand-300 to-transparent md:block"
        />
        {processSteps.map((step, index) => (
          <div key={step.title} className="relative flex flex-col items-center text-center md:items-start md:text-start">
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ember-500 font-display text-lg font-bold text-white shadow-soft">
              {index + 1}
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-night-800">{step.title}</h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-night-500">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
