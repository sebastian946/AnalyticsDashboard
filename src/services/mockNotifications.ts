import type { Notification } from '@/types'

export const getMockNotifications = (): Notification[] => [
  {
    id: '1',
    type: 'success',
    title: 'New User Signup',
    message: 'Jordan Smith has joined as an Enterprise user',
    time: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
    read: false,
  },
  {
    id: '2',
    type: 'warning',
    title: 'Payment Pending',
    message: 'Transaction #TRX-82908 requires attention',
    time: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
    read: false,
  },
  {
    id: '3',
    type: 'info',
    title: 'System Update',
    message: 'Dashboard will be updated tonight at 2:00 AM',
    time: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    read: true,
  },
  {
    id: '4',
    type: 'success',
    title: 'Revenue Milestone',
    message: 'Monthly revenue exceeded $50,000!',
    time: new Date(Date.now() - 5 * 60 * 60 * 1000), // 5 hours ago
    read: true,
  },
  {
    id: '5',
    type: 'error',
    title: 'Failed Transaction',
    message: 'Payment failed for Emily Rodriguez',
    time: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
    read: true,
  },
]
