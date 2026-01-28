import { Search } from 'lucide-react'
import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {}

export const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-slate-500" />
        <input
          ref={ref}
          type="search"
          className={cn(
            'h-10 w-full rounded-lg border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-500 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary',
            className
          )}
          {...props}
        />
      </div>
    )
  }
)

SearchBar.displayName = 'SearchBar'
