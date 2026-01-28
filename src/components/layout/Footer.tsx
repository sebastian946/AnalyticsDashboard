export const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-dark-border px-8 py-4 bg-white dark:bg-dark-surface">
      <div className="text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} SaaS Metric Analytics Platform. All rights reserved.
      </div>
    </footer>
  )
}
