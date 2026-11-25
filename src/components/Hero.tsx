import { ArrowRight } from 'lucide-react';
import { COMPANY_INFO, HERO_IMAGE, OPERATIONAL_METRICS } from '../data/enterpriseData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onRequestQuote: () => void;
}

export function Hero({ onRequestQuote }: HeroProps) {
  return (
    <section id="top" className="bg-white border-b border-slate-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-16">
        {/* Balanced 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            <div>
              <p className="text-xs font-medium text-slate-500 flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sky-700 font-semibold">Dedicated Supplier in Bangladesh</span>
                <span aria-hidden="true">·</span>
                <span>{COMPANY_INFO.businessType}</span>
                <span aria-hidden="true">·</span>
                <span>{COMPANY_INFO.location}</span>
              </p>

              <h1 className="text-[clamp(2.25rem,4vw,3.5rem)] font-bold tracking-tight leading-[1.08] text-slate-900 [text-wrap:balance] mb-6">
                {COMPANY_INFO.tagline}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                {COMPANY_INFO.overviewParagraphs[0]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onRequestQuote}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
              >
                <span>Request Procurement Quote</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <a
                href="#sectors"
                className="inline-flex items-center justify-center px-5 py-3 min-h-[44px] text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
              >
                Explore Supply Sectors
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col">
            <div className="relative overflow-hidden rounded-lg border border-slate-200 bg-slate-100 flex-1 min-h-[280px] lg:min-h-[380px]">
              <ResilientImage
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                aspectClassName="aspect-video lg:aspect-auto lg:h-full"
                className="w-full h-full object-cover"
                fallbackLabel="Zahra Enterprise Distribution Center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent px-5 py-4">
                <p className="text-xs font-medium text-white/95">
                  Multi-sector inventory staging &amp; nationwide dispatch · Dhaka and Bogura corridors
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Operational Strip below Hero Split */}
        <div className="mt-12 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {OPERATIONAL_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-xs font-medium text-slate-500 mb-1">{metric.label}</span>
              <span className="text-xl font-bold tracking-tight text-slate-900 font-mono tabular-nums">
                {metric.value}
              </span>
              <span className="text-sm text-slate-600 mt-1">{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
