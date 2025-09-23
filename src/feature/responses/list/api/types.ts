export interface IGetResponse {
  applicant_name: string
  applicant_email: string
  internship_id: number
  application_date: string
  status: string
  id: number
  hashed_id: string
  user_id: number
  company: ICompany
  internship: IInternship
  file_path: any
}

export interface ICompany {
  image: string
  title: string
  description: string
  id: number
}

export interface IInternship {
  picture: any
  date_posted: string
  title: string
  description: string
  requirements: string
  conditions: string
  internship_start_date: string
  internship_end_date: string
  format: string
  education: string
  payment_status: string
  payment_amount: any
  payment_regularity: any
  schedule: string
  working_hours: string
  company_id: number
  company_title: any
  company_image: any
  company_description: any
}

export interface IResponseStatus {
  status?: string
  id?: number | undefined
}

export interface IResponseParam {
  company_id?: number
  status?: string
  data_order?: string
  date_from?: string
  date_to?: string
}
