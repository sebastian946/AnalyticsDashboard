export type UserStatus = 'active' | 'idle' | 'suspended'
export type PlanType = 'starter' | 'professional' | 'enterprise'

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  initials: string
  plan: PlanType
  status: UserStatus
  lastActive: Date
}

export interface UserFilters {
  status?: UserStatus
  plan?: PlanType
  dateRange?: [Date, Date]
}
