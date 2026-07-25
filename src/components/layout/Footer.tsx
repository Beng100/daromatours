import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon } from '../ui/SocialIcons';
import { footerNavPrimary, footerNavSecondary } from '../../content/navigation';
import { business } from '../../config/business';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night-800 text-sand-100">
      <div className="container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo/daroma-logo.webp"
              alt={business.brandFull}
              className="h-12 w-12 rounded-full object-cover"
              width={48}
              height={48}
              loading="lazy"
            />
            <div>
              <p className="font-display text-lg font-bold text-white">{business.brandName}</p>
              <p className="text-xs uppercase tracking-[0.15em] text-ember-200">{business.positioningEnglish}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-sand-200">
            הפקות אירועי יוקרה במדבר לחברות מובילות וארגוני הייטק — מהרעיון ועד הביצוע בשטח.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="דרומה באינסטגרם"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-ember-300 hover:text-ember-300"
            >
              <InstagramIcon width={18} height={18} />
            </a>
            <a
              href={business.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="דרומה בפייסבוק"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-ember-300 hover:text-ember-300"
            >
              <FacebookIcon width={18} height={18} />
            </a>
            <a
              href={business.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="דרומה ביוטיוב"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-ember-300 hover:text-ember-300"
            >
              <YoutubeIcon width={18} height={18} />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ember-200">מפת אתר</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNavPrimary.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sand-200 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ember-200">עוד</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {footerNavSecondary.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="text-sand-200 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ember-200">פרטי התקשרות</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Phone size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href={`tel:${business.phoneE164}`} dir="ltr" className="text-sand-200 hover:text-white">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
              <a href={`mailto:${business.email}`} className="text-sand-200 hover:text-white">
                {business.email}
              </a>
            </li>
            {business.branches.map((branch) => (
              <li key={branch.label} className="flex items-start gap-2">
                <MapPin size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sand-200">
                  <strong className="font-semibold text-white">{branch.label}:</strong> {branch.address}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ember-200">אזורי פעילות</h2>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm text-sand-200">
            {business.serviceAreas.map((area) => (
              <li key={area} className="rounded-full border border-white/15 px-3 py-1">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="container flex flex-col items-center justify-between gap-2 text-xs text-sand-300 sm:flex-row">
          <p>© {year} {business.legalName}. כל הזכויות שמורות.</p>
          <p>{business.domain}</p>
        </div>
      </div>
    </footer>
  );
}
