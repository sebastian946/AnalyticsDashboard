import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { useThemeStore } from '@/store'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const theme = useThemeStore((state) => state.theme)

  useEffect(() => {
    // Apply theme on mount and whenever it changes
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
  }, [theme])

  return <>{children}</>
}
