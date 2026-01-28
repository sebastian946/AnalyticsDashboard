export const LiveIndicator = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/30">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <span className="text-xs font-medium text-green-700 dark:text-green-400 uppercase tracking-wide">
        LIVE SYSTEM
      </span>
    </div>
  )
}
