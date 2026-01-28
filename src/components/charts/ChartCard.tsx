import type { ReactNode } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { TimeRangeSelector } from '@/components/dashboard/TimeRangeSelector'
import type { TimeRange } from '@/types'

interface ChartCardProps {
  title: string
  description?: string
  children: ReactNode
  showTimeRange?: boolean
  timeRange?: TimeRange
  onTimeRangeChange?: (range: TimeRange) => void
  isLoading?: boolean
}

export const ChartCard = ({
  title,
  description,
  children,
  showTimeRange = false,
  timeRange,
  onTimeRangeChange,
  isLoading = false,
}: ChartCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{title}</CardTitle>
            {description && <CardDescription>{description}</CardDescription>}
          </div>
          {showTimeRange && timeRange && onTimeRangeChange && (
            <TimeRangeSelector value={timeRange} onChange={onTimeRangeChange} />
          )}
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="h-[300px] flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          children
        )}
      </CardContent>
    </Card>
  )
}
