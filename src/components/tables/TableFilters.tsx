import { Filter, ArrowUpDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface TableFiltersProps {
  onFilter?: () => void
  onSort?: () => void
}

export const TableFilters = ({ onFilter, onSort }: TableFiltersProps) => {
  return (
    <div className="flex items-center gap-2">
      {onFilter && (
        <Button variant="secondary" size="sm" onClick={onFilter}>
          <Filter className="w-4 h-4" />
          Filters
        </Button>
      )}
      {onSort && (
        <Button variant="secondary" size="sm" onClick={onSort}>
          <ArrowUpDown className="w-4 h-4" />
          Sort
        </Button>
      )}
    </div>
  )
}
