export interface IInitialState {
	companyId: string | undefined
	status: string | undefined
	date: [Date | null, Date | null]
}

export interface IResponseFilterStore extends IInitialState {
	setCompanyId: (companyId: string) => void
	setStatus: (status: string) => void
	setDate: (date: [Date | null, Date | null]) => void
}
