import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import type { CustomerSegment } from '@/types'
import { formatNumber } from '@/utils/formatters'

interface DonutChartProps {
  data: CustomerSegment[]
}

export const DonutChart = ({ data }: DonutChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0)

  const renderCustomLabel = () => {
    return (
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-slate-900 dark:fill-white font-bold text-2xl"
      >
        {formatNumber(total)}
        <tspan x="50%" dy="1.5em" className="fill-slate-500 dark:fill-slate-400 text-xs font-normal">
          TOTAL
        </tspan>
      </text>
    )
  }

  const renderLegend = (props: any) => {
    const { payload } = props
    return (
      <div className="flex justify-center gap-6 mt-6">
        {payload.map((entry: any, index: number) => (
          <div key={`legend-${index}`} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            />
            <div className="flex flex-col">
              <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                {entry.value}
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {data[index].percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="40%"
          innerRadius={60}
          outerRadius={90}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Legend content={renderLegend} />
        <text>{renderCustomLabel()}</text>
      </PieChart>
    </ResponsiveContainer>
  )
}
