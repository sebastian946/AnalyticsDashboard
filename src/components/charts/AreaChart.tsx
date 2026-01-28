import {
  AreaChart as RechartsArea,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { ChartData, ChartTooltipProps } from '@/types'
import { formatTime, formatCompactNumber } from '@/utils/formatters'

interface AreaChartProps {
  data: ChartData
  color?: string
}

const CustomTooltip = ({ active, payload, label }: ChartTooltipProps) => {
  if (!active || !payload || !payload.length) {
    return null
  }

  return (
    <div className="bg-slate-900/90 dark:bg-slate-800/90 border border-slate-700 rounded-lg p-3 shadow-lg">
      <p className="text-xs text-slate-400 mb-1">{formatTime(Number(label))}</p>
      <p className="text-sm font-bold text-white">
        {formatCompactNumber(payload[0].value)} visits
      </p>
    </div>
  )
}

export const AreaChart = ({ data, color = '#137fec' }: AreaChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsArea data={data.data}>
        <defs>
          <linearGradient id={`gradient-${data.id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.3} />
            <stop offset="95%" stopColor={color} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
        <XAxis
          dataKey="timestamp"
          stroke="#64748b"
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => formatTime(value)}
        />
        <YAxis
          stroke="#64748b"
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => formatCompactNumber(value)}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={3}
          fillOpacity={1}
          fill={`url(#gradient-${data.id})`}
        />
      </RechartsArea>
    </ResponsiveContainer>
  )
}
