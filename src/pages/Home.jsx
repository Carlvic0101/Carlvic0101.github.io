import { Link } from 'react-router-dom'
import { HERO_IMAGE } from '../data/assets'
import Icon from '../components/Icon'
import WarpText from '../components/WarpText'

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full -mt-16 min-h-[92vh] flex flex-col justify-between overflow-hidden bg-surface-container">
        <div className="absolute inset-0 w-full h-full">
          <img
            alt="Calm ocean horizon under pastel morning mist"
            className="w-full h-full object-cover object-center brightness-[1.02] contrast-[0.98]"
            src={HERO_IMAGE}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/30 via-transparent to-surface/80" />
        </div>

        <div className="relative z-10 w-full max-w-canvas mx-auto px-gutter pt-24 pb-8 flex justify-between items-center text-on-surface-variant font-label-sm text-label-sm tracking-widest uppercase">
          <div className="flex items-center gap-space-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-on-surface font-label-md text-label-md">
              Index 01 // Overview
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
            <span>37°46&apos;29&quot; N</span>
            <span>122°24&apos;02&quot; W</span>
            <span className="px-space-sm py-0.5 bg-surface-pure/80 rounded-lg text-primary font-label-sm text-label-sm">
              Available Q2-Q3
            </span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-canvas mx-auto px-gutter flex-1 flex flex-col items-center justify-center text-center select-none py-12">
          <p className="font-label-sm text-label-sm tracking-[0.25em] text-primary uppercase mb-space-md opacity-90">
            Design Systems & Computational Interfaces
          </p>
          <div className="w-full max-w-4xl text-primary">
            <h1 className="sr-only">Carl</h1>
            <WarpText
              text="CARL"
              warpStrength={0.08}
              warpScale={1.7}
              speed={0.55}
              lens="bulge"
              pointerInfluence={0.42}
              pointerStrength={0.38}
              refraction={0.018}
              chromatic={0.35}
              idleDrift={0.2}
              ripple
              clickRipple
              intro
              fontSize={116}
              fontWeight={800}
              style={{ height: '320px' }}
              fontFamily="inherit"
              letterSpacing="-0.06em"
              lineHeight={0.9}
              color="#0058be"
            />
          </div>
          <div className="mt-space-lg max-w-xl mx-auto flex flex-col items-center gap-space-sm">
            <p className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight text-balance">
              Designer & Creative Technologist
            </p>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md font-normal leading-relaxed text-balance">
              Crafting quiet digital systems, structural typography, and rigorous
              user architectures from San Francisco.
            </p>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-canvas mx-auto px-gutter pb-8 flex items-end justify-between">
          <div className="flex items-center gap-space-sm text-on-surface-variant">
            <span className="font-label-sm text-label-sm tracking-wider uppercase text-text-muted">
              Discipline
            </span>
            <span className="text-text-muted">/</span>
            <span className="font-label-sm text-label-sm uppercase text-on-surface">
              Precision • Typographic • Minimal
            </span>
          </div>
          <a
            className="group flex items-center gap-space-xs text-on-surface font-label-md text-label-md hover:text-primary transition-colors"
            href="#contact-strip"
          >
            <span className="font-label-sm text-label-sm uppercase tracking-wider">
              Coordinates
            </span>
            <Icon
              name="arrow_downward"
              className="text-[18px] group-hover:translate-y-0.5 transition-transform"
            />
          </a>
        </div>
      </section>

      <section
        className="w-full bg-surface-pure border-t border-border-subtle py-space-xl"
        id="contact-strip"
      >
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg items-center">
            <div className="md:col-span-5 flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-muted">
                Direct Communication
              </span>
              <a
                className="font-headline-sm text-headline-sm font-bold text-navy hover:text-primary transition-colors inline-flex items-center gap-space-xs group"
                href="mailto:hello@carlliu.design"
              >
                <span>hello@carlliu.design</span>
                <Icon
                  name="arrow_outward"
                  className="text-[20px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </a>
              <span className="font-body-sm text-body-sm text-text-muted mt-space-xs">
                Encrypted communication available • PGP / Signal
              </span>
            </div>
            <div className="md:col-span-4 flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-muted">
                Studio Address
              </span>
              <address className="not-italic font-body-lg text-body-lg font-medium text-navy leading-snug">
                548 Market St, Suite 3200
                <br />
                San Francisco, CA 94104
              </address>
              <span className="font-body-sm text-body-sm text-text-muted mt-space-xs">
                Pacific Time Zone (UTC-8)
              </span>
            </div>
            <div className="md:col-span-3 flex md:justify-end items-center gap-space-md">
              <Link
                className="px-space-md py-space-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-primary-container transition-colors inline-flex items-center gap-space-xs"
                to="/contact"
              >
                <span>Initiate Project</span>
                <Icon name="send" className="text-[16px]" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
