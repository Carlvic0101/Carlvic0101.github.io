import { Link } from 'react-router-dom'
import { ME_IMAGES } from '../data/assets'
import Icon from '../components/Icon'

export default function Me() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-tint pt-space-xl pb-space-lg border-b border-border-subtle">
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="flex items-center justify-between pb-space-lg text-text-muted font-label-sm text-label-sm uppercase tracking-widest">
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              <span>Editorial Journal & Profile</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-sm text-on-surface-variant">
              <span>Taipei — San Francisco</span>
              <span className="text-outline-variant">/</span>
              <span className="text-primary font-semibold">24°08&apos; N, 120°41&apos; E</span>
            </div>
          </div>

          <div className="py-space-lg max-w-4xl">
            <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-space-sm font-semibold">
              Design Engineer & Systems Architect
            </p>
            <h1 className="font-display text-display-mobile md:text-display font-extrabold tracking-tight bg-gradient-to-r from-border-focus via-primary to-on-secondary-fixed bg-clip-text text-transparent pb-space-xs">
              Carl Liu
            </h1>
            <p className="font-headline-sm text-headline-sm text-on-surface-variant font-normal leading-relaxed mt-space-md max-w-3xl">
              Synthesizing architectural rigor, tactile instruments, and
              contemplative physical design into fluid digital software.
            </p>
          </div>

          <div className="pt-space-lg pb-space-md border-t border-border-subtle flex flex-col md:flex-row gap-space-md md:items-baseline justify-between">
            <blockquote className="font-title text-title text-on-surface max-w-2xl leading-relaxed italic">
              “Designing digital experiences with quiet clarity, structural
              discipline, and emotional calm.”
            </blockquote>
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-text-muted uppercase tracking-wider">
              <span>Swiss Typographic Intent</span>
              <span className="text-outline-variant">—</span>
              <span>01 // Doctrine</span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-pure py-space-xl border-b border-border-subtle">
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-space-xl lg:gap-x-gutter items-start">
            <div className="lg:col-span-4">
              <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest block mb-space-xs font-semibold">
                01 / PERSPECTIVE
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Form as Inevitable Consequence
              </h2>
              <p className="font-body-sm text-body-sm text-text-muted mt-space-sm leading-relaxed">
                Before translating systems to screen-space coordinates, my
                foundation was shaped by tangible brickwork, spatial proportion,
                and modernist typography. Every pixel carries physical weight.
              </p>
              <div className="mt-space-lg pt-space-md border-t border-border-subtle flex flex-wrap items-center gap-space-md text-text-muted font-label-sm text-label-sm">
                <span className="text-primary font-semibold">T-Square</span>
                <span>•</span>
                <span className="text-primary font-semibold">Grid Systems</span>
                <span>•</span>
                <span className="text-primary font-semibold">Type Scales</span>
              </div>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-space-lg text-body-lg text-on-surface-variant leading-relaxed">
              <p className="text-on-surface font-title text-title leading-normal font-normal">
                I view digital interfaces not as ephemeral canvases, but as
                durable public and private architecture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg text-body-md text-on-surface-variant">
                <p>
                  My days unfold between high-fidelity component architectures,
                  token systems, and tactile human routines. I believe software
                  behaves best when it adopts the stillness of an open reading
                  room—delivering profound density of utility without gratuitous
                  fanfare.
                </p>
                <p>
                  When disconnected from the terminal, I pursue disciplines
                  demanding manual calibration: hand-ground coffee beans measured
                  to fractional grams, analog camera shutters mechanical in click
                  and cadence, and custom-tuned keyboard switches providing
                  acoustic feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-tint py-space-xl border-b border-border-subtle">
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-space-xl border-b border-border-subtle mb-space-xl">
            <div>
              <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest block mb-space-xs font-semibold">
                02 / PERSONAL PURSUITS
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface font-bold tracking-tight">
                The Quiet Rhythms
              </h2>
            </div>
            <p className="font-body-sm text-body-sm text-text-muted max-w-sm mt-space-sm md:mt-0 leading-relaxed">
              Analog habits that refine aesthetic awareness, tactile
              appreciation, and mental equilibrium.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-space-lg lg:gap-x-gutter items-center pb-space-xl border-b border-border-subtle mb-space-xl">
            <div className="lg:col-span-5 flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                <Icon name="photo_camera" className="text-[18px]" />
                <span>Journal Note 01</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Analog Photography & Coastal Fog
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-xs">
                Wandering rugged coastlines with mechanical 35mm rangefinders.
                Limiting an afternoon walk to twenty-four exposures enforces a
                discipline of contemplation that screen design so often strips
                away.
              </p>
              <blockquote className="border-b border-t border-border-subtle py-space-sm my-space-sm text-text-muted font-body-sm italic">
                “Wait for the wave crest to clear the rock face; mechanical
                shutter cocked, aperture f/5.6, breath held.”
              </blockquote>
              <div className="flex flex-wrap items-center gap-space-md text-text-muted font-label-sm text-label-sm">
                <span className="text-primary font-semibold">Leica M6</span>
                <span>•</span>
                <span>Kodak Tri-X 400</span>
                <span>•</span>
                <span>Ilford HP5</span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl bg-surface-muted relative group">
                <img
                  className="w-full h-80 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  alt="Pacific Ocean waves meeting a rocky coastline"
                  src={ME_IMAGES.coast}
                />
                <div className="pt-space-xs flex justify-between items-center text-text-muted font-label-sm text-label-sm">
                  <span>Pacific Shoreline, Marin Headlands</span>
                  <span className="text-primary font-semibold">35mm Exposure</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-space-lg lg:gap-x-gutter items-center pb-space-xl border-b border-border-subtle mb-space-xl">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="overflow-hidden rounded-xl bg-surface-muted relative group">
                <img
                  className="w-full h-80 object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                  alt="Architectural monographs on a desk"
                  src={ME_IMAGES.monographs}
                />
                <div className="pt-space-xs flex justify-between items-center text-text-muted font-label-sm text-label-sm">
                  <span>Monograph archive in morning sunlight</span>
                  <span className="text-primary font-semibold">
                    Swiss Typographic Studies
                  </span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-space-sm order-1 lg:order-2">
              <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
                <Icon name="menu_book" className="text-[18px]" />
                <span>Journal Note 02</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Architecture & Design Monographs
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed pt-space-xs">
                Collecting mid-century structuralist volumes, Swiss graphic style
                manuals, and essays on rationalist architecture. Studying the
                physical page grid deepens how we compose fluid tokens on the
                screen.
              </p>
              <blockquote className="border-b border-t border-border-subtle py-space-sm my-space-sm text-text-muted font-body-sm italic">
                “True minimalism is not the lack of elements, but the
                impossibility of removing anything further.”
              </blockquote>
              <div className="flex flex-wrap items-center gap-space-md text-text-muted font-label-sm text-label-sm">
                <span className="text-primary font-semibold">Massimo Vignelli</span>
                <span>•</span>
                <span>Dieter Rams</span>
                <span>•</span>
                <span>Álvaro Siza</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-widest text-on-secondary-fixed-variant font-semibold">
                <Icon name="keyboard" className="text-[18px]" />
                <span>Journal Note 03</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Tactile Computing & Keyboards
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Bespoke mechanical keyboards, custom-lubricated linear switches,
                solid aluminum chassis, and wire-free, zero-distraction
                workspaces. The mechanical sensation of key strokes connects
                physical cognition directly to logic flow.
              </p>
              <div className="pt-space-md border-t border-border-subtle flex items-center justify-between text-text-muted font-label-sm text-label-sm gap-space-sm">
                <span className="text-primary font-semibold">
                  Keycult No. 1/65 & HHKB
                </span>
                <span>Hand-lubed Linear 62g</span>
              </div>
            </div>
            <div className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-space-sm font-label-sm text-label-sm uppercase tracking-widest text-tertiary font-semibold">
                <Icon name="coffee" className="text-[18px]" />
                <span>Journal Note 04</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Morning Coffee & Pour-Over Rituals
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Precision pour-overs using light-roast washed Ethiopian varietals
                at 92°C. A 1:16 ratio extracted through conical ceramic drippers.
                The daily 8-minute preparation provides an anchor of calm before
                engaging the digital architecture.
              </p>
              <div className="pt-space-md border-t border-border-subtle flex items-center justify-between text-text-muted font-label-sm text-label-sm gap-space-sm">
                <span className="text-primary font-semibold">
                  Origami / Kalita 185
                </span>
                <span>Ethiopian Heirloom 92°C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-pure py-space-xl border-b border-border-subtle">
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-space-lg lg:gap-x-gutter items-center">
            <div className="lg:col-span-5 flex flex-col gap-space-md">
              <span className="font-label-sm text-label-sm uppercase text-primary tracking-widest font-semibold">
                03 / ARTIFACTS & WORKSPACE
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                The Quiet Atelier Setup
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Surroundings dictate cognitive focus. My everyday workstation is
                engineered strictly to preserve clean lines of sight, natural
                acoustic resonance, and frictionless digital execution.
              </p>
              <div className="flex flex-col divide-y divide-border-subtle border-t border-b border-border-subtle my-space-xs">
                {[
                  ['Primary Display', '5K Studio Display (5120 × 2880)'],
                  ['Key Instrument', 'Keycult No. 1/65 Rev. 2'],
                  ['Optical System', 'Leica Summicron 35mm f/2'],
                  ['Extraction Method', 'Origami Dripper / Kalita 185'],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="py-space-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-body-sm"
                  >
                    <span className="text-on-surface font-medium">{label}</span>
                    <span className="text-primary font-semibold font-label-sm text-label-sm">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="overflow-hidden rounded-xl bg-surface-muted">
                <img
                  className="w-full h-80 lg:h-96 object-cover"
                  alt="Clean desk setup with keyboard, coffee, and camera"
                  src={ME_IMAGES.desk}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface-tint py-space-xl">
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="flex flex-col md:flex-row items-baseline justify-between gap-space-lg pb-space-lg border-b border-border-subtle">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold block mb-space-xs">
                04 / DIALOGUE
              </span>
              <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                Always open to thoughtful conversations
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mt-space-sm leading-relaxed">
                Whether analyzing an early design system spec, discussing
                typography monographs, or trading coffee roast profiles.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-space-md shrink-0">
              <Link
                className="px-space-md py-space-sm bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md rounded-lg transition-colors inline-flex items-center gap-space-xs font-semibold"
                to="/contact"
              >
                <span>Initiate Dialogue</span>
                <Icon name="arrow_forward" className="text-[18px]" />
              </Link>
              <Link
                className="px-space-md py-space-sm border border-border-subtle text-on-surface hover:bg-surface-pure font-label-md text-label-md rounded-lg transition-colors"
                to="/works"
              >
                View Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
