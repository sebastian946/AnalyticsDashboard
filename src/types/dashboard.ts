export type TimeRange = '24h' | '7d' | '30d' | '90d'

export interface KPIMetric {
  id: string
  label: string
  value: string | number
  change: number
  changeLabel: string
  icon: string
  trend: 'up' | 'down' | 'neutral'
  color?: string
}

export interface ChartDataPoint {
  timestamp: string | number
  value: number
  label?: string
}

export interface ChartData {
  id: string
  title: string
  description?: string
  data: ChartDataPoint[]
  type: 'line' | 'area' | 'bar' | 'donut'
}

export interface CustomerSegment {
  label: string
  value: number
  percentage: number
  color: string
}
