import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoFor, canonicalFor } from '../content/seo';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const entry = seoFor(pathname);
    const canonical = canonicalFor(pathname);

    document.title = entry.title;
    setMetaTag('name', 'description', entry.description);
    setMetaTag('property', 'og:title', entry.title);
    setMetaTag('property', 'og:description', entry.description);
    setMetaTag('property', 'og:url', canonical);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:locale', 'he_IL');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setCanonical(canonical);
  }, [pathname]);
}
