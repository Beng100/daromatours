import { ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-lg text-center">
        <p className="font-display text-6xl font-bold text-ember-400">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold text-night-800">העמוד לא נמצא</h1>
        <p className="mt-3 text-night-500">
          ייתכן שהקישור השתנה או שהעמוד הוסר. אפשר לחזור לדף הבית או לצפות באטרקציות שלנו.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/" size="lg">
            לדף הבית
            <ArrowLeft size={18} aria-hidden="true" />
          </Button>
          <Button to="/attractions" variant="secondary" size="lg">
            לאטרקציות
          </Button>
        </div>
      </div>
    </Section>
  );
}
