import {
  OPERATIONAL_EXCELLENCE,
  TARGET_CLIENTELE,
  WHY_CHOOSE_US,
} from '../data/enterpriseData';

export function WhyChooseUsAndClients() {
  return (
    <>
      {/* Why Choose Us: High-Contrast Dark Navy Architectural Section */}
      <section id="why-us" className="bg-slate-900 text-slate-100 py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium text-sky-400 tracking-wide mb-2">
                03. Competitive Advantage
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white [text-wrap:balance] mb-4">
                Why Organizations Partner With Zahra Enterprise
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed tracking-[0.01em]">
                Procurement teams choose us to consolidate fragmented vendor rosters into a single accountable supply chain backed by strict supplier vetting and reliable schedules.
              </p>
            </div>

            <div className="lg:col-span-7 divide-y divide-slate-800 border-t border-b border-slate-800">
              {WHY_CHOOSE_US.map((item) => (
                <div
                  key={item.number}
                  className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-start"
                >
                  <div className="sm:col-span-4 flex items-baseline gap-3">
                    <span className="text-xs font-mono tabular-nums text-sky-400">
                      {item.number}.
                    </span>
                    <h3 className="text-base font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="sm:col-span-8 text-sm text-slate-300 leading-relaxed tracking-[0.01em]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Clientele & Operational Excellence */}
      <section id="operations" className="bg-slate-50 border-b border-slate-200 py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
          {/* Operational Excellence */}
          <div>
            <div className="max-w-2xl mb-10">
              <p className="text-xs font-medium text-sky-700 mb-2">04. Operational Excellence</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] mb-3">
                Built for Auditable &amp; Compliant Supply Delivery
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Every engagement follows structured sourcing, ethical vendor management, and full statutory compliance across Bangladesh.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {OPERATIONAL_EXCELLENCE.map((pillar) => (
                <div
                  key={pillar.number}
                  className="bg-white border border-slate-200 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono tabular-nums text-slate-500 block mb-3">
                      {pillar.number}.
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Target Clientele */}
          <div className="pt-12 border-t border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-4">
                <p className="text-xs font-medium text-sky-700 mb-2">05. Target Clientele</p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 [text-wrap:balance] mb-3">
                  Institutional Sectors We Serve
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Our procurement workflows adapt to commercial purchase orders, government tender protocols, and NGO project timelines nationwide.
                </p>
              </div>

              <div className="lg:col-span-8 bg-white border border-slate-200 rounded-lg divide-y divide-slate-200">
                {TARGET_CLIENTELE.map((client) => (
                  <div
                    key={client.index}
                    className="p-5 sm:px-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6"
                  >
                    <div className="flex items-baseline gap-3 sm:w-1/2">
                      <span className="text-xs font-mono tabular-nums text-slate-400">
                        {client.index}.
                      </span>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {client.title}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 sm:w-1/2 leading-relaxed">
                      {client.scope}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
