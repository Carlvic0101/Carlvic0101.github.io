import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import LogoMark from './LogoMark'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/me', label: 'Me' },
  { to: '/works', label: 'Works' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    [
      'px-space-md py-space-sm rounded-lg font-label-md text-label-md transition-colors',
      isActive
        ? 'bg-primary-container text-on-primary-container'
        : 'text-on-surface-variant hover:bg-surface-muted hover:text-on-surface',
    ].join(' ')

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-pure/90 backdrop-blur-xl border-b border-border-subtle">
      <div className="h-16 max-w-canvas mx-auto px-gutter flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-space-sm group"
          aria-label="CarlLiu home"
        >
          <LogoMark className="h-8 w-8 shrink-0 transition-opacity group-hover:opacity-90" />
          <span className="font-title text-title text-on-surface tracking-tight group-hover:text-primary transition-colors">
            CarlLiu
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-space-sm">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Icon name="person" className="text-on-primary text-[18px]" />
          </div>
          <button
            type="button"
            className="md:hidden p-2 text-on-surface"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'close' : 'menu'} className="text-[22px]" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border-subtle bg-surface-pure px-gutter py-space-md flex flex-col gap-space-xs">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
