export interface IGetInternship {
	picture: string
	company_id: number
	date_posted: string
	title: string
	description: string
	requirements: string
	conditions: string
	internship_start_date: string
	internship_end_date: string
	format: string
	education: string
	salary: string
	payment_status: string
	payment_amount: number
	payment_regularity: string
	schedule: string
	working_hours: string
	id: number
	company: ICompany
}

export interface ICompany {
	image: string
	title: string
	description: string
	id: number
}

export interface IMyInternshipParam {
	name?: string
	format?: string
	education?: string
	salary?: string
	date?: Date | null
}
