import { SEOHead } from '../components/common/SEOHead.jsx';
import { Breadcrumbs } from '../components/common/Breadcrumbs.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import { SITE_CONFIG } from '../config/site.config.js';
import { useWhatsAppLink } from '../hooks/useWhatsAppLink.js';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const { getGeneralWhatsAppUrl } = useWhatsAppLink();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    partRequired: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-12 pb-16">
      <SEOHead
        title="Contact Us & Jebel Ali Location | Sky Cool HVAC Trading LLC"
        description="Contact Sky Cool HVAC Trading LLC in Jebel Ali Industrial Area-1, Dubai. Call or WhatsApp +971509364656 for AC spare parts enquiries."
      />

      <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />

      <div className="space-y-3">
        <Badge variant="whatsapp">Dubai Location & Support</Badge>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contact SkyCool AC Spare Parts Dubai
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
          Visit our showroom in Deira Industrial Area or contact our sales engineers for immediate stock availability and wholesale pricing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
              Dubai Office & Showroom Details
            </h3>

            <div className="space-y-4 text-sm text-slate-700">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Showroom Address</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{SITE_CONFIG.contact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp Instant Desk</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.contact.whatsappDisplay}</p>
                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-emerald-600 hover:text-emerald-700 mt-1"
                  >
                    Click to Open Chat →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Sales Hotline</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.contact.phoneDisplay}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email Enquiries</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.contact.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Showroom Hours</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{SITE_CONFIG.contact.workingHours}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href={getGeneralWhatsAppUrl()}
                variant="whatsapp"
                size="lg"
                fullWidth
                icon={MessageSquare}
              >
                Instant WhatsApp Inquiry
              </Button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map & Showroom Enquiry Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Interactive Google Map Embed */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm aspect-16/9 sm:aspect-21/9">
            <iframe
              title="SkyCool Dubai Showroom Location Map"
              src={SITE_CONFIG.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Direct Quick Lead Form */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
            <h3 className="text-xl font-bold text-slate-900">
              Send Showroom Enquiry Form
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Fill in your required part details below and our team will get back to you immediately.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-emerald-800 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-lg">Inquiry Received!</h4>
                <p className="text-xs sm:text-sm text-emerald-700">
                  Thank you! Our sales representative will contact you via WhatsApp or Phone shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ahmed Al-Maktoum"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 XXX XXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Part Name / Model Number</label>
                  <input
                    type="text"
                    required
                    value={formData.partRequired}
                    onChange={(e) => setFormData({ ...formData, partRequired: e.target.value })}
                    placeholder="e.g. Rotary Compressor PH225 / Honeywell T6861"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Notes</label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide additional details or quantity needed..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-sky-500"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" fullWidth icon={Send}>
                  Submit Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
