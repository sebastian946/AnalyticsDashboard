import { useEffect } from 'react'
import { useThemeStore } from '@/store'

export const useTheme = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore()

  useEffect(() => {
    // Initialize theme on mount
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return {
    theme,
    toggleTheme,
    setTheme,
    isDark: theme === 'dark',
  }
}
