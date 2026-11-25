import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/enterpriseData';
import { CircleLogo } from './CircleLogo';

interface HeaderProps {
  onRequestQuote: () => void;
}

const NAV_LINKS = [
  { label: 'Overview', href: '#overview' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Operations', href: '#operations' },
  { label: 'Contact', href: '#contact' },
];

export function Header({ onRequestQuote }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  const handleQuoteClick = () => {
    setMobileOpen(false);
    onRequestQuote();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand mark & single-line wordmark */}
        <a
          href="#top"
          className="inline-flex items-center gap-3 text-base sm:text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded-sm"
        >
          <CircleLogo size="sm" />
          <span>{COMPANY_INFO.businessName}</span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 border-b border-transparent hover:border-slate-900 hover:text-slate-900 transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary action + mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={handleQuoteClick}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 min-h-[40px] text-xs font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
          >
            Request Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
          >
            {mobileOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4">
          <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-3 min-h-[44px] flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleQuoteClick}
              className="mt-2 w-full min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors cursor-pointer"
            >
              Request Quote
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
