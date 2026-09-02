import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AVAILABLE_BRANDS = [
  'b1',
  'b2',
  'b3',
  'b4',
  'b6',
  'b7',
  'b8',
  'b9',
  'b10',
  'b11',
  'b12',
  'b13',
  'b14',
  'b15',
  'b17',
  'b18',
  'b20',
  'b21',
  'b23',
  'b24',
  'b25',
  'b26',
  'b27'
];

const BRAND_ITEMS = AVAILABLE_BRANDS.map((num, i) => ({
  id: `brand-${num}`,
  originalIndex: i,
  image: `/brands/${num}.${['b25', 'b26', 'b27'].includes(num) ? 'png' : 'webp'}`
}));

// Triple the list to create a seamless infinite track
const TRIPLE_BRANDS = [
  ...BRAND_ITEMS.map((item, idx) => ({
    ...item,
    uniqueKey: `track1-${idx}`,
    listIndex: idx
  })),

  ...BRAND_ITEMS.map((item, idx) => ({
    ...item,
    uniqueKey: `track2-${idx}`,
    listIndex: idx + BRAND_ITEMS.length
  })),

  ...BRAND_ITEMS.map((item, idx) => ({
    ...item,
    uniqueKey: `track3-${idx}`,
    listIndex: idx + BRAND_ITEMS.length * 2
  }))
];

export function BrandCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(
    BRAND_ITEMS.length
  );

  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);

  const navigate = useNavigate();

  // Step-and-hold interval:
  // 2 seconds hold + 0.5 seconds smooth movement
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;

        // Seamless wraparound when exceeding second set
        if (next >= BRAND_ITEMS.length * 2) {
          return BRAND_ITEMS.length;
        }

        return next;
      });
    }, 2500);

    return () => clearInterval(timer);
  }, []);

  // Smoothly scroll container to keep activeIndex card centered
  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeCard = cardRefs.current[activeIndex];

    if (container && activeCard) {
      const containerWidth = container.offsetWidth;
      const cardLeft = activeCard.offsetLeft;
      const cardWidth = activeCard.offsetWidth;

      const targetScrollLeft =
        cardLeft -
        containerWidth / 2 +
        cardWidth / 2;

      container.scrollTo({
        left: targetScrollLeft,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  const handleCarouselClick = () => {
    navigate('/brands');
  };

  return (
    <section
      className="
        bg-white
        py-16
        sm:py-20
        border-b
        border-slate-100
        overflow-hidden
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          space-y-8
          sm:space-y-10
        "
      >

        {/* =========================================
            SECTION HEADER
            SAME STYLE AS FAQ
        ========================================= */}
        <div
          className="
            text-center
            max-w-3xl
            mx-auto
          "
        >

          {/* =========================================
              OUR TRUSTED BRANDS
              EXACT FAQ HEADING STYLE
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
                OUR TRUSTED BRANDS HEADING
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
              OUR TRUSTED BRANDS
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
              DESCRIPTION
              UNCHANGED
          ========================================= */}
          <p
            className="
              text-slate-500

              text-sm
              sm:text-base

              leading-relaxed

              max-w-xl
              mx-auto
            "
          >
            Leading international manufacturers and trusted HVAC spare parts
            suppliers across Dubai and the UAE.
          </p>
        </div>

        {/* =========================================
            CLICKABLE SEAMLESS INFINITE BRAND CAROUSEL
        ========================================= */}
        <div
          onClick={handleCarouselClick}
          aria-label="View all brand partners"
          className="
            relative
            py-4
            cursor-pointer
            group
            select-none
          "
        >

          {/* =========================================
              LEFT EDGE FADE
          ========================================= */}
          <div
            className="
              absolute
              top-0
              bottom-0
              left-0

              w-16
              sm:w-28

              bg-gradient-to-r
              from-white
              to-transparent

              z-20

              pointer-events-none
            "
          />

          {/* =========================================
              RIGHT EDGE FADE
          ========================================= */}
          <div
            className="
              absolute
              top-0
              bottom-0
              right-0

              w-16
              sm:w-28

              bg-gradient-to-l
              from-white
              to-transparent

              z-20

              pointer-events-none
            "
          />

          {/* =========================================
              HORIZONTALLY SCROLLABLE BRAND TRACK
          ========================================= */}
          <div
            ref={scrollContainerRef}
            className="
              flex
              items-center

              gap-5
              sm:gap-6
              lg:gap-8

              overflow-x-auto

              scrollbar-none
              scroll-smooth

              px-12
              py-6
            "
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {TRIPLE_BRANDS.map((brand, index) => {
              const isCentered = index === activeIndex;

              return (
                <div
                  key={brand.uniqueKey}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`
                    shrink-0

                    w-[170px]
                    sm:w-[200px]
                    lg:w-[230px]

                    h-[105px]
                    sm:h-[118px]
                    lg:h-[128px]

                    rounded-2xl

                    bg-white

                    p-4

                    flex
                    items-center
                    justify-center

                    border

                    transition-all
                    duration-500

                    ${
                      isCentered
                        ? `
                          border-[#2563EB]
                          shadow-xl
                          scale-105
                          sm:scale-110
                          ring-2
                          ring-[#2563EB]/20
                          z-10
                        `
                        : `
                          border-slate-200/90
                          shadow-2xs
                          scale-100
                          opacity-60
                        `
                    }
                  `}
                >
                  <img
                    src={brand.image}
                    alt="HVAC brand partner logo"
                    className={`
                      max-w-full
                      max-h-full

                      object-contain

                      transition-all
                      duration-500

                      ${
                        isCentered
                          ? `
                            filter-none
                            grayscale-0
                            opacity-100
                          `
                          : `
                            filter
                            grayscale
                            opacity-70
                          `
                      }
                    `}
                    loading="lazy"
                  />
                </div>
              );
            })}
          </div>

          {/* =========================================
              CAROUSEL HINT
          ========================================= */}
          <div className="text-center pt-2">
            <span
              className="
                text-xs

                font-semibold

                text-slate-400

                group-hover:text-[#2563EB]

                transition-colors

                inline-flex
                items-center
                gap-1
              "
            >
              <span>
                Click here to view all brand partners
              </span>

              {/* <span>
                →
              </span> */}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}