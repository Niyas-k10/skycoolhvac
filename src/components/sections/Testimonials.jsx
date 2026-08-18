import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 'test-1',
    name: 'Ahmed Al-Farsi',
    role: 'Project Manager',
    quote:
      'Reliable products and responsive service. Finding the right HVAC components for our site requirements in Dubai has been fast and seamless.'
  },
  {
    id: 'test-2',
    name: 'Layla Hassan',
    role: 'Interior Designer',
    quote:
      'Excellent communication and product quality. Their team helped us select quiet, energy-efficient cooling accessories for our commercial projects.'
  },
  {
    id: 'test-3',
    name: 'Khalid Mansoor',
    role: 'Civil Engineer',
    quote:
      'Sky Cool consistently provides dependable AC spare parts. Quick WhatsApp responses and accurate technical guidance every time.'
  },
  {
    id: 'test-4',
    name: 'Fatima Abdulrahman',
    role: 'Architect',
    quote:
      'Great selection of quality climate components and controls. Their reliable UAE supply makes project scheduling much simpler.'
  },
  {
    id: 'test-5',
    name: 'Omar Al-Jabri',
    role: 'Procurement Manager',
    quote:
      'Competitive pricing and genuine HVAC spare parts. Their prompt delivery across Dubai saves our maintenance teams valuable time.'
  },
  {
    id: 'test-6',
    name: 'Hanan Youssef',
    role: 'Business Owner',
    quote:
      'Trustworthy partner for all our air conditioning replacement parts. Friendly service and dependable product durability.'
  }
];

export function Testimonials() {
  return (
    <section
      className="
        bg-white
        py-16
        sm:py-20
        lg:py-24
        border-b
        border-slate-100
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
        ========================================= */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >

          {/* CLIENT FEEDBACK */}
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

            {/* CLIENT FEEDBACK TEXT */}
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
              CLIENT FEEDBACK
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

          {/* SUPPORTING PARAGRAPH */}
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
            Trusted by HVAC professionals, contractors, and businesses across
            the UAE.
          </p>

        </div>


        {/* =========================================
            TESTIMONIAL CARDS
        ========================================= */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            sm:gap-8
          "
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="
                bg-[#F7EBD8]
                border
                border-[#E9DCC8]
                rounded-2xl
                p-6
                sm:p-8
                flex
                flex-col
                justify-between
                shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                hover:shadow-lg
                hover:-translate-y-1
                transition-all
                duration-300
                space-y-6
              "
            >

              {/* =========================================
                  RATING + QUOTE
              ========================================= */}
              <div className="space-y-4">

                {/* 5-STAR RATING */}
                <div
                  className="
                    flex
                    items-center
                    gap-1
                    text-amber-400
                  "
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="
                        w-4
                        h-4
                        fill-amber-400
                        text-amber-400
                      "
                    />
                  ))}
                </div>

                {/* QUOTE TEXT */}
                <p
                  className="
                    text-slate-700
                    text-xs
                    sm:text-sm
                    leading-relaxed
                    italic
                  "
                >
                  "{item.quote}"
                </p>

              </div>


              {/* =========================================
                  AUTHOR INFORMATION
              ========================================= */}
              <div
                className="
                  pt-4
                  border-t
                  border-[#E5D5BF]
                "
              >
                <h4
                  className="
                    font-extrabold
                    text-slate-900
                    text-sm
                  "
                >
                  {item.name}
                </h4>

                <p
                  className="
                    text-xs
                    text-slate-500
                    font-medium
                    mt-0.5
                  "
                >
                  {item.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}