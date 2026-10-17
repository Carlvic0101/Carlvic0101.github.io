export default function Footer() {
  return (
    <footer className="w-full bg-surface-pure border-t border-border-subtle py-space-lg">
      <div className="max-w-canvas mx-auto px-gutter flex flex-col sm:flex-row items-center justify-between gap-space-md">
        <div className="flex flex-col sm:flex-row items-center gap-space-sm">
          <span className="font-label-md text-label-md text-on-surface">
            CarlLiu Portfolio
          </span>
          <span className="font-label-sm text-label-sm text-text-muted">
            Architectural System & Design Engineering
          </span>
        </div>
        <div className="font-label-sm text-label-sm text-text-muted">
          © 2025 CarlLiu. Crafted with precision.
        </div>
      </div>
    </footer>
  )
}
