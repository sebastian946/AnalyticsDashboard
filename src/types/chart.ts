export interface ChartTooltipProps {
  active?: boolean
  payload?: Array<{
    value: number
    name: string
    color: string
  }>
  label?: string | number
}

export interface DonutChartData {
  name: string
  value: number
  color: string
  percentage: number
}
