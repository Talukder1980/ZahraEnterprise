import { COMPANY_INFO } from '../data/enterpriseData';
import { CircleLogo } from './CircleLogo';
import { LegalDocumentType } from './LegalModal';

interface FooterProps {
  onOpenLegal: (doc: LegalDocumentType) => void;
}

export function Footer({ onOpenLegal }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <CircleLogo size="md" />
              <p className="text-base font-bold tracking-tight text-white">
                {COMPANY_INFO.businessName}
              </p>
            </div>
            <p className="text-sm text-slate-400 mt-3 max-w-sm leading-relaxed">
              {COMPANY_INFO.tagline}
            </p>
            <p className="text-xs text-slate-500 mt-3">
              Dedicated Supplier in Bangladesh · {COMPANY_INFO.businessType} · {COMPANY_INFO.location}
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold text-white mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#overview" className="hover:text-white transition-colors">
                  Company Overview
                </a>
              </li>
              <li>
                <a href="#sectors" className="hover:text-white transition-colors">
                  Supply Sectors
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#operations" className="hover:text-white transition-colors">
                  Operational Excellence
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Inquiry
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-white mb-3">Direct Contact</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="text-white font-medium">
                {COMPANY_INFO.contactPerson} — {COMPANY_INFO.contactRole}
              </li>
              <li>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-mono tabular-nums hover:text-white transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-mono hover:text-white transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <span className="font-mono text-slate-400">{COMPANY_INFO.website}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {year} {COMPANY_INFO.businessName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-sm"
            >
              Terms of Use
            </button>
            <span aria-hidden="true">·</span>
            <span>Dhaka &amp; Bogura, Bangladesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
