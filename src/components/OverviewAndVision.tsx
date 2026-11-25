import { COMPANY_INFO, OPERATIONS_IMAGE } from '../data/enterpriseData';
import { ResilientImage } from './ResilientImage';

export function OverviewAndVision() {
  return (
    <section id="overview" className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Company Overview & Vision/Mission */}
          <div className="lg:col-span-6">
            <p className="text-xs font-medium text-sky-700 mb-2">01. Company Overview</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] mb-5">
              Bridging Quality Products and Institutional Demand
            </h2>

            <div className="space-y-4 text-slate-600 text-base leading-relaxed">
              {COMPANY_INFO.overviewParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{COMPANY_INFO.vision}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{COMPANY_INFO.mission}</p>
              </div>
            </div>
          </div>

          {/* Right: Sourcing & Quality Review Visual */}
          <div className="lg:col-span-6">
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <ResilientImage
                src={OPERATIONS_IMAGE.src}
                alt={OPERATIONS_IMAGE.alt}
                aspectClassName="aspect-video"
                fallbackLabel="Procurement & Quality Assurance Team"
              />
              <div className="p-6 border-t border-slate-200">
                <div className="flex items-center justify-between gap-4 text-xs text-slate-500 mb-2">
                  <span>Procurement Governance</span>
                  <span aria-hidden="true">·</span>
                  <span>Dhaka &amp; Bogura Operations</span>
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Direct Manufacturer &amp; Importer Coordination
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every tender list and corporate purchase order undergoes specification verification, supplier vetting, and transparent pricing validation prior to dispatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
