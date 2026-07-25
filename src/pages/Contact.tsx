import { type FormEvent, type ReactNode, useState } from 'react';
import { ArrowLeft, Loader2, Mail, MapPin, Phone } from 'lucide-react';
import { useSeo } from '../hooks/useSeo';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { WhatsappButton } from '../components/ui/WhatsappButton';
import { business } from '../config/business';
import {
  contactPage,
  activityTypeOptions,
  contactFormLabels,
  contactFormMessages,
  regionOptions
} from '../content/contact';

interface FormState {
  fullName: string;
  organization: string;
  phone: string;
  email: string;
  activityType: string;
  participants: string;
  preferredDate: string;
  region: string;
  message: string;
  marketingConsent: boolean;
  privacyConsent: boolean;
}

const initialState: FormState = {
  fullName: '',
  organization: '',
  phone: '',
  email: '',
  activityType: '',
  participants: '',
  preferredDate: '',
  region: '',
  message: '',
  marketingConsent: false,
  privacyConsent: false
};

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const PHONE_PATTERN = /^0\d{1,2}-?\d{6,7}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  useSeo();
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) next.fullName = contactFormMessages.requiredField;
    if (!form.phone.trim()) next.phone = contactFormMessages.requiredField;
    else if (!PHONE_PATTERN.test(form.phone.trim())) next.phone = contactFormMessages.invalidPhone;
    if (!form.email.trim()) next.email = contactFormMessages.requiredField;
    else if (!EMAIL_PATTERN.test(form.email.trim())) next.email = contactFormMessages.invalidEmail;
    if (!form.activityType) next.activityType = contactFormMessages.requiredField;
    if (!form.privacyConsent) next.privacyConsent = contactFormMessages.privacyRequired;

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (status === 'submitting') return;
    if (!validate()) return;

    setStatus('submitting');

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT as string | undefined;

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form)
        });
        if (!response.ok) throw new Error('Request failed');
      } else {
        const activityLabel = activityTypeOptions.find((o) => o.value === form.activityType)?.label ?? form.activityType;
        const body = [
          `שם מלא: ${form.fullName}`,
          form.organization && `חברה/ארגון: ${form.organization}`,
          `טלפון: ${form.phone}`,
          `סוג פעילות: ${activityLabel}`,
          form.participants && `מספר משתתפים: ${form.participants}`,
          form.preferredDate && `תאריך רצוי: ${form.preferredDate}`,
          form.region && `אזור פעילות: ${form.region}`,
          form.message && `הודעה: ${form.message}`
        ]
          .filter(Boolean)
          .join('\n');
        window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
          'פנייה חדשה מאתר דרומה'
        )}&body=${encodeURIComponent(body)}`;
      }
      setStatus('success');
      setForm(initialState);
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <div className="container">
        <Breadcrumbs items={[{ name: 'צור קשר', path: '/contact' }]} />
      </div>

      <Section className="pt-0">
        <SectionHeading eyebrow="הזמנות ויצירת קשר" title={contactPage.heading} description={contactPage.intro} />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-night-800">{contactPage.formHeading}</h2>

            {status === 'success' && (
              <div role="status" className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-800">
                {contactFormMessages.success}
              </div>
            )}
            {status === 'error' && (
              <div role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {contactFormMessages.error}
              </div>
            )}

            <form noValidate onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
              <Field label={contactFormLabels.fullName} error={errors.fullName} htmlFor="fullName">
                <input
                  id="fullName"
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => update('fullName', e.target.value)}
                  aria-invalid={Boolean(errors.fullName)}
                  className={inputClass(Boolean(errors.fullName))}
                />
              </Field>

              <Field label={contactFormLabels.organization} htmlFor="organization">
                <input
                  id="organization"
                  autoComplete="organization"
                  value={form.organization}
                  onChange={(e) => update('organization', e.target.value)}
                  className={inputClass(false)}
                />
              </Field>

              <Field label={contactFormLabels.phone} error={errors.phone} htmlFor="phone">
                <input
                  id="phone"
                  type="tel"
                  dir="ltr"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  className={inputClass(Boolean(errors.phone))}
                />
              </Field>

              <Field label={contactFormLabels.email} error={errors.email} htmlFor="email">
                <input
                  id="email"
                  type="email"
                  dir="ltr"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  className={inputClass(Boolean(errors.email))}
                />
              </Field>

              <Field label={contactFormLabels.activityType} error={errors.activityType} htmlFor="activityType">
                <select
                  id="activityType"
                  value={form.activityType}
                  onChange={(e) => update('activityType', e.target.value)}
                  aria-invalid={Boolean(errors.activityType)}
                  className={inputClass(Boolean(errors.activityType))}
                >
                  <option value="">בחרו סוג פעילות</option>
                  {activityTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={contactFormLabels.participants} htmlFor="participants">
                <input
                  id="participants"
                  type="number"
                  min={1}
                  inputMode="numeric"
                  value={form.participants}
                  onChange={(e) => update('participants', e.target.value)}
                  className={inputClass(false)}
                />
              </Field>

              <Field label={contactFormLabels.preferredDate} htmlFor="preferredDate">
                <input
                  id="preferredDate"
                  type="date"
                  value={form.preferredDate}
                  onChange={(e) => update('preferredDate', e.target.value)}
                  className={inputClass(false)}
                />
              </Field>

              <Field label={contactFormLabels.region} htmlFor="region">
                <select
                  id="region"
                  value={form.region}
                  onChange={(e) => update('region', e.target.value)}
                  className={inputClass(false)}
                >
                  <option value="">בחרו אזור</option>
                  {regionOptions.map((region) => (
                    <option key={region} value={region}>
                      {region}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label={contactFormLabels.message} htmlFor="message" full>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={inputClass(false)}
                />
              </Field>

              <div className="flex items-start gap-2 sm:col-span-2">
                <input
                  id="marketingConsent"
                  type="checkbox"
                  checked={form.marketingConsent}
                  onChange={(e) => update('marketingConsent', e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-sand-300 text-ember-500"
                />
                <label htmlFor="marketingConsent" className="text-sm text-night-600">
                  {contactFormLabels.marketingConsent}
                </label>
              </div>

              <div className="flex items-start gap-2 sm:col-span-2">
                <input
                  id="privacyConsent"
                  type="checkbox"
                  checked={form.privacyConsent}
                  onChange={(e) => update('privacyConsent', e.target.checked)}
                  aria-invalid={Boolean(errors.privacyConsent)}
                  className="mt-1 h-4 w-4 rounded border-sand-300 text-ember-500"
                />
                <label htmlFor="privacyConsent" className="text-sm text-night-600">
                  {contactFormLabels.privacyConsent}
                </label>
              </div>
              {errors.privacyConsent && <p className="-mt-3 text-sm text-red-600 sm:col-span-2">{errors.privacyConsent}</p>}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ember-500 px-6 py-3 font-semibold text-white transition hover:bg-ember-600 disabled:opacity-60 sm:col-span-2"
              >
                {status === 'submitting' && <Loader2 size={18} className="animate-spin" aria-hidden="true" />}
                {status === 'submitting' ? contactFormLabels.submitting : contactFormLabels.submit}
                {status !== 'submitting' && <ArrowLeft size={18} aria-hidden="true" />}
              </button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="font-display text-lg font-semibold text-night-800">יצירת קשר ישירה</h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone size={18} className="text-ember-500" aria-hidden="true" />
                  <a href={`tel:${business.phoneE164}`} dir="ltr" className="hover:text-ember-500">
                    {business.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} className="text-ember-500" aria-hidden="true" />
                  <a href={`mailto:${business.email}`} className="hover:text-ember-500">
                    {business.email}
                  </a>
                </li>
                {business.branches.map((branch) => (
                  <li key={branch.label} className="flex items-start gap-2">
                    <MapPin size={18} className="mt-0.5 text-ember-500" aria-hidden="true" />
                    <span>
                      <strong>{branch.label}:</strong> {branch.address}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <WhatsappButton message="שלום דרומה, אשמח לקבל פרטים" />
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border px-4 py-2.5 text-night-800 focus:border-ember-500 focus:outline-none ${
    hasError ? 'border-red-400' : 'border-sand-300'
  }`;
}

function Field({
  label,
  htmlFor,
  error,
  children,
  full
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: ReactNode;
  full?: boolean;
}) {
  return (
    <div className={full ? 'sm:col-span-2' : ''}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-night-700">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
