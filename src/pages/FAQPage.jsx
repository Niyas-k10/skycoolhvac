import { FAQS } from '../data/faqs.js';
import { SEOHead } from '../components/common/SEOHead.jsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.jsx';
import { Accordion } from '../components/ui/Accordion.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { getFAQSchema } from '../utils/seoHelpers.js';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink.js';
import { MessageSquare, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site.config.js';

export function FAQPage() {
  const { getGeneralWhatsAppUrl } = useWhatsAppLink();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-10 pb-16">
      <SEOHead
        title="Frequently Asked Questions | Sky Cool HVAC Trading LLC"
        description="Find answers to common questions about purchasing AC spare parts, checking component compatibility, and delivery options in Dubai and the UAE."
        jsonLd={getFAQSchema(FAQS)}
      />

      <Breadcrumbs items={[{ name: 'FAQ', url: '/faq' }]} />

      <div className="text-center space-y-3">
        <Badge variant="primary">Help & Customer Support</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Everything you need to know about purchasing air conditioning spare parts, checking technical compatibility, and receiving deliveries in Dubai and the UAE.
        </p>
      </div>

      <Accordion items={FAQS} />

      <div className="bg-gradient-to-r from-slate-900 to-sky-950 text-white rounded-2xl p-6 sm:p-8 text-center space-y-4 shadow-lg">
        <h3 className="text-xl font-bold text-white">Have a specific part compatibility question?</h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto">
          Send a photo of your existing AC part model tag to our technical engineers on WhatsApp for instant identification.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button
            href={getGeneralWhatsAppUrl()}
            variant="whatsapp"
            size="md"
            icon={MessageSquare}
          >
            Ask Engineers on WhatsApp
          </Button>
          <Button
            href={`tel:${SITE_CONFIG.contact.phoneCall}`}
            variant="outline"
            size="md"
            icon={Phone}
            className="border-slate-700 text-white hover:bg-slate-800"
          >
            Call {SITE_CONFIG.contact.phoneDisplay}
          </Button>
        </div>
      </div>
    </div>
  );
}
