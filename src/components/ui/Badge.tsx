import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info'
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
      success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
      warning: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400',
      danger: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
      info: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    }

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'
