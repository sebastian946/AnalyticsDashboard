import { TrendingUp, TrendingDown } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { cn } from '@/utils/cn'

interface KPICardProps {
  label: string
  value: string | number
  change: number
  changeLabel: string
  icon: string
  trend: 'up' | 'down' | 'neutral'
  color?: string
}

export const KPICard = ({
  label,
  value,
  change,
  changeLabel,
  icon,
  trend,
  color,
}: KPICardProps) => {
  // Get icon dynamically from lucide-react
  const IconComponent = (LucideIcons as any)[icon] || LucideIcons.BarChart3

  const trendColor = trend === 'up' ? 'text-green-500' : trend === 'down' ? 'text-red-500' : 'text-slate-400'
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown
  const changePrefix = trend === 'up' ? '+' : trend === 'down' ? '-' : ''

  return (
    <div className="flex flex-col gap-3 rounded-xl p-6 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-primary/30 transition-all shadow-sm dark:shadow-none">
      <div className="flex justify-between items-start">
        <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{label}</p>
        <div className={cn('text-primary', color && `text-${color}-500`)}>
          <IconComponent className="w-5 h-5" />
        </div>
      </div>

      <p className="text-slate-900 dark:text-white text-3xl font-bold">{value}</p>

      <div className="flex items-center gap-2">
        <span className={cn('text-xs font-bold flex items-center gap-1', trendColor)}>
          <TrendIcon className="w-4 h-4" />
          {changePrefix}{Math.abs(change)}%
        </span>
        <span className="text-slate-600 dark:text-slate-400 text-xs">{changeLabel}</span>
      </div>
    </div>
  )
}
