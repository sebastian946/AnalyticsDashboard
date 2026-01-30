import {
  LayoutDashboard,
  BarChart3,
  Users,
  DollarSign,
  Settings,
  FileText,
  HelpCircle,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { routes } from './routes'

export interface NavigationItem {
  id: string
  label: string
  icon: LucideIcon
  path: string
  section?: 'main' | 'admin'
}

export const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Overview',
    icon: LayoutDashboard,
    path: routes.dashboard,
    section: 'main',
  },
  {
    id: 'analytics',
    label: 'Detailed Analytics',
    icon: BarChart3,
    path: routes.analytics,
    section: 'main',
  },
  {
    id: 'users',
    label: 'User Management',
    icon: Users,
    path: routes.users,
    section: 'main',
  },
  {
    id: 'revenue',
    label: 'Revenue',
    icon: DollarSign,
    path: routes.revenue,
    section: 'main',
  },
  {
    id: 'reports',
    label: 'Reports',
    icon: FileText,
    path: routes.reports,
    section: 'main',
  },
]

export const adminNavigationItems: NavigationItem[] = [
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    path: routes.settings,
    section: 'admin',
  },
  {
    id: 'help',
    label: 'Help Center',
    icon: HelpCircle,
    path: '/help',
    section: 'admin',
  },
]
