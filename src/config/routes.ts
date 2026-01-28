export const routes = {
  dashboard: '/',
  analytics: '/analytics',
  users: '/users',
  revenue: '/revenue',
  settings: '/settings',
} as const

export type RouteKey = keyof typeof routes
