import { useEffect } from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO } from '../data/enterpriseData';

export type LegalDocumentType = 'privacy' | 'terms';

interface LegalModalProps {
  activeDocument: LegalDocumentType | null;
  onSelectDocument: (doc: LegalDocumentType) => void;
  onClose: () => void;
}

export function LegalModal({
  activeDocument,
  onSelectDocument,
  onClose,
}: LegalModalProps) {
  useEffect(() => {
    if (!activeDocument) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDocument, onClose]);

  if (!activeDocument) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[85vh] bg-white border border-slate-200 rounded-lg shadow-xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between gap-4 bg-slate-50">
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-md">
            <button
              type="button"
              onClick={() => onSelectDocument('privacy')}
              className={`px-3.5 py-1.5 min-h-[36px] text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                activeDocument === 'privacy'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onSelectDocument('terms')}
              className={`px-3.5 py-1.5 min-h-[36px] text-xs font-semibold rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                activeDocument === 'terms'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Terms of Use
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close legal document"
            className="inline-flex items-center justify-center w-10 h-10 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Scrollable Legal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-600 leading-relaxed">
          {activeDocument === 'privacy' ? (
            <>
              <div className="border-b border-slate-200 pb-4">
                <p className="text-xs font-medium text-sky-700 mb-1">
                  {COMPANY_INFO.businessName}
                </p>
                <h2
                  id="legal-modal-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
                >
                  Privacy Policy
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Effective Date: November 2026 · Applicable Jurisdiction: Bangladesh
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  1. Overview &amp; Scope
                </h3>
                <p>
                  {COMPANY_INFO.businessName} (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or
                  &ldquo;us&rdquo;) respects the privacy of corporate clients, government
                  agencies, non-governmental organizations, educational institutions, and
                  industrial partners using {COMPANY_INFO.website}. This Privacy Policy
                  explains how business and contact information submitted through our
                  website is collected, used, and safeguarded.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  2. Information We Collect
                </h3>
                <p>
                  When you submit a procurement inquiry or quotation request, we collect
                  only the business information you voluntarily provide, which may include:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Organization or company name and client sector classification.</li>
                  <li>Contact person name, designation, business email address, and phone number.</li>
                  <li>
                    Procurement specifications, supply categories, delivery districts, and
                    contract type preferences.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  3. How We Use Collected Information
                </h3>
                <p>We use your information strictly for legitimate business and supply operations:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Preparing formal quotations, product specifications, and tender responses.</li>
                  <li>
                    Coordinating sourcing, vendor verification, and nationwide logistics
                    across Bangladesh.
                  </li>
                  <li>
                    Maintaining statutory trade, invoicing, VAT, and tax records required under
                    the laws of the People&rsquo;s Republic of Bangladesh.
                  </li>
                </ul>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  4. Data Sharing &amp; Confidentiality
                </h3>
                <p>
                  We do not sell, rent, or trade client contact information to third parties
                  for marketing purposes. Procurement specifications may be shared solely on a
                  need-to-know basis with vetted manufacturers, authorized distributors, or
                  logistics carriers to fulfill your requested quotation or delivery schedule.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  5. Data Retention &amp; Contact
                </h3>
                <p>
                  Business correspondence is retained only as long as necessary to complete
                  procurement evaluations, administer active supply contracts, or satisfy
                  regulatory obligations. To request updates or removal of your business
                  contact details, please contact {COMPANY_INFO.contactPerson} ({COMPANY_INFO.contactRole}) at{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sky-700 hover:underline font-mono"
                  >
                    {COMPANY_INFO.email}
                  </a>{' '}
                  or{' '}
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="text-sky-700 hover:underline font-mono tabular-nums"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                  .
                </p>
              </section>
            </>
          ) : (
            <>
              <div className="border-b border-slate-200 pb-4">
                <p className="text-xs font-medium text-sky-700 mb-1">
                  {COMPANY_INFO.businessName}
                </p>
                <h2
                  id="legal-modal-title"
                  className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900"
                >
                  Terms of Use
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Effective Date: November 2026 · Governing Law: People&rsquo;s Republic of Bangladesh
                </p>
              </div>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  1. Acceptance of Terms
                </h3>
                <p>
                  By accessing or using the website of {COMPANY_INFO.businessName} (
                  {COMPANY_INFO.website}), you agree to be bound by these Terms of Use and all
                  applicable laws and trade regulations of the People&rsquo;s Republic of
                  Bangladesh. If you are accessing this site on behalf of an organization,
                  you represent that you are authorized to submit procurement inquiries on its
                  behalf.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  2. Quotations, Tenders &amp; Supply Agreements
                </h3>
                <p>
                  Information published on this website—including supply divisions, product
                  categories, and service descriptions—is provided for general commercial
                  reference. Submitting an online inquiry does not establish a binding
                  contract or price lock. All pricing, product availability, technical
                  specifications, delivery schedules, and payment terms are confirmed strictly
                  through formal written quotations, purchase orders, tender awards, or
                  executed supply contracts.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  3. Accuracy of Client Submissions
                </h3>
                <p>
                  When requesting a quotation, you agree to provide accurate organizational
                  and technical details so our procurement team can conduct reliable vendor
                  sourcing and compliance checks.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  4. Intellectual Property
                </h3>
                <p>
                  All text, layout, and brand identifiers on this website—including the name{' '}
                  {COMPANY_INFO.businessName}—are the property of {COMPANY_INFO.businessName}{' '}
                  and may not be reproduced, republished, or used for unauthorized commercial
                  misrepresentation without prior written consent.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  5. Limitation of Liability &amp; Governing Law
                </h3>
                <p>
                  {COMPANY_INFO.businessName} provides this informational website on an
                  &ldquo;as-available&rdquo; basis and makes no warranties regarding
                  uninterrupted access. To the fullest extent permitted under Bangladeshi law,
                  we shall not be liable for indirect or consequential damages arising from
                  the use of this website. Any disputes relating to these Terms of Use shall
                  be governed by and construed in accordance with the laws of the People&rsquo;s
                  Republic of Bangladesh.
                </p>
              </section>

              <section className="space-y-2">
                <h3 className="text-base font-semibold text-slate-900">
                  6. Legal &amp; Compliance Inquiries
                </h3>
                <p>
                  Questions regarding these Terms of Use may be directed to{' '}
                  {COMPANY_INFO.businessName} ({COMPANY_INFO.location}) via{' '}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sky-700 hover:underline font-mono"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  .
                </p>
              </section>
            </>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between gap-4">
          <span className="text-xs text-slate-500">
            {COMPANY_INFO.businessName} · {COMPANY_INFO.location}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 min-h-[40px] text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
