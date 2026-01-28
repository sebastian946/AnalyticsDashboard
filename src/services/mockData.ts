import type {
  KPIMetric,
  ChartData,
  ChartDataPoint,
  User,
  Transaction,
  TimeRange,
  CustomerSegment,
} from '@/types'

// Helper to generate realistic time-series data
function generateTimeSeriesData(range: TimeRange): ChartDataPoint[] {
  const now = Date.now()
  let points: number
  let interval: number

  switch (range) {
    case '24h':
      points = 24
      interval = 3600000 // 1 hour
      break
    case '7d':
      points = 7
      interval = 86400000 // 1 day
      break
    case '30d':
      points = 30
      interval = 86400000 // 1 day
      break
    case '90d':
      points = 90
      interval = 86400000 // 1 day
      break
  }

  return Array.from({ length: points }, (_, i) => ({
    timestamp: now - (points - i - 1) * interval,
    value: Math.floor(Math.random() * 5000 + 8000 + Math.sin(i / 3) * 2000),
  }))
}

// Mock KPI Metrics
export const getKPIMetrics = (): KPIMetric[] => [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$42,500.80',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: 'trending-up',
    trend: 'up',
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '12,840',
    change: 5.2,
    changeLabel: 'live now',
    icon: 'users',
    trend: 'up',
  },
  {
    id: 'churn',
    label: 'Churn Rate',
    value: '2.4%',
    change: -0.8,
    changeLabel: 'lower target',
    icon: 'trending-down',
    trend: 'down',
    color: 'orange',
  },
  {
    id: 'session',
    label: 'Avg. Session',
    value: '4m 32s',
    change: 1.5,
    changeLabel: 'engagement up',
    icon: 'clock',
    trend: 'up',
  },
]

// Mock KPI Metrics for Analytics page
export const getAnalyticsKPIMetrics = (): KPIMetric[] => [
  {
    id: 'mrr',
    label: 'MRR',
    value: '$45,200',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: 'dollar-sign',
    trend: 'up',
  },
  {
    id: 'churn',
    label: 'Churn Rate',
    value: '2.4%',
    change: -0.8,
    changeLabel: 'improvement',
    icon: 'trending-down',
    trend: 'down',
    color: 'green',
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '12,840',
    change: 5.2,
    changeLabel: 'growth',
    icon: 'users',
    trend: 'up',
  },
  {
    id: 'arpu',
    label: 'ARPU',
    value: '$38.50',
    change: 1.2,
    changeLabel: 'per user',
    icon: 'bar-chart',
    trend: 'up',
  },
]

// Mock Chart Data
export const getChartData = (timeRange: TimeRange): ChartData[] => {
  const dataPoints = generateTimeSeriesData(timeRange)

  return [
    {
      id: 'traffic',
      title: 'Traffic Sources Over Time',
      description: 'Daily visitor breakdown per channel',
      type: 'area',
      data: dataPoints,
    },
    {
      id: 'revenue',
      title: 'Revenue Growth',
      description: 'Monthly breakdown of platform revenue',
      type: 'area',
      data: dataPoints,
    },
  ]
}

// Mock Customer Segments for Donut Chart
export const getCustomerSegments = (): CustomerSegment[] => [
  {
    label: 'PRO',
    value: 7704,
    percentage: 60,
    color: '#3b82f6', // blue
  },
  {
    label: 'ENT',
    value: 3210,
    percentage: 25,
    color: '#10b981', // green
  },
  {
    label: 'START',
    value: 1926,
    percentage: 15,
    color: '#f97316', // orange
  },
]

// Mock Users
export const getUsers = (page: number = 1, limit: number = 10): { users: User[]; total: number } => {
  const allUsers: User[] = [
    {
      id: '1',
      name: 'Jordan Smith',
      email: 'jordan@acme.corp',
      initials: 'JS',
      plan: 'enterprise',
      status: 'active',
      lastActive: new Date(Date.now() - 2 * 60 * 1000),
    },
    {
      id: '2',
      name: 'Alice Lawson',
      email: 'alice@lawson.design',
      initials: 'AL',
      plan: 'professional',
      status: 'active',
      lastActive: new Date(Date.now() - 14 * 60 * 60 * 1000),
    },
    {
      id: '3',
      name: 'Robert Brown',
      email: 'robert@stack.io',
      initials: 'RB',
      plan: 'starter',
      status: 'idle',
      lastActive: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: '4',
      name: 'Elena Miller',
      email: 'elena@miller.com',
      initials: 'EM',
      plan: 'professional',
      status: 'suspended',
      lastActive: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000),
    },
    {
      id: '5',
      name: 'Michael Chen',
      email: 'michael@techcorp.com',
      initials: 'MC',
      plan: 'enterprise',
      status: 'active',
      lastActive: new Date(Date.now() - 30 * 60 * 1000),
    },
    {
      id: '6',
      name: 'Sarah Jenkins',
      email: 'sarah@startup.io',
      initials: 'SJ',
      plan: 'starter',
      status: 'active',
      lastActive: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      id: '7',
      name: 'David Martinez',
      email: 'david@enterprise.com',
      initials: 'DM',
      plan: 'professional',
      status: 'active',
      lastActive: new Date(Date.now() - 1 * 60 * 60 * 1000),
    },
    {
      id: '8',
      name: 'Lisa Wang',
      email: 'lisa@design.studio',
      initials: 'LW',
      plan: 'enterprise',
      status: 'active',
      lastActive: new Date(Date.now() - 10 * 60 * 1000),
    },
    {
      id: '9',
      name: 'Tom Anderson',
      email: 'tom@saas.co',
      initials: 'TA',
      plan: 'starter',
      status: 'idle',
      lastActive: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    },
    {
      id: '10',
      name: 'Emma Wilson',
      email: 'emma@platform.dev',
      initials: 'EW',
      plan: 'professional',
      status: 'active',
      lastActive: new Date(Date.now() - 45 * 60 * 1000),
    },
  ]

  return {
    users: allUsers.slice((page - 1) * limit, page * limit),
    total: allUsers.length,
  }
}

// Mock Transactions
export const getTransactions = (
  page: number = 1,
  limit: number = 10
): { transactions: Transaction[]; total: number } => {
  const allTransactions: Transaction[] = [
    {
      id: '1',
      transactionId: '#TRX-82910',
      customerId: '1',
      customerName: 'Sarah Jenkins',
      plan: 'Enterprise Monthly',
      amount: 499.0,
      status: 'success',
      date: new Date('2023-10-24'),
    },
    {
      id: '2',
      transactionId: '#TRX-82909',
      customerId: '2',
      customerName: 'Michael Chen',
      plan: 'Professional Annual',
      amount: 1200.0,
      status: 'success',
      date: new Date('2023-10-24'),
    },
    {
      id: '3',
      transactionId: '#TRX-82908',
      customerId: '3',
      customerName: 'Design Systems Ltd',
      plan: 'Starter Monthly',
      amount: 49.0,
      status: 'pending',
      date: new Date('2023-10-23'),
    },
    {
      id: '4',
      transactionId: '#TRX-82907',
      customerId: '4',
      customerName: 'Emily Rodriguez',
      plan: 'Professional Monthly',
      amount: 149.0,
      status: 'failed',
      date: new Date('2023-10-23'),
    },
  ]

  return {
    transactions: allTransactions.slice((page - 1) * limit, page * limit),
    total: allTransactions.length,
  }
}
