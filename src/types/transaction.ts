export type TransactionStatus = 'success' | 'pending' | 'failed'

export interface Transaction {
  id: string
  transactionId: string
  customerId: string
  customerName: string
  customerAvatar?: string
  plan: string
  amount: number
  status: TransactionStatus
  date: Date
}
