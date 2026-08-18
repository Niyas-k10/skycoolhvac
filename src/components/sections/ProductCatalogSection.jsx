import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories.js';

export function ProductCatalogSection() {
  const scrollContainerRef = useRef(null);

  // Manual horizontal scroll controls for category bar
  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="products"
      className="
        py-16
        sm:py-20
        lg:py-24

        bg-sky-50
        border-b
        border-[#C7EEF2]

        overflow-x-hidden
        scroll-mt-28
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
          sm:space-y-16
        "
      >
        {/* =========================================
            1. PRODUCT CATALOGUE HEADER
        ========================================= */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto

            space-y-5
          "
        >
          {/* =========================================
              PRODUCT CATALOGUE
              EXACT SAME STYLE AS FAQ HEADING
          ========================================= */}
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
            {/* =====================================
                LEFT BLUE LINE
            ===================================== */}
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

            {/* =====================================
                PRODUCT CATALOGUE HEADING
            ===================================== */}
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

                antialiased
              "
            >
              PRODUCT CATALOGUE
            </span>

            {/* =====================================
                RIGHT BLUE LINE
            ===================================== */}
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
              MAIN HEADING
          ========================================= */}
          {/* <h2
            className="
              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-extrabold

              text-[#0F172A]

              tracking-tight

              pt-1
            "
          >
            Browse HVAC & AC Spare Parts
          </h2> */}

          {/* =========================================
              SUBTITLE
          ========================================= */}
          <p
            className="
              text-slate-500

              text-sm
              sm:text-base

              leading-relaxed

              max-w-xl
              mx-auto

              pt-1
            "
          >
            Select a product category below to explore reference components,
            technical specifications, and instant WhatsApp stock enquiries.
          </p>
        </div>

        {/* =========================================
            2. CATEGORIES MANUAL NAVIGATION
        ========================================= */}
        <div
          className="
            relative

            pt-4
            pb-6
          "
        >
          {/* =========================================
              LEFT NAVIGATION ARROW
          ========================================= */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            aria-label="Previous categories"
            className="
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20

              w-11
              h-11

              sm:w-12
              sm:h-12

              rounded-full

              bg-white/95

              border
              border-slate-200

              shadow-lg

              flex
              items-center
              justify-center

              text-slate-700

              hover:text-[#2563EB]
              hover:border-[#2563EB]
              hover:scale-105

              transition-all

              focus:outline-none

              focus-visible:ring-2
              focus-visible:ring-[#2563EB]

              -ml-3
              sm:-ml-5

              cursor-pointer
            "
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* =========================================
              SCROLLABLE CATEGORY TRACK
          ========================================= */}
          <div
            ref={scrollContainerRef}
            className="
              flex
              items-start

              gap-5
              sm:gap-8
              lg:gap-10

              overflow-x-auto

              scrollbar-none
              scroll-smooth

              px-8
              sm:px-10

              py-4
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/products/${cat.slug}`}
                className="
                  flex
                  flex-col
                  items-center

                  group
                  shrink-0

                  focus:outline-none
                  cursor-pointer

                  text-center
                "
              >
                {/* =====================================
                    CATEGORY IMAGE CONTAINER
                    ALWAYS WHITE
                ===================================== */}
                <div
                  className="
                    w-24
                    h-24

                    sm:w-32
                    sm:h-32

                    lg:w-36
                    lg:h-36

                    rounded-3xl

                    p-3
                    sm:p-4

                    bg-white

                    border
                    border-slate-200/90

                    shadow-2xs

                    group-hover:border-[#2563EB]
                    group-hover:bg-white
                    group-hover:shadow-xl
                    group-hover:scale-105

                    transition-all
                    duration-300

                    flex
                    items-center
                    justify-center

                    overflow-hidden
                  "
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="
                      max-w-full
                      max-h-full

                      object-contain

                      transform

                      transition-transform
                      duration-300

                      group-hover:scale-105
                    "
                    loading="lazy"
                  />
                </div>

                {/* =====================================
                    CATEGORY NAME
                ===================================== */}
                <span
                  className="
                    text-sm
                    sm:text-base

                    font-bold

                    mt-4

                    text-slate-800

                    group-hover:text-[#2563EB]

                    transition-colors
                  "
                >
                  {cat.name}
                </span>

                {/* =====================================
                    SUBTITLE / ITEM COUNT
                ===================================== */}
                <span
                  className="
                    text-[11px]

                    font-semibold

                    text-slate-400

                    mt-0.5

                    group-hover:text-[#2563EB]/80

                    transition-colors
                  "
                >
                  {/* 6 Reference Items */}
                </span>
              </Link>
            ))}
          </div>

          {/* =========================================
              RIGHT NAVIGATION ARROW
          ========================================= */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            aria-label="Next categories"
            className="
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20

              w-11
              h-11

              sm:w-12
              sm:h-12

              rounded-full

              bg-white/95

              border
              border-slate-200

              shadow-lg

              flex
              items-center
              justify-center

              text-slate-700

              hover:text-[#2563EB]
              hover:border-[#2563EB]
              hover:scale-105

              transition-all

              focus:outline-none

              focus-visible:ring-2
              focus-visible:ring-[#2563EB]

              -mr-3
              sm:-mr-5

              cursor-pointer
            "
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}