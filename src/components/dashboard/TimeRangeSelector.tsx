import { cn } from '@/utils/cn'
import { TIME_RANGES } from '@/utils/constants'
import type { TimeRange } from '@/types'

interface TimeRangeSelectorProps {
  value: TimeRange
  onChange: (range: TimeRange) => void
}

export const TimeRangeSelector = ({ value, onChange }: TimeRangeSelectorProps) => {
  return (
    <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-slate-100 dark:bg-slate-800">
      {TIME_RANGES.map((range) => (
        <button
          key={range.value}
          onClick={() => onChange(range.value as TimeRange)}
          className={cn(
            'px-3 py-1.5 rounded-md text-xs font-medium transition-all',
            value === range.value
              ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          )}
        >
          {range.label}
        </button>
      ))}
    </div>
  )
}
