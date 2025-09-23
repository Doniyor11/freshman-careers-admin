export interface IInternships {
  company_id: string
  title: string
  internship_start_date?: any
  internship_end_date?: any
  payment_status: string
  payment_amount?: number
  payment_regularity?: string
  education: string
  format: string
  schedule: string
  working_hours: string
  salary?: number
  picture?: File | null
  description: string
  requirements: string
  conditions: string
}
