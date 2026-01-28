import { create } from 'zustand'
import type { User, UserFilters } from '@/types'

interface UserStore {
  users: User[]
  filters: UserFilters
  searchTerm: string
  currentPage: number
  pageSize: number

  setUsers: (users: User[]) => void
  setFilters: (filters: Partial<UserFilters>) => void
  setSearchTerm: (term: string) => void
  setPage: (page: number) => void

  // Computed getter
  getFilteredUsers: () => User[]
}

export const useUserStore = create<UserStore>((set, get) => ({
  users: [],
  filters: {},
  searchTerm: '',
  currentPage: 1,
  pageSize: 10,

  setUsers: (users) => set({ users }),
  setFilters: (filters) => set((state) => ({ filters: { ...state.filters, ...filters } })),
  setSearchTerm: (term) => set({ searchTerm: term, currentPage: 1 }),
  setPage: (page) => set({ currentPage: page }),

  getFilteredUsers: () => {
    const { users, filters, searchTerm } = get()

    return users.filter(user => {
      // Search filter
      if (searchTerm && !user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
          !user.email.toLowerCase().includes(searchTerm.toLowerCase())) {
        return false
      }

      // Status filter
      if (filters.status && user.status !== filters.status) {
        return false
      }

      // Plan filter
      if (filters.plan && user.plan !== filters.plan) {
        return false
      }

      return true
    })
  },
}))
