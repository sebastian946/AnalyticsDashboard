import { Download } from 'lucide-react'
import { SearchBar } from '@/components/ui/SearchBar'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { NotificationsDropdown } from '@/components/ui/NotificationsDropdown'
import { Button } from '@/components/ui/Button'

interface HeaderProps {
  title?: string
  showExport?: boolean
  onExport?: () => void
}

export const Header = ({ title = 'Dashboard Overview', showExport = true, onExport }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 dark:border-dark-border px-8 py-4 bg-white dark:bg-dark-surface/80 backdrop-blur sticky top-0 z-40">
      <div className="flex items-center gap-8">
        <h2 className="text-slate-900 dark:text-white text-lg font-bold tracking-tight">
          {title}
        </h2>
        <SearchBar
          placeholder="Search metrics, users, or data points..."
          className="w-80"
        />
      </div>

      <div className="flex items-center gap-4">
        {/* Live System Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/30">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">
            LIVE SYSTEM
          </span>
        </div>

        {/* Notifications Dropdown */}
        <NotificationsDropdown />

        {/* Export Button */}
        {showExport && (
          <Button variant="primary" size="md" onClick={onExport}>
            <Download className="w-4 h-4" />
            Export
          </Button>
        )}

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* User Avatar */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
          JD
        </div>
      </div>
    </header>
  )
}
