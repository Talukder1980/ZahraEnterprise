import { FormEvent, useEffect, useState } from 'react';
import { Check, Copy, Mail, MapPin, Phone, Send } from 'lucide-react';
import { COMPANY_INFO, SUPPLY_DIVISIONS, TARGET_CLIENTELE } from '../data/enterpriseData';
import { CircleLogo } from './CircleLogo';
import { LegalDocumentType } from './LegalModal';

interface ContactSectionProps {
  preselectedDivision?: string;
  preselectedCategory?: string;
  inquiryTriggerCount: number;
  onOpenLegal: (doc: LegalDocumentType) => void;
}

interface FormState {
  organization: string;
  contactName: string;
  email: string;
  phone: string;
  clientType: string;
  division: string;
  contractType: string;
  details: string;
}

interface FormErrors {
  organization?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  details?: string;
}

export function ContactSection({
  preselectedDivision,
  preselectedCategory,
  inquiryTriggerCount,
  onOpenLegal,
}: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    organization: '',
    contactName: '',
    email: '',
    phone: '',
    clientType: TARGET_CLIENTELE[0].title,
    division: SUPPLY_DIVISIONS[0].title,
    contractType: 'One-Time Bulk Purchase',
    details: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<'phone' | 'email' | null>(null);

  useEffect(() => {
    if (inquiryTriggerCount > 0 && preselectedDivision) {
      setSubmittedRef(null);
      setForm((prev) => ({
        ...prev,
        division: preselectedDivision,
        details: preselectedCategory
          ? `Requesting quotation and availability for: ${preselectedCategory} (${preselectedDivision}).`
          : `Requesting quotation for ${preselectedDivision}.`,
      }));
    }
  }, [preselectedDivision, preselectedCategory, inquiryTriggerCount]);

  const handleCopy = async (value: string, field: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch {
      // Clipboard API unavailable in non-secure context; fallback handled silently
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!form.organization.trim()) {
      nextErrors.organization = 'Please enter your organization or company name.';
    }
    if (!form.contactName.trim()) {
      nextErrors.contactName = 'Please enter a contact person name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid business email address.';
    }
    const phoneCleaned = form.phone.replace(/[\s\-()]/g, '');
    if (phoneCleaned.length < 8) {
      nextErrors.phone = 'Please enter a valid contact phone number.';
    }
    if (form.details.trim().length < 10) {
      nextErrors.details = 'Please describe the items, quantities, or service scope needed.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    const referenceCode = `ZE-${new Date().getFullYear()}-${String(
      Math.floor(1000 + Math.random() * 9000)
    )}`;
    setSubmittedRef(referenceCode);
  };

  const handleReset = () => {
    setSubmittedRef(null);
    setForm({
      organization: '',
      contactName: '',
      email: '',
      phone: '',
      clientType: TARGET_CLIENTELE[0].title,
      division: SUPPLY_DIVISIONS[0].title,
      contractType: 'One-Time Bulk Purchase',
      details: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Conclusion & Company Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs font-medium text-sky-700 mb-2">06. Strategic Partnership</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] mb-4">
                Discuss Your Procurement Requirements
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {COMPANY_INFO.conclusion}
              </p>
            </div>

            <div className="border-t border-slate-200 pt-6 space-y-5">
              <div className="flex items-center gap-4">
                <CircleLogo size="lg" className="border border-slate-200" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">Company Directory</h3>
                  <p className="text-xs text-slate-500 mt-0.5">{COMPANY_INFO.businessName}</p>
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                <div className="flex flex-col">
                  <dt className="text-xs font-medium text-slate-500">Business Name &amp; Type</dt>
                  <dd className="text-slate-900 font-semibold mt-0.5">
                    {COMPANY_INFO.businessName} ·{' '}
                    <span className="font-normal text-slate-600">{COMPANY_INFO.businessType}</span>
                  </dd>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-slate-400 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <dt className="text-xs font-medium text-slate-500">Locations</dt>
                    <dd className="text-slate-900 mt-0.5">{COMPANY_INFO.location}</dd>
                  </div>
                </div>

                <div className="flex flex-col">
                  <dt className="text-xs font-medium text-slate-500">Contact Person</dt>
                  <dd className="text-slate-900 font-medium mt-0.5">
                    {COMPANY_INFO.contactPerson}
                  </dd>
                  <dd className="text-slate-600 text-xs mt-0.5">{COMPANY_INFO.contactRole}</dd>
                </div>

                <div className="flex items-center justify-between gap-3 pt-1">
                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-slate-400 mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-medium text-slate-500">Direct Phone</dt>
                      <dd className="mt-0.5">
                        <a
                          href={COMPANY_INFO.phoneHref}
                          className="text-slate-900 font-mono tabular-nums hover:text-sky-700 transition-colors"
                        >
                          {COMPANY_INFO.phone}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                    aria-label="Copy phone number"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[34px] text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-slate-400 mt-1 shrink-0" aria-hidden="true" />
                    <div>
                      <dt className="text-xs font-medium text-slate-500">Business Email</dt>
                      <dd className="mt-0.5">
                        <a
                          href={`mailto:${COMPANY_INFO.email}`}
                          className="text-slate-900 font-mono hover:text-sky-700 transition-colors"
                        >
                          {COMPANY_INFO.email}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[34px] text-xs font-medium text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column: Validated Procurement Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8">
              {submittedRef ? (
                <div className="py-6 space-y-5" role="status" aria-live="polite">
                  <div className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-md">
                    <Check className="w-4 h-4" aria-hidden="true" />
                    <span>Inquiry Recorded · Reference {submittedRef}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    Procurement Request Prepared for {form.organization}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thank you, {form.contactName}. Your inquiry for{' '}
                    <span className="font-medium text-slate-900">{form.division}</span> (
                    {form.contractType}) has been logged locally. For immediate tender coordination, send your requirement directly via email or reach{' '}
                    {COMPANY_INFO.contactPerson} at{' '}
                    <span className="font-mono text-slate-900">{COMPANY_INFO.phone}</span>.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(
                        `[${submittedRef}] Procurement Inquiry — ${form.organization}`
                      )}&body=${encodeURIComponent(
                        `Organization: ${form.organization}\nContact: ${form.contactName}\nPhone: ${form.phone}\nSector: ${form.clientType}\nDivision: ${form.division}\nContract Type: ${form.contractType}\n\nRequirements:\n${form.details}`
                      )}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors whitespace-nowrap"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-4 py-2.5 min-h-[44px] text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Request a Supply Quotation
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Provide your organization details and supply scope for a tailored quotation.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="org-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Organization / Company Name
                      </label>
                      <input
                        id="org-name"
                        type="text"
                        value={form.organization}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, organization: e.target.value }))
                        }
                        placeholder="e.g., Bengal Manufacturing Ltd."
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      />
                      {errors.organization && (
                        <p className="mt-1 text-xs text-red-700">{errors.organization}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Contact Person
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.contactName}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, contactName: e.target.value }))
                        }
                        placeholder="Full name & designation"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      />
                      {errors.contactName && (
                        <p className="mt-1 text-xs text-red-700">{errors.contactName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Business Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, email: e.target.value }))
                        }
                        placeholder="procurement@company.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-700">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, phone: e.target.value }))
                        }
                        placeholder="+880 1XXX XXXXXX"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-700">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label
                        htmlFor="client-type"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Organization Sector
                      </label>
                      <select
                        id="client-type"
                        value={form.clientType}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, clientType: e.target.value }))
                        }
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      >
                        {TARGET_CLIENTELE.map((client) => (
                          <option key={client.index} value={client.title}>
                            {client.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="supply-division"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Supply Division
                      </label>
                      <select
                        id="supply-division"
                        value={form.division}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, division: e.target.value }))
                        }
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      >
                        {SUPPLY_DIVISIONS.map((div) => (
                          <option key={div.id} value={div.title}>
                            {div.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contract-type"
                        className="block text-xs font-semibold text-slate-700 mb-1.5"
                      >
                        Engagement Type
                      </label>
                      <select
                        id="contract-type"
                        value={form.contractType}
                        onChange={(e) =>
                          setForm((prev) => ({ ...prev, contractType: e.target.value }))
                        }
                        className="w-full px-3 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                      >
                        <option value="One-Time Bulk Purchase">One-Time Bulk Purchase</option>
                        <option value="Long-Term Supply Contract">Long-Term Supply Contract</option>
                        <option value="Institutional Tender / RFQ">Institutional Tender / RFQ</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="supply-details"
                      className="block text-xs font-semibold text-slate-700 mb-1.5"
                    >
                      Supply List &amp; Delivery Location
                    </label>
                    <textarea
                      id="supply-details"
                      rows={4}
                      value={form.details}
                      onChange={(e) =>
                        setForm((prev) => ({ ...prev, details: e.target.value }))
                      }
                      placeholder="Outline requested items, estimated quantities, delivery district, and timeline..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-md text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-700 focus:border-sky-700"
                    />
                    {errors.details && (
                      <p className="mt-1 text-xs text-red-700">{errors.details}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      By submitting, you agree to our{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal('privacy')}
                        className="text-slate-700 underline hover:text-sky-700 cursor-pointer"
                      >
                        Privacy Policy
                      </button>{' '}
                      and{' '}
                      <button
                        type="button"
                        onClick={() => onOpenLegal('terms')}
                        className="text-slate-700 underline hover:text-sky-700 cursor-pointer"
                      >
                        Terms of Use
                      </button>
                      .
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Submit Procurement Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
