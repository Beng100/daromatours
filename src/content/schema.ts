import { business } from '../config/business';
import { BASE_URL } from './seo';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: business.brandFull,
    alternateName: business.legalName,
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo/daroma-logo.webp`,
    telephone: business.phoneE164,
    email: business.email
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.brandFull,
    telephone: business.phoneE164,
    email: business.email,
    url: BASE_URL,
    address: business.branches.map((branch) => ({
      '@type': 'PostalAddress',
      addressCountry: 'IL',
      streetAddress: branch.address,
      description: branch.label
    })),
    areaServed: business.serviceAreas
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${path}`,
    provider: {
      '@type': 'Organization',
      name: business.brandFull
    },
    areaServed: business.serviceAreas
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`
    }))
  };
}
