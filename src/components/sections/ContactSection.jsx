import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function WhatsAppIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.461c-1.726 0-3.418-.46-4.904-1.332l-.352-.208-3.647.956.973-3.557-.228-.363c-.96-1.527-1.467-3.295-1.467-5.111 0-5.263 4.281-9.544 9.548-9.544 2.551 0 4.95.995 6.753 2.8 1.804 1.803 2.798 4.204 2.798 6.752 0 5.265-4.282 9.547-9.475 9.547m0-21.05c-6.342 0-11.503 5.161-11.503 11.503 0 2.028.53 4.009 1.538 5.753l-1.636 5.976 6.114-1.603c1.681.916 3.582 1.399 5.487 1.399 6.344 0 11.506-5.162 11.506-11.505 0-3.074-1.197-5.965-3.37-8.138-2.174-2.173-5.064-3.37-8.136-3.37" />
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    product: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    }

    if (!formData.product.trim()) {
      newErrors.product = 'Product or HVAC Requirement is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    if (
      formData.email.trim() &&
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formattedMessage = `Hello Sky Cool HVAC Trading LLC,

I would like to make an enquiry.

Name: ${formData.fullName.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim() || 'N/A'}
Product / Requirement: ${formData.product.trim()}
Message: ${formData.message.trim()}

Thank you.`;

    const encodedMessage = encodeURIComponent(formattedMessage);

    const whatsappUrl =
      `https://wa.me/971509364656?text=${encodedMessage}`;

    window.open(
      whatsappUrl,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="contact"
      className="
        bg-white
        py-16
        sm:py-20
        lg:py-24
        border-b
        border-slate-100
        scroll-mt-24
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          space-y-12
        "
      >

        {/* =========================================
            SECTION HEADER
            SAME STYLE AS FAQ HEADING
        ========================================= */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >

          {/* CONTACT US HEADING WITH BLUE LINES */}
          <div
            className="
              flex
              items-center
              justify-center
              gap-3
              sm:gap-4
              mb-6
              sm:mb-7
            "
          >

            {/* LEFT BLUE LINE */}
            <span
              className="
                block
                w-8
                sm:w-10
                md:w-12
                h-[2px]
                sm:h-[3px]
                rounded-full
                bg-sky-400
                shrink-0
              "
            />

            {/* CONTACT US */}
            <span
              className="
                text-base
                sm:text-lg
                md:text-xl
                lg:text-2xl
                font-black
                uppercase
                tracking-[0.18em]
                sm:tracking-[0.2em]
                text-slate-900
                whitespace-nowrap
                leading-none
              "
            >
              CONTACT US
            </span>

            {/* RIGHT BLUE LINE */}
            <span
              className="
                block
                w-8
                sm:w-10
                md:w-12
                h-[2px]
                sm:h-[3px]
                rounded-full
                bg-sky-400
                shrink-0
              "
            />

          </div>

          {/* =========================================
              SUPPORTING PARAGRAPH
          ========================================= */}
          <p
            className="
              text-slate-600
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
              max-w-xl
              sm:max-w-2xl
              mx-auto
            "
          >
            Have an HVAC requirement? Send us your enquiry and our team
            will get back to you.
          </p>

        </div>


        {/* =========================================
            2-COLUMN RESPONSIVE LAYOUT
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-8
            lg:gap-12
            items-start
          "
        >

          {/* =========================================
              COLUMN 1: CONTACT INFORMATION
          ========================================= */}
          <div
            className="
              lg:col-span-5
              bg-slate-900
              text-white
              rounded-3xl
              p-8
              sm:p-10
              space-y-8
              shadow-xl
              border
              border-slate-800
            "
          >

            <div className="space-y-2">

              <span
                className="
                  text-xs
                  font-bold
                  text-[#38BDF8]
                  uppercase
                  tracking-wider
                "
              >
                GET IN TOUCH
              </span>

              <h3
                className="
                  text-2xl
                  sm:text-3xl
                  font-extrabold
                  text-white
                "
              >
                Contact Information
              </h3>

              <p
                className="
                  text-slate-300
                  text-sm
                  leading-relaxed
                "
              >
                Connect directly with our Dubai sales team for quick
                stock verification and trade quotes.
              </p>

            </div>


            <div
              className="
                space-y-6
                pt-2
              "
            >

              {/* =====================================
                  WHATSAPP
              ===================================== */}
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                  "
                >
                  <WhatsAppIcon
                    className="
                      w-6
                      h-6
                      text-white
                    "
                  />
                </div>

                <div>

                  <span
                    className="
                      block
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    WhatsApp / Mobile
                  </span>

                  <a
                    href="https://wa.me/971509364656"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-base
                      sm:text-lg
                      font-bold
                      text-white
                      hover:text-emerald-400
                      transition-colors
                    "
                  >
                    +971509364656
                  </a>

                </div>

              </div>


              {/* =====================================
                  PHONE
              ===================================== */}
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                  "
                >
                  <Phone
                    className="
                      w-6
                      h-6
                      text-white
                    "
                  />
                </div>

                <div>

                  <span
                    className="
                      block
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    Phone Call
                  </span>

                  <a
                    href="tel:+971509364656"
                    className="
                      text-base
                      sm:text-lg
                      font-bold
                      text-white
                      hover:text-[#38BDF8]
                      transition-colors
                    "
                  >
                    +971509364656
                  </a>

                </div>

              </div>


              {/* =====================================
                  EMAIL
              ===================================== */}
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                  "
                >
                  <Mail
                    className="
                      w-6
                      h-6
                      text-white
                    "
                  />
                </div>

                <div>

                  <span
                    className="
                      block
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    Email Address
                  </span>

                  <a
                    href="mailto:skycoolhvacdxb@gmail.com"
                    className="
                      text-sm
                      sm:text-base
                      font-bold
                      text-white
                      hover:text-blue-400
                      transition-colors
                      break-all
                    "
                  >
                    skycoolhvacdxb@gmail.com
                  </a>

                </div>

              </div>


              {/* =====================================
                  LOCATION
              ===================================== */}
              <div className="flex items-start gap-4">

                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/10
                    border
                    border-white/20
                    flex
                    items-center
                    justify-center
                    text-white
                    shrink-0
                  "
                >
                  <MapPin
                    className="
                      w-6
                      h-6
                      text-white
                    "
                  />
                </div>

                <div>

                  <span
                    className="
                      block
                      text-xs
                      font-semibold
                      text-slate-400
                    "
                  >
                    Location
                  </span>

                  <a
                    href="https://maps.app.goo.gl/LNniZmTvBwUSaf4U6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      text-base
                      font-bold
                      text-white
                      hover:text-[#38BDF8]
                      transition-colors
                      inline-block
                    "
                  >
                    JEBEL ALI INDUSTRIAL AREA-1 DUBAI - U.A.E
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              COLUMN 2: WHATSAPP ENQUIRY FORM
          ========================================= */}
          <div
            className="
              lg:col-span-7
              bg-white
              rounded-3xl
              p-8
              sm:p-10
              border
              border-slate-200/90
              shadow-2xs
              space-y-6
            "
          >

            <div className="space-y-1">

              <h3
                className="
                  text-xl
                  sm:text-2xl
                  font-extrabold
                  text-[#0F172A]
                "
              >
                Send WhatsApp Enquiry
              </h3>

              <p
                className="
                  text-slate-500
                  text-xs
                  sm:text-sm
                "
              >
                Fill in your details below to generate a pre-formatted
                message directly to our WhatsApp support.
              </p>

            </div>


            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-4"
            >

              {/* =====================================
                  FULL NAME & PHONE NUMBER
              ===================================== */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-4
                "
              >

                <div>

                  <label
                    htmlFor="fullName"
                    className="
                      block
                      text-xs
                      font-bold
                      text-slate-700
                      mb-1.5
                    "
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                    }`}
                  />

                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.fullName}
                    </p>
                  )}

                </div>


                <div>

                  <label
                    htmlFor="phone"
                    className="
                      block
                      text-xs
                      font-bold
                      text-slate-700
                      mb-1.5
                    "
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.phone
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                    }`}
                  />

                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.phone}
                    </p>
                  )}

                </div>

              </div>


              {/* =====================================
                  EMAIL & PRODUCT REQUIREMENT
              ===================================== */}
              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-4
                "
              >

                <div>

                  <label
                    htmlFor="email"
                    className="
                      block
                      text-xs
                      font-bold
                      text-slate-700
                      mb-1.5
                    "
                  >
                    Email Address{' '}
                    <span className="text-slate-400 font-normal">
                      (Optional)
                    </span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.email
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                    }`}
                  />

                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </p>
                  )}

                </div>


                {/* PRODUCT / REQUIREMENT DROPDOWN */}
                <div>

                  <label
                    htmlFor="product"
                    className="
                      block
                      text-xs
                      font-bold
                      text-slate-700
                      mb-1.5
                    "
                  >
                    Product / Requirement{' '}
                    <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="product"
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all ${
                      errors.product
                        ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                        : 'border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                    }`}
                  >

                    <option
                      value=""
                      disabled
                    >
                      Select an option
                    </option>

                    <option value="Product Enquiry">
                      Product Enquiry
                    </option>

                    <option value="Support">
                      Support
                    </option>

                    <option value="Feedback">
                      Feedback
                    </option>

                  </select>

                  {errors.product && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.product}
                    </p>
                  )}

                </div>

              </div>


              {/* =====================================
                  MESSAGE
              ===================================== */}
              <div>

                <label
                  htmlFor="message"
                  className="
                    block
                    text-xs
                    font-bold
                    text-slate-700
                    mb-1.5
                  "
                >
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your requirement..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 focus:bg-white focus:outline-none transition-all resize-none ${
                    errors.message
                      ? 'border-red-500 focus:ring-2 focus:ring-red-500/20'
                      : 'border-slate-200 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20'
                  }`}
                />

                {errors.message && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.message}
                  </p>
                )}

              </div>


              {/* =====================================
                  SUBMIT BUTTON
              ===================================== */}
              <div className="pt-2">

                <button
                  type="submit"
                  className="
                    w-full
                    py-4
                    px-6
                    bg-[#2563EB]
                    hover:bg-blue-700
                    text-white
                    rounded-xl
                    font-bold
                    text-base
                    flex
                    items-center
                    justify-center
                    gap-2
                    shadow-lg
                    shadow-blue-600/25
                    transition-all
                    duration-200
                    hover:scale-[1.01]
                    active:scale-[0.99]
                    cursor-pointer
                  "
                >

                  <WhatsAppIcon
                    className="
                      w-5
                      h-5
                      text-white
                    "
                  />

                  <span>
                    Send Enquiry on WhatsApp
                  </span>

                </button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}