import { useEffect } from 'react'
import { useDashboardStore, useUserStore } from '@/store'
import { getUsers } from '@/services/mockData'
import { KPICard } from '@/components/dashboard/KPICard'
import { ChartCard } from '@/components/charts/ChartCard'
import { AreaChart } from '@/components/charts/AreaChart'
import { DataTable, type Column } from '@/components/tables/DataTable'
import { Pagination } from '@/components/tables/Pagination'
import { TableFilters } from '@/components/tables/TableFilters'
import { Badge } from '@/components/ui/Badge'
import type { User } from '@/types'
import { formatRelativeTime } from '@/utils/formatters'
import { PLAN_COLORS, STATUS_COLORS } from '@/utils/constants'

export const Dashboard = () => {
  const { kpiMetrics, chartData, timeRange, setTimeRange, refreshData, isLoading } = useDashboardStore()
  const { setUsers, currentPage, setPage, getFilteredUsers } = useUserStore()

  useEffect(() => {
    refreshData()
    const { users: fetchedUsers } = getUsers(1, 10)
    setUsers(fetchedUsers)
  }, [])

  const filteredUsers = getFilteredUsers()
  const totalPages = Math.ceil(filteredUsers.length / 10)

  const userColumns: Column<User>[] = [
    {
      key: 'name',
      header: 'USER',
      render: (_, user) => (
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-primary-600 flex items-center justify-center text-white font-semibold text-sm">
            {user.initials}
          </div>
          <div>
            <p className="font-medium text-slate-900 dark:text-white">{user.name}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">{user.email}</p>
          </div>
        </div>
      ),
    },
    {
      key: 'plan',
      header: 'PLAN',
      render: (plan: string) => (
        <Badge
          className={`${PLAN_COLORS[plan as keyof typeof PLAN_COLORS]?.bg} ${PLAN_COLORS[plan as keyof typeof PLAN_COLORS]?.text} uppercase`}
        >
          {plan}
        </Badge>
      ),
    },
    {
      key: 'status',
      header: 'STATUS',
      render: (status: string) => (
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${STATUS_COLORS[status as keyof typeof STATUS_COLORS]?.dot}`}></div>
          <span className={`text-sm capitalize ${STATUS_COLORS[status as keyof typeof STATUS_COLORS]?.text}`}>
            {status}
          </span>
        </div>
      ),
    },
    {
      key: 'lastActive',
      header: 'LAST ACTIVE',
      render: (date: Date) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {formatRelativeTime(date)}
        </span>
      ),
    },
    {
      key: 'id',
      header: 'ACTIONS',
      render: () => (
        <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <circle cx="10" cy="4" r="1.5" />
            <circle cx="10" cy="10" r="1.5" />
            <circle cx="10" cy="16" r="1.5" />
          </svg>
        </button>
      ),
    },
  ]

  return (
    <div className="space-y-8">
      {/* KPI Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric) => (
          <KPICard key={metric.id} {...metric} />
        ))}
      </div>

      {/* Traffic Chart */}
      <ChartCard
        title="Traffic Sources Over Time"
        description="Daily visitor breakdown per channel"
        showTimeRange
        timeRange={timeRange}
        onTimeRangeChange={setTimeRange}
        isLoading={isLoading}
      >
        {chartData[0] && <AreaChart data={chartData[0]} />}
      </ChartCard>

      {/* User Management Table */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">User Management</h3>
          <TableFilters />
        </div>

        <DataTable data={filteredUsers.slice((currentPage - 1) * 10, currentPage * 10)} columns={userColumns} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setPage}
          totalItems={filteredUsers.length}
          itemsPerPage={10}
        />
      </div>
    </div>
  )
}
