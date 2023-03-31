export interface ExpensesByCategory {
  salaries: number
  supplies: number
  services: number
}

export interface Month {
  month: string
  revenue: number
  expenses: number
  operationalExpenses: number
  nonOperationalExpenses: number
}

export interface Day {
  data: string
  expenses: number
  revenue: number
}

export interface GetKpisResponse {
  id: string
  _id: string
  __v: number
  totalProfit: number
  totalRevenue: number
  totalExpenses: number
  expensesByCategory: ExpensesByCategory
  monthlyData: Array<Month>
  dailyData: Array<Day>
}

export interface GetProductsResponse {
  _id: number
  price: number
  expense: number
  transactions: Array<number>
}

export interface GetTransactionsResponse {
  _id: number
  buyer: string
  amount: number
  productIds: Array<number>
}
