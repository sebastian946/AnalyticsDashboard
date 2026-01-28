import { format, formatDistance } from 'date-fns'

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value)
}

export const formatNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US').format(value)
}

export const formatCompactNumber = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    compactDisplay: 'short',
  }).format(value)
}

export const formatPercentage = (value: number, decimals: number = 1): string => {
  return `${value.toFixed(decimals)}%`
}

export const formatDate = (date: Date): string => {
  return format(date, 'MMM dd, yyyy')
}

export const formatDateTime = (date: Date): string => {
  return format(date, 'MMM dd, yyyy HH:mm')
}

export const formatRelativeTime = (date: Date): string => {
  return formatDistance(date, new Date(), { addSuffix: true })
}

export const formatTime = (timestamp: number): string => {
  const date = new Date(timestamp)
  return format(date, 'HH:mm')
}

export const formatDateShort = (timestamp: number): string => {
  const date = new Date(timestamp)
  return format(date, 'MMM dd')
}
