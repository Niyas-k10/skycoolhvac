import {
  ShieldCheck,
  Boxes,
  BadgeDollarSign,
  MapPin,
  Headphones,
  Handshake
} from 'lucide-react';

const REASONS = [
  {
    id: 'quality-products',
    icon: ShieldCheck,
    title: 'QUALITY PRODUCTS',
    description:
      'We source reliable AC spare parts and HVAC components suitable for a wide range of cooling applications.'
  },
  {
    id: 'wide-range',
    icon: Boxes,
    title: 'WIDE PRODUCT RANGE',
    description:
      'From compressors and motors to controls, capacitors, copper components, and essential HVAC parts.'
  },
  {
    id: 'competitive-value',
    icon: BadgeDollarSign,
    title: 'COMPETITIVE VALUE',
    description:
      'Practical product options and competitive pricing designed to support contractors, technicians, and businesses.'
  },
  {
    id: 'uae-supply',
    icon: MapPin,
    title: 'UAE-FOCUSED SUPPLY',
    description:
      'Conveniently serving HVAC professionals and businesses across Dubai and the wider UAE.'
  },
  {
    id: 'responsive-support',
    icon: Headphones,
    title: 'RESPONSIVE SUPPORT',
    description:
      'Quick assistance with product enquiries, availability, specifications, and sourcing requirements.'
  },
  {
    id: 'trusted-partner',
    icon: Handshake,
    title: 'TRUSTED PARTNER',
    description:
      'We aim to build long-term business relationships through dependable products and consistent service.'
  }
];

export function WhyChooseUs() {
  return (
    <section
      className="
        bg-sky-50/70
        py-16
        sm:py-20
        lg:py-24
        border-b
        border-sky-100
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

          {/* WHY CHOOSE US */}
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
              WHY CHOOSE US?
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
            Reliable HVAC products, dependable service, and practical
            solutions for cooling professionals across the UAE.
          </p>

        </div>


        {/* =========================================
            6 REASONS GRID
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
          {REASONS.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="
                  bg-white
                  border
                  border-slate-200/90
                  rounded-2xl
                  p-6
                  sm:p-8
                  text-center
                  shadow-[0_4px_20px_rgba(15,23,42,0.04)]
                  hover:shadow-xl
                  hover:border-[#2563EB]/40
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  group
                  flex
                  flex-col
                  items-center
                  justify-start
                  space-y-4
                "
              >

                {/* ICON */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-blue-50
                    border
                    border-blue-100
                    flex
                    items-center
                    justify-center
                    text-[#2563EB]
                    group-hover:bg-[#2563EB]
                    group-hover:text-white
                    transition-colors
                    duration-300
                    shrink-0
                  "
                >
                  <IconComponent className="w-6 h-6" />
                </div>


                {/* TITLE */}
                <h3
                  className="
                    font-extrabold
                    text-slate-900
                    text-base
                    sm:text-lg
                    tracking-tight
                    group-hover:text-[#2563EB]
                    transition-colors
                  "
                >
                  {item.title}
                </h3>


                {/* DESCRIPTION */}
                <p
                  className="
                    text-slate-600
                    text-xs
                    sm:text-sm
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}