export function OurProfile() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
      "
    >
      {/* =========================================
          PROFILE IMAGE + CONTENT CONTAINER
      ========================================= */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          min-h-[480px]
          sm:min-h-[500px]
          md:min-h-[520px]
          lg:min-h-0
          lg:aspect-[2.67/1]
          xl:aspect-[2.67/1]
        "
      >
        {/* =========================================
            BACKGROUND IMAGE
        ========================================= */}
        <img
          src="/profile/profile.webp"
          alt="Sky Cool HVAC Trading LLC Dubai skyline"
          loading="lazy"
          decoding="async"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
            object-center
            block
            select-none
            pointer-events-none
          "
        />

        {/* =========================================
            VERY LIGHT IMAGE OVERLAY
        ========================================= */}
        <div
          className="
            absolute
            inset-0

            z-[1]

            bg-gradient-to-b
            from-white/5
            via-transparent
            to-white/10

            pointer-events-none
          "
        />

        {/* =========================================
            CONTENT OVER IMAGE (CENTERED VERTICALLY & HORIZONTALLY)
        ========================================= */}
        <div
          className="
            absolute
            inset-0

            z-10

            flex
            items-center
            justify-center

            w-full
            h-full

            px-4
            sm:px-6
            md:px-10
            lg:px-14
            xl:px-20
            py-8
            sm:py-10
            md:py-12
          "
        >
          {/* =========================================
              CONTENT WRAPPER
          ========================================= */}
          <div
            className="
              w-full

              max-w-[300px]
              sm:max-w-[440px]
              md:max-w-[540px]
              lg:max-w-[640px]
              xl:max-w-[720px]

              mx-auto

              text-center

              flex
              flex-col
              items-center
            "
          >
            {/* =========================================
                OUR PROFILE HEADING
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

                flex-shrink-0
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
                  OUR PROFILE HEADING
              ===================================== */}
              <h2
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
                OUR PROFILE
              </h2>

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
                COMPANY DESCRIPTION
            ========================================= */}
            <div
              className="
                w-full

                max-w-[280px]
                sm:max-w-[420px]
                md:max-w-[500px]
                lg:max-w-[600px]
                xl:max-w-[660px]

                mx-auto

                space-y-4
                sm:space-y-5
                md:space-y-6
                lg:space-y-7
              "
            >
              {/* =====================================
                  FIRST PARAGRAPH
              ===================================== */}
              <p
                className="
                  m-0
                  p-0

                  text-[12px]
                  sm:text-sm
                  md:text-base
                  lg:text-lg
                  xl:text-lg

                  font-normal

                  leading-[1.55]
                  sm:leading-[1.6]
                  md:leading-[1.65]
                  lg:leading-[1.7]
                  xl:leading-[1.75]

                  tracking-normal

                  text-slate-900

                  text-center

                  antialiased

                  drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]
                "
              >
                Sky Cool HVAC Trading LLC is a Dubai-based HVAC supplier
                providing quality AC spare parts and cooling components for
                residential, commercial, and industrial applications.
              </p>

              {/* =====================================
                  SECOND PARAGRAPH
              ===================================== */}
              <p
                className="
                  m-0
                  p-0

                  text-[12px]
                  sm:text-sm
                  md:text-base
                  lg:text-lg
                  xl:text-lg

                  font-normal

                  leading-[1.55]
                  sm:leading-[1.6]
                  md:leading-[1.65]
                  lg:leading-[1.7]
                  xl:leading-[1.75]

                  tracking-normal

                  text-slate-900

                  text-center

                  antialiased

                  drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]
                "
              >
                With a commitment to reliable products, competitive
                solutions, and responsive service, we strive to be a trusted
                HVAC sourcing partner for businesses and professionals across
                the UAE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}