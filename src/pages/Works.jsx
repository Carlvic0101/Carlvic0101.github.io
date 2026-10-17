import { useState } from 'react'
import { WORKS } from '../data/assets'
import Icon from '../components/Icon'

const FILTERS = [
  { id: 'all', label: 'All Works [04]' },
  { id: 'spatial', label: 'Spatial Computing' },
  { id: 'systems', label: 'Design Systems' },
  { id: 'hardware', label: 'Tactile & Hardware' },
  { id: 'editorial', label: 'Editorial' },
]

export default function Works() {
  const [filter, setFilter] = useState('all')
  const visible =
    filter === 'all' ? WORKS : WORKS.filter((w) => w.category === filter)

  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-surface-tint py-space-xl">
        <div className="max-w-canvas mx-auto px-gutter">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-text-muted">
                Selected Archive • 2022–2025
              </span>
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
                Index of Works
              </h1>
            </div>
            <p className="font-body-md text-body-md text-text-muted max-w-md">
              A chronological catalogue of design engineering, spatial operating
              systems, and typographically disciplined human interfaces.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-space-xs pt-space-md">
            {FILTERS.map((f) => {
              const active = filter === f.id
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={[
                    'px-space-md py-space-xs font-label-sm text-label-sm rounded-lg transition-colors',
                    active
                      ? 'bg-primary text-on-primary'
                      : 'bg-surface-pure text-on-surface-variant hover:text-primary',
                  ].join(' ')}
                >
                  {f.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      <div className="w-full bg-surface-pure">
        <div className="max-w-canvas mx-auto px-gutter py-16 flex flex-col gap-28 md:gap-36">
          {visible.map((work) => (
            <article
              key={work.id}
              className="flex flex-col gap-space-lg group"
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-surface-muted rounded-DEFAULT border border-border-subtle">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.01]"
                  alt={work.alt}
                  src={work.image}
                />
              </div>
              <div className="flex flex-col gap-space-sm pt-space-xs max-w-4xl">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-label-sm text-label-sm uppercase tracking-widest text-text-muted">
                  <span className="text-primary font-semibold">{work.tag}</span>
                  <span>—</span>
                  <span>{work.year}</span>
                  <span>—</span>
                  <span>{work.stack}</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight group-hover:text-primary transition-colors">
                  {work.title}
                </h2>
                <p className="font-body-md text-body-md text-text-muted leading-relaxed">
                  {work.description}
                </p>
                <div className="pt-space-xs">
                  <a
                    className="inline-flex items-center gap-space-xs font-label-md text-label-md text-primary hover:underline hover:translate-x-0.5 transition-transform"
                    href="#case-study"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>View Case Study</span>
                    <Icon name="arrow_forward" className="text-[16px]" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
