export interface IInitialState {
	search: string | undefined
	availableInternships: string | undefined
}

export interface ICompaniesFilterStore extends IInitialState {
	setSearch: (search: string | undefined) => void
	setAvailableInternships: (availableInternships: string | undefined) => void
}
