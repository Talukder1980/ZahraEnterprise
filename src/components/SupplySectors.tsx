import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DivisionId, SUPPLY_DIVISIONS } from '../data/enterpriseData';
import { ResilientImage } from './ResilientImage';

interface SupplySectorsProps {
  onSelectInquiryScope: (divisionTitle: string, categoryTitle?: string) => void;
}

const FILTER_OPTIONS: { id: DivisionId; label: string }[] = [
  { id: 'all', label: 'All Divisions' },
  { id: 'general-goods', label: 'General Goods Supply' },
  { id: 'specialized-procurement', label: 'Specialized Procurement' },
  { id: 'services', label: 'Services & Logistics' },
];

export function SupplySectors({ onSelectInquiryScope }: SupplySectorsProps) {
  const [activeDivision, setActiveDivision] = useState<DivisionId>('all');

  const visibleDivisions =
    activeDivision === 'all'
      ? SUPPLY_DIVISIONS
      : SUPPLY_DIVISIONS.filter((division) => division.id === activeDivision);

  return (
    <section id="sectors" className="bg-white border-b border-slate-200 py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Interactive Division Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-sky-700 mb-2">02. Core Business Areas</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] mb-3">
              Adaptable Supply Across Three Core Divisions
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              As a dedicated supplier of all kinds of goods and services in Bangladesh, our portfolio covers workplace essentials, industrial inputs, and end-to-end fulfillment. Select any division or line item below to initiate a tailored quote.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter supply divisions"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-slate-100 rounded-lg border border-slate-200 self-start lg:self-auto"
          >
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeDivision === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveDivision(option.id)}
                  className={`px-3.5 py-2 min-h-[38px] text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="space-y-12">
          {visibleDivisions.map((division, idx) => (
            <article
              key={division.id}
              className="border border-slate-200 rounded-lg bg-slate-50/50 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Division Image Panel */}
                <div
                  className={`lg:col-span-5 flex flex-col bg-slate-100 ${
                    idx % 2 === 1 ? 'lg:order-2 lg:border-l' : 'lg:border-r'
                  } border-b lg:border-b-0 border-slate-200`}
                >
                  <ResilientImage
                    src={division.image}
                    alt={division.imageAlt}
                    aspectClassName="aspect-4/3 lg:aspect-auto lg:h-full"
                    className="w-full h-full object-cover min-h-[240px]"
                    fallbackLabel={division.title}
                  />
                </div>

                {/* Division Content & Supply Categories */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div>
                        <p className="text-xs font-medium text-slate-500 font-mono mb-1">
                          {division.code}
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                          {division.title}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectInquiryScope(division.title)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 min-h-[40px] text-xs font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                      >
                        <span>Request Division Quote</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                      {division.summary}
                    </p>

                    <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
                      {division.categories.map((category) => (
                        <div
                          key={category.id}
                          className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                        >
                          <div className="pr-4">
                            <h4 className="text-sm font-semibold text-slate-900">
                              {category.title}
                            </h4>
                            <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                              {category.description}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() =>
                              onSelectInquiryScope(division.title, category.title)
                            }
                            className="self-start sm:self-center inline-flex items-center gap-1 px-3 py-1.5 min-h-[36px] text-xs font-medium text-slate-700 hover:text-sky-700 hover:bg-slate-50 border border-slate-200 rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700"
                          >
                            <span>Inquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
