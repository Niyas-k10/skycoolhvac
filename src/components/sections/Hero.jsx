import { useState, useEffect } from 'react';

const SLIDES = [
  {
    id: 1,
    image: '/hero/hero1.png',
    alt: 'AC spare parts supplier in Dubai',
    label: 'PREMIUM HVAC SOLUTIONS',
    headingWhite: 'AC SPARE PARTS',
    headingBlue: 'YOU CAN TRUST',
    paragraph:
      'Reliable AC and HVAC spare parts for residential, commercial, and industrial cooling systems across Dubai and the UAE.'
  },
  {
    id: 2,
    image: '/hero/hero2.png',
    alt: 'HVAC equipment and spare parts in Dubai',
    label: 'GENUINE AC COMPONENTS',
    headingWhite: 'QUALITY PARTS',
    headingBlue: 'FOR BETTER COOLING',
    paragraph:
      'We supply dependable compressors, motors, controls, and essential HVAC components for professional cooling applications.'
  },
  {
    id: 3,
    image: '/hero/hero3.png',
    alt: 'AC components and spare parts',
    label: 'DUBAI HVAC TRADING',
    headingWhite: 'YOUR AC PARTS',
    headingBlue: 'TRADING PARTNER',
    paragraph:
      'A trusted source for quality HVAC components, replacement parts, and cooling solutions for businesses across Dubai and the UAE.'
  }
];

const SLIDE_DURATION = 6000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  /* =========================================
      REDUCED MOTION DETECTION
  ========================================= */
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (event) => {
      setIsReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  /* =========================================
      AUTOMATIC CAROUSEL
  ========================================= */
  useEffect(() => {
    if (isReducedMotion) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SLIDES.length);
      setProgressKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [activeIndex, isReducedMotion]);

  /* =========================================
      MANUAL DOT NAVIGATION
  ========================================= */
  const handleDotClick = (index) => {
    setActiveIndex(index);
    setProgressKey((prev) => prev + 1);
  };

  const currentSlide = SLIDES[activeIndex];

  return (
    <section
      className="
        relative
        w-full
        max-w-full
        overflow-hidden
        bg-slate-950
        text-white

        /* ================================
           MOBILE
        ================================= */
        min-h-[520px]
        h-[calc(100svh-72px)]

        /* ================================
           SMALL TABLETS
        ================================= */
        sm:min-h-[540px]
        sm:h-[calc(100svh-76px)]

        /* ================================
           TABLETS / iPAD
        ================================= */
        md:min-h-[560px]
        md:h-[620px]

        /* ================================
           iPAD PRO / SMALL LAPTOP
        ================================= */
        lg:min-h-[580px]
        lg:h-[650px]

        /* ================================
           LARGE DESKTOP
        ================================= */
        xl:h-[calc(100svh-80px)]
        xl:min-h-[600px]

        /* ================================
           VERY LARGE SCREENS
        ================================= */
        2xl:min-h-[650px]
      "
    >
      {/* =========================================
          FULL HERO IMAGE CAROUSEL
      ========================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={`
                absolute
                inset-0
                w-full
                h-full
                overflow-hidden
                transition-opacity
                duration-1000
                ease-in-out
                ${
                  isActive
                    ? 'opacity-100 z-10'
                    : 'opacity-0 z-0 pointer-events-none'
                }
              `}
            >
              {/* =========================================
                  HERO IMAGE
              ========================================= */}
              <img
                src={slide.image}
                alt={slide.alt}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  object-center
                  select-none
                "
              />

              {/* =========================================
                  LEFT DARK OVERLAY
              ========================================= */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-slate-950/90
                  via-slate-950/55
                  to-transparent

                  sm:from-slate-950/85
                  sm:via-slate-950/50
                "
              />

              {/* =========================================
                  SUBTLE BOTTOM BLEND
              ========================================= */}
              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  h-24
                  sm:h-28
                  md:h-32
                  bg-gradient-to-t
                  from-slate-950/40
                  to-transparent
                "
              />
            </div>
          );
        })}
      </div>

      {/* =========================================
          HERO CONTENT
      ========================================= */}
      <div
        className="
          relative
          z-20
          w-full
          h-full
          max-w-7xl
          mx-auto

          flex
          items-center

          px-5
          sm:px-8
          md:px-10
          lg:px-14
          xl:px-16
          2xl:px-20

          py-16
          sm:py-16
          md:py-20
          lg:py-20
          xl:py-16
        "
      >
        <div
          className="
            w-full
            max-w-[340px]
            sm:max-w-[500px]
            md:max-w-[600px]
            lg:max-w-[680px]
            xl:max-w-2xl

            space-y-3
            sm:space-y-4
            md:space-y-5
            lg:space-y-5

            text-left
          "
        >
          {/* =========================================
              SMALL LABEL
          ========================================= */}
          <span
            className="
              inline-block

              text-[9px]
              sm:text-xs
              md:text-sm
              lg:text-sm

              font-bold

              tracking-[0.12em]
              sm:tracking-[0.14em]
              md:tracking-[0.16em]

              uppercase

              text-sky-400
            "
          >
            {currentSlide.label}
          </span>

          {/* =========================================
              MAIN HEADING
          ========================================= */}
          <h1
            className="
              m-0
              p-0

              text-[1.8rem]
              leading-[1.02]

              sm:text-4xl
              sm:leading-[1.02]

              md:text-5xl
              md:leading-[1.02]

              lg:text-6xl
              lg:leading-[1.02]

              xl:text-7xl
              xl:leading-[1.02]

              font-extrabold
              tracking-tight

              break-words
            "
          >
            <span className="text-white">
              {currentSlide.headingWhite}
            </span>

            <br />

            <span className="text-sky-500">
              {currentSlide.headingBlue}
            </span>
          </h1>

          {/* =========================================
              SUPPORTING PARAGRAPH
          ========================================= */}
          <p
            className="
              m-0
              p-0
              pt-1

              max-w-[320px]
              sm:max-w-md
              md:max-w-lg
              lg:max-w-xl

              text-xs
              sm:text-sm
              md:text-base
              lg:text-lg

              text-slate-200

              font-normal
              italic

              leading-[1.55]
              sm:leading-relaxed

              break-words
            "
          >
            {currentSlide.paragraph}
          </p>
        </div>
      </div>

      {/* =========================================
          CAROUSEL DOTS
      ========================================= */}
      <div
        className="
          absolute

          bottom-5
          sm:bottom-6
          md:bottom-7
          lg:bottom-8

          left-1/2
          -translate-x-1/2

          z-30

          flex
          items-center
          justify-center

          gap-2
          sm:gap-2.5
          md:gap-3

          max-w-full
        "
      >
        {SLIDES.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => handleDotClick(index)}
              aria-label={`Show slide ${index + 1}`}
              aria-current={isActive ? 'true' : 'false'}
              className="
                relative

                h-2
                sm:h-2.5

                rounded-full
                overflow-hidden

                transition-all
                duration-300

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-sky-400

                cursor-pointer

                shrink-0
              "
              style={{
                width: isActive ? '36px' : '12px'
              }}
            >
              {/* =====================================
                  INACTIVE TRACK
              ===================================== */}
              <span
                className="
                  absolute
                  inset-0

                  rounded-full

                  bg-slate-400/60
                "
              />

              {/* =====================================
                  ACTIVE PROGRESS
              ===================================== */}
              {isActive && (
                <span
                  key={progressKey}
                  className="
                    absolute
                    top-0
                    left-0
                    bottom-0

                    rounded-full

                    bg-sky-500
                  "
                  style={{
                    animation: isReducedMotion
                      ? 'none'
                      : `heroProgressFill ${SLIDE_DURATION}ms linear forwards`
                  }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* =========================================
          PROGRESS ANIMATION
      ========================================= */}
      <style>{`
        @keyframes heroProgressFill {
          0% {
            width: 0%;
          }

          100% {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}