export interface IInitialState {
	search: string | undefined
}

export interface IResponseFilterStore extends IInitialState {
	setSearch: (search: string | undefined) => void
}
