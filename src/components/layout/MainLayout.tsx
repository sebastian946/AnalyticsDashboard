import type { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Footer } from './Footer'

interface MainLayoutProps {
  children: ReactNode
  title?: string
  showExport?: boolean
  onExport?: () => void
}

export const MainLayout = ({ children, title, showExport, onExport }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display">
      <Sidebar />
      <main className="ml-64 flex-1 flex flex-col min-h-screen">
        <Header title={title} showExport={showExport} onExport={onExport} />
        <div className="flex-1 p-8">{children}</div>
        <Footer />
      </main>
    </div>
  )
}
