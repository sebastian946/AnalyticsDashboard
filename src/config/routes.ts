export const routes = {
  dashboard: '/',
  analytics: '/analytics',
  users: '/users',
  revenue: '/revenue',
  reports: '/reports',
  settings: '/settings',
} as const

export type RouteKey = keyof typeof routes
