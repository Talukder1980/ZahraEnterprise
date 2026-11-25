import { useState } from 'react';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegalDocumentType, LegalModal } from './components/LegalModal';
import { OverviewAndVision } from './components/OverviewAndVision';
import { SupplySectors } from './components/SupplySectors';
import { WhyChooseUsAndClients } from './components/WhyChooseUsAndClients';

export default function App() {
  const [inquiryScope, setInquiryScope] = useState<{
    division?: string;
    category?: string;
    count: number;
  }>({ count: 0 });
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocumentType | null>(null);

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
      const orgInput = document.getElementById('org-name');
      if (orgInput instanceof HTMLInputElement) {
        setTimeout(() => orgInput.focus({ preventScroll: true }), 350);
      }
    }
  };

  const handleSelectInquiryScope = (divisionTitle: string, categoryTitle?: string) => {
    setInquiryScope((prev) => ({
      division: divisionTitle,
      category: categoryTitle,
      count: prev.count + 1,
    }));
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Header onRequestQuote={scrollToContact} />
      <main className="flex-1">
        <Hero onRequestQuote={scrollToContact} />
        <OverviewAndVision />
        <SupplySectors onSelectInquiryScope={handleSelectInquiryScope} />
        <WhyChooseUsAndClients />
        <ContactSection
          preselectedDivision={inquiryScope.division}
          preselectedCategory={inquiryScope.category}
          inquiryTriggerCount={inquiryScope.count}
          onOpenLegal={setActiveLegalDoc}
        />
      </main>
      <Footer onOpenLegal={setActiveLegalDoc} />
      <LegalModal
        activeDocument={activeLegalDoc}
        onSelectDocument={setActiveLegalDoc}
        onClose={() => setActiveLegalDoc(null)}
      />
    </div>
  );
}
