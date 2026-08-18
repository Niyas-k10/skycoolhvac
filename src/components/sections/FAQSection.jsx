import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ_ITEMS = [
  {
    id: 'faq-1',
    question: 'What types of HVAC and AC spare parts do you supply?',
    answer:
      'We supply a wide range of HVAC and AC components, including compressors, motors, capacitors, thermostats, actuators, copper components, controls, refrigeration parts, and other essential spare parts.'
  },
  {
    id: 'faq-2',
    question:
      'Do you supply products for commercial and industrial applications?',
    answer:
      'Yes. Our product range is suitable for residential, commercial, and industrial cooling applications, depending on the specific component and system requirements.'
  },
  {
    id: 'faq-3',
    question: 'How can I check product availability and pricing?',
    answer:
      'You can contact our team through WhatsApp or the available contact channels. Share the product name, model, specification, or required quantity and our team can assist with availability and pricing.'
  },
  {
    id: 'faq-4',
    question: 'Can you help identify the correct replacement part?',
    answer:
      'Yes. If you provide the existing part number, model number, specifications, or clear product photos, our team can help you identify a suitable component.'
  },
  {
    id: 'faq-5',
    question: 'Can I get a quotation for multiple HVAC spare parts?',
    answer:
      'Yes. You can share your list of required HVAC spare parts with us, and our team can review your requirements and provide the available options and pricing.'
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      className="
        bg-sky-50
        py-16
        sm:py-20
        lg:py-24
        border-b
        border-sky-100
        overflow-x-hidden
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
          sm:space-y-14
          lg:space-y-16
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >
          {/* FREQUENTLY ASKED QUESTIONS */}
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

            {/* HEADING */}
            <span
              className="
                text-xs
                sm:text-lg
                md:text-xl
                lg:text-2xl
                font-black
                uppercase
                tracking-[0.12em]
                sm:tracking-[0.2em]
                text-slate-900
                whitespace-nowrap
                leading-none
                shrink
                min-w-0
              "
            >
              FREQUENTLY ASKED QUESTIONS
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
            Everything you need to know about our HVAC products and enquiry
            process.
          </p>
        </div>

        {/* =========================================
            FAQ ACCORDION
        ========================================= */}
        <div
          className="
            max-w-4xl
            mx-auto
            space-y-4
          "
        >
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${item.id}`;

            return (
              <div
                key={item.id}
                className={`
                  bg-white
                  rounded-xl
                  border
                  overflow-hidden
                  transition-all
                  duration-200
                  shadow-[0_2px_10px_rgba(15,23,42,0.03)]
                  ${
                    isOpen
                      ? 'border-[#2563EB]/40 ring-1 ring-[#2563EB]/20 shadow-md'
                      : 'border-slate-200/90 hover:border-slate-300'
                  }
                `}
              >
                {/* QUESTION BUTTON */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  className="
                    w-full
                    px-5
                    sm:px-6
                    py-5
                    sm:py-5
                    flex
                    items-center
                    justify-between
                    gap-4
                    text-left
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#2563EB]
                    cursor-pointer
                  "
                >
                  <span
                    className={`
                      font-bold
                      text-base
                      sm:text-lg
                      leading-snug
                      transition-colors
                      ${
                        isOpen
                          ? 'text-[#2563EB]'
                          : 'text-slate-900'
                      }
                    `}
                  >
                    {item.question}
                  </span>

                  <span
                    className="
                      shrink-0
                      text-slate-400
                    "
                  >
                    {isOpen ? (
                      <ChevronUp
                        className="
                          w-5
                          h-5
                          text-[#2563EB]
                        "
                      />
                    ) : (
                      <ChevronDown
                        className="
                          w-5
                          h-5
                          text-slate-400
                        "
                      />
                    )}
                  </span>
                </button>

                {/* ANSWER */}
                {isOpen && (
                  <div
                    id={contentId}
                    className="
                      px-5
                      sm:px-6
                      pb-6
                      pt-4
                      border-t
                      border-slate-100
                      text-slate-600
                      text-sm
                      sm:text-base
                      leading-relaxed
                    "
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}