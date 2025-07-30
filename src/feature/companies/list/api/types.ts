export interface IGetCompanies {
	id: number
	image: string
	name: string
	internship_count: number
}

export interface IGetCompaniesParam {
	title?: string
	internship_count_range?: string | undefined
}
