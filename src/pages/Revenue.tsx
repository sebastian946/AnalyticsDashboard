import { useState, useEffect } from 'react'
import { getTransactions } from '@/services/mockData'
import { DataTable, type Column } from '@/components/tables/DataTable'
import { Pagination } from '@/components/tables/Pagination'
import { TableFilters } from '@/components/tables/TableFilters'
import { Badge } from '@/components/ui/Badge'
import type { Transaction } from '@/types'
import { formatCurrency, formatDate } from '@/utils/formatters'
import { TRANSACTION_STATUS_COLORS } from '@/utils/constants'

export const Revenue = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
    const { transactions: data, total } = getTransactions(currentPage, 10)
    setTransactions(data)
    setTotalItems(total)
  }, [currentPage])

  const totalPages = Math.ceil(totalItems / 10)

  const transactionColumns: Column<Transaction>[] = [
    {
      key: 'transactionId',
      header: 'TRANSACTION ID',
      render: (id: string) => (
        <span className="font-mono text-sm font-medium text-slate-900 dark:text-white">{id}</span>
      ),
    },
    {
      key: 'customerName',
      header: 'CUSTOMER',
      render: (name: string) => (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-semibold">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
          <span className="text-sm font-medium text-slate-900 dark:text-white">{name}</span>
        </div>
      ),
    },
    {
      key: 'plan',
      header: 'SUBSCRIPTION PLAN',
      render: (plan: string) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">{plan}</span>
      ),
    },
    {
      key: 'amount',
      header: 'AMOUNT',
      render: (amount: number) => (
        <span className="text-sm font-bold text-primary">{formatCurrency(amount)}</span>
      ),
    },
    {
      key: 'status',
      header: 'STATUS',
      render: (status: string) => (
        <Badge
          className={`${TRANSACTION_STATUS_COLORS[status as keyof typeof TRANSACTION_STATUS_COLORS]?.bg} ${TRANSACTION_STATUS_COLORS[status as keyof typeof TRANSACTION_STATUS_COLORS]?.text} uppercase`}
        >
          {status}
        </Badge>
      ),
    },
    {
      key: 'date',
      header: 'DATE',
      render: (date: Date) => (
        <span className="text-sm text-slate-600 dark:text-slate-400">
          {formatDate(date)}
        </span>
      ),
    },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Revenue</h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Track and manage your transactions
          </p>
        </div>
        <TableFilters />
      </div>

      {/* Transactions Table */}
      <DataTable data={transactions} columns={transactionColumns} />

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        totalItems={totalItems}
        itemsPerPage={10}
      />
    </div>
  )
}
