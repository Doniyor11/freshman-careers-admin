export interface IInitialState {
	internshipDelete: boolean
	internshipDeleteId: number | undefined
}

export interface IInternshipDeleteStore extends IInitialState {
	setInternshipDelete: (internshipDelete: boolean) => void
	setInternshipDeleteId: (internshipDeleteId: number | undefined) => void
}
