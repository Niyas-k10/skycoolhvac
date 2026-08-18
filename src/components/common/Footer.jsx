import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const SOCIAL_LINKS = {
  instagram: '#',
  facebook: '#',
  whatsapp: 'https://wa.me/971509364656'
};

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.726 0-3.418-.46-4.904-1.332l-.352-.208-3.647.956.973-3.557-.228-.363c-.96-1.527-1.467-3.295-1.467-5.111 0-5.263 4.281-9.544 9.548-9.544 2.551 0 4.95.995 6.753 2.8 1.804 1.803 2.798 4.204 2.798 6.752 0 5.265-4.282 9.547-9.475 9.547m0-21.05c-6.342 0-11.503 5.161-11.503 11.503 0 2.028.53 4.009 1.538 5.753l-1.636 5.976 6.114-1.603c1.681.916 3.582 1.399 5.487 1.399 6.344 0 11.506-5.162 11.506-11.505 0-3.074-1.197-5.965-3.37-8.138-2.174-2.173-5.064-3.37-8.136-3.37" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9v-2.89h2.54V9.79c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 lg:py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* COLUMN 1: Company Overview */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                SKY COOL <span className="text-[#38BDF8]">HVAC</span>
              </span>
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                TRADING LLC
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Reliable HVAC spare parts and cooling components for residential, commercial, and industrial applications across the UAE.
            </p>
          </div>

          {/* COLUMN 2: Contact Us (All 3 Icons WHITE) */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a href="tel:+971509364656" className="text-slate-300 hover:text-white transition-colors">
                  +971509364656
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a href="mailto:skycoolhvacdxb@gmail.com" className="text-slate-300 hover:text-white transition-colors break-all">
                  skycoolhvacdxb@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/LNniZmTvBwUSaf4U6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  JEBEL ALI INDUSTRIAL AREA-1 DUBAI - U.A.E
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="/#products" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  Products Showcase
                </a>
              </li>
              <li>
                <Link to="/brands" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  Our Brands
                </Link>
              </li>
              <li>
                <a href="/#contact" className="text-slate-400 hover:text-[#38BDF8] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Follow Us (Social Links) */}
          <div className="space-y-4">
            <h4 className="font-extrabold text-white text-sm uppercase tracking-wider">
              Follow Us
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Connect with Sky Cool HVAC Trading LLC online for trade updates and new stock announcements.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {/* Instagram with Instagram-inspired Gradient Hover */}
              <a
                href={SOCIAL_LINKS.instagram}
                onClick={(e) => SOCIAL_LINKS.instagram === '#' && e.preventDefault()}
                aria-label="Follow Sky Cool HVAC on Instagram"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 hover:border-transparent transition-all duration-300 cursor-pointer"
              >
                <InstagramIcon className="w-5 h-5 text-white" />
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                onClick={(e) => SOCIAL_LINKS.facebook === '#' && e.preventDefault()}
                aria-label="Follow Sky Cool HVAC on Facebook"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-[#2563EB] hover:border-[#2563EB] transition-all duration-200 cursor-pointer"
              >
                <FacebookIcon className="w-5 h-5 text-white" />
              </a>

              {/* Real WhatsApp Brand Icon */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Sky Cool HVAC on WhatsApp"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-200 cursor-pointer"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Sky Cool HVAC Trading LLC. All rights reserved.</p>
          <p className="text-center sm:text-right">
            AC Spare Parts & HVAC Components Supplier • Dubai, UAE
          </p>
        </div>

      </div>
    </footer>
  );
}
