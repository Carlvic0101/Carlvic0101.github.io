import { useState } from 'react'
import { CONTACT_AVATAR } from '../data/assets'
import Icon from '../components/Icon'

function CopyButton({ value, title }) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      className={`p-2 rounded-lg transition-colors ${
        copied
          ? 'text-navy'
          : 'text-text-muted hover:text-navy hover:bg-surface-pure'
      }`}
      title={title}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 1500)
        } catch {
          /* ignore */
        }
      }}
    >
      <Icon name="content_copy" className="text-[18px]" />
    </button>
  )
}

const CHANNELS = [
  {
    icon: 'call',
    label: 'Direct Phone',
    value: '+1 (415) 890-3421',
    copy: '+14158903421',
    href: 'tel:+14158903421',
    actionIcon: 'call',
    actionLabel: 'Call',
    primary: true,
  },
  {
    icon: 'mail',
    label: 'Electronic Mail',
    value: 'hello@carlliu.design',
    copy: 'hello@carlliu.design',
    href: 'mailto:hello@carlliu.design',
    actionIcon: 'send',
    actionLabel: 'Email',
    primary: true,
  },
  {
    icon: 'location_on',
    label: 'Physical Studio',
    value: (
      <address className="font-body-md text-body-md text-on-surface not-italic mt-0.5 leading-relaxed">
        548 Market Street, Suite 3200
        <br />
        San Francisco, CA 94104
      </address>
    ),
    displayAsText: false,
    copy: '548 Market Street, Suite 3200, San Francisco, CA 94104',
    href: 'https://maps.google.com/?q=548+Market+Street+San+Francisco+CA+94104',
    actionIcon: 'map',
    actionLabel: 'Map',
    primary: false,
    external: true,
  },
  {
    icon: 'terminal',
    label: 'Source Repositories',
    value: 'github.com/carlliu',
    copy: 'https://github.com/carlliu',
    href: 'https://github.com/carlliu',
    actionIcon: 'arrow_outward',
    actionLabel: 'Profile',
    primary: true,
    external: true,
  },
]

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-secondary-container/20 via-surface-container-low/40 to-transparent blur-3xl pointer-events-none" />

      <section className="relative max-w-canvas mx-auto px-gutter-mobile md:px-gutter pt-space-xl pb-space-lg lg:pt-20 lg:pb-12">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="relative group cursor-pointer mb-space-md">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-secondary-fixed via-primary-fixed-dim to-tertiary-fixed opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden bg-surface-pure ring-4 ring-surface-pure shadow-sm flex items-center justify-center">
              <img
                alt="Carl's Studio Cat Mascot"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={CONTACT_AVATAR}
              />
            </div>
            <div className="absolute bottom-0 right-0 bg-surface-pure rounded-full p-1 shadow-sm flex items-center justify-center">
              <span className="inline-block w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-pure" />
            </div>
          </div>

          <div className="inline-flex items-center gap-space-xs px-3 py-1 rounded-full bg-surface-muted text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase mb-space-md">
            <span className="w-1.5 h-1.5 rounded-full bg-navy animate-pulse" />
            Available for Select Commissions • Q2–Q3 2025
          </div>

          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight mb-space-sm">
            Get in{' '}
            <span className="bg-gradient-to-r from-primary to-navy bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="font-body-lg text-body-lg text-text-muted max-w-lg mx-auto">
            Whether you are exploring foundational design systems, bespoke web
            architecture, or simply wish to say hello — my channels are
            consistently open.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-gutter-mobile md:px-gutter pb-space-xl">
        <div className="bg-surface-pure rounded-xl p-space-lg md:p-space-xl shadow-sm border border-border-subtle">
          <div className="flex items-baseline justify-between mb-space-lg border-b border-border-subtle pb-space-md gap-space-md">
            <div>
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-navy font-semibold">
                Direct Channels
              </span>
              <h2 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                Communication Index
              </h2>
            </div>
            <span className="font-label-sm text-label-sm text-text-muted shrink-0">
              San Francisco • UTC −7
            </span>
          </div>

          <div className="space-y-space-md">
            {CHANNELS.map((ch) => (
              <div
                key={ch.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-space-md rounded-lg bg-surface hover:bg-surface-container-low transition-colors duration-150 gap-space-sm border border-border-subtle/60"
              >
                <div className="flex items-start sm:items-center gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-surface-pure flex items-center justify-center text-navy shrink-0 shadow-sm border border-border-subtle">
                    <Icon name={ch.icon} className="text-[20px]" />
                  </div>
                  <div>
                    <div className="font-label-sm text-label-sm uppercase tracking-wider text-text-muted">
                      {ch.label}
                    </div>
                    {ch.displayAsText === false ? (
                      ch.value
                    ) : (
                      <a
                        className="font-title text-title text-navy font-semibold hover:underline transition-colors"
                        href={ch.href}
                        {...(ch.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                      >
                        {ch.value}
                      </a>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-space-sm self-end sm:self-center">
                  <CopyButton value={ch.copy} title={`Copy ${ch.label}`} />
                  <a
                    className={
                      ch.primary
                        ? 'inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-navy text-surface-pure font-label-md text-label-md hover:opacity-90 shadow-sm transition-opacity'
                        : 'inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-navy text-navy font-label-md text-label-md hover:bg-surface-pure transition-colors'
                    }
                    href={ch.href}
                    {...(ch.external
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                  >
                    <Icon name={ch.actionIcon} className="text-[18px]" />
                    <span>{ch.actionLabel}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-space-lg pt-space-md border-t border-border-subtle flex flex-wrap items-center justify-between gap-space-md text-text-muted">
            <span className="font-label-sm text-label-sm">
              Typical response latency: &lt; 12 hours
            </span>
            <div className="flex items-center gap-space-sm">
              <a
                className="font-label-sm text-label-sm hover:text-navy transition-colors"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                LinkedIn
              </a>
              <span className="text-xs">•</span>
              <a
                className="font-label-sm text-label-sm hover:text-navy transition-colors"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                ReadCV
              </a>
              <span className="text-xs">•</span>
              <a
                className="font-label-sm text-label-sm hover:text-navy transition-colors"
                href="#"
                onClick={(e) => e.preventDefault()}
              >
                Twitter/X
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
