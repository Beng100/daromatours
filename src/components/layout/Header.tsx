import { useEffect, useRef, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { mainNav } from '../../content/navigation';
import { business } from '../../config/business';
import { Button } from '../ui/Button';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-white/95 backdrop-blur">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src="/images/logo/daroma-logo.webp" alt={business.brandFull} className="h-12 w-12 rounded-full object-cover" width={48} height={48} />
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-night-800">{business.brandName}</span>
            <span className="text-xs font-medium text-ember-500">{business.brandTagline}</span>
          </span>
        </Link>

        <nav aria-label="ניווט ראשי" className="hidden items-center gap-1 lg:flex" ref={dropdownRef}>
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-night-600 transition hover:bg-sand-100 hover:text-ember-500"
                  aria-expanded={openDropdown === item.href}
                  aria-haspopup="true"
                  onClick={() => setOpenDropdown(openDropdown === item.href ? null : item.href)}
                >
                  {item.label}
                  <ChevronDown size={16} aria-hidden="true" className={openDropdown === item.href ? 'rotate-180 transition-transform' : 'transition-transform'} />
                </button>
                {openDropdown === item.href && (
                  <div className="absolute end-0 top-full z-10 mt-2 w-72 rounded-2xl border border-sand-200 bg-white p-2 shadow-soft">
                    <Link
                      to={item.href}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-ember-500 hover:bg-sand-100"
                      onClick={() => setOpenDropdown(null)}
                    >
                      כל האטרקציות והחוויות
                    </Link>
                    <div className="my-1 h-px bg-sand-200" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-xl px-3 py-2 text-sm text-night-600 hover:bg-sand-100 hover:text-ember-500"
                        onClick={() => setOpenDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-sand-100 hover:text-ember-500 ${
                    isActive ? 'text-ember-500' : 'text-night-600'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button to="/contact" size="md">
            קבלת הצעה
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sand-200 text-night-800 lg:hidden"
          aria-label={mobileOpen ? 'סגירת תפריט' : 'פתיחת תפריט'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav aria-label="ניווט מובייל" className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-sand-200 bg-white lg:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  to={item.href}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-night-700 hover:bg-sand-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="ms-4 flex flex-col gap-1 border-s border-sand-200 ps-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-night-500 hover:bg-sand-100 hover:text-ember-500"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Button to="/contact" size="md" className="mt-3 justify-center">
              קבלת הצעה
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
