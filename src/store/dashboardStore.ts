import { create } from 'zustand'
import type { KPIMetric, ChartData, TimeRange } from '@/types'

interface DashboardStore {
  // State
  kpiMetrics: KPIMetric[]
  chartData: ChartData[]
  timeRange: TimeRange
  isLoading: boolean

  // Actions
  setKPIMetrics: (metrics: KPIMetric[]) => void
  setChartData: (data: ChartData[]) => void
  setTimeRange: (range: TimeRange) => void
  refreshData: () => Promise<void>
}

export const useDashboardStore = create<DashboardStore>((set, get) => ({
  kpiMetrics: [],
  chartData: [],
  timeRange: '24h',
  isLoading: false,

  setKPIMetrics: (metrics) => set({ kpiMetrics: metrics }),
  setChartData: (data) => set({ chartData: data }),
  setTimeRange: (range) => set({ timeRange: range }),

  refreshData: async () => {
    set({ isLoading: true })
    try {
      // Import dynamically to avoid circular dependencies
      const { getKPIMetrics, getChartData } = await import('@/services/mockData')
      const metrics = getKPIMetrics()
      const chartData = getChartData(get().timeRange)
      set({ kpiMetrics: metrics, chartData })
    } finally {
      set({ isLoading: false })
    }
  },
}))
