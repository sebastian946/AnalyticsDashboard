import { useEffect } from 'react'
import { useDashboardStore } from '@/store'
import { getAnalyticsKPIMetrics, getCustomerSegments } from '@/services/mockData'
import { KPICard } from '@/components/dashboard/KPICard'
import { ChartCard } from '@/components/charts/ChartCard'
import { AreaChart } from '@/components/charts/AreaChart'
import { DonutChart } from '@/components/charts/DonutChart'

export const DetailedAnalytics = () => {
  const { chartData, timeRange, setTimeRange, refreshData, isLoading } = useDashboardStore()

  const analyticsMetrics = getAnalyticsKPIMetrics()
  const customerSegments = getCustomerSegments()

  useEffect(() => {
    refreshData()
  }, [timeRange])

  return (
    <div className="space-y-8">
      {/* KPI Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {analyticsMetrics.map((metric) => (
          <KPICard key={metric.id} {...metric} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Growth Chart - Takes 2 columns */}
        <div className="lg:col-span-2">
          <ChartCard
            title="Revenue Growth"
            description="Monthly breakdown of platform revenue"
            showTimeRange
            timeRange={timeRange}
            onTimeRangeChange={setTimeRange}
            isLoading={isLoading}
          >
            {chartData[1] && <AreaChart data={chartData[1]} color="#10b981" />}
          </ChartCard>
        </div>

        {/* Customer Segments Donut Chart */}
        <div className="lg:col-span-1">
          <ChartCard
            title="Customer Segments"
            description="Current active distribution"
          >
            <DonutChart data={customerSegments} />
          </ChartCard>
        </div>
      </div>
    </div>
  )
}
