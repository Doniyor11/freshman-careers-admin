export interface IInitialState {
  companyDelete: boolean
  companyDeleteId: number | undefined
}

export interface ICompanyDeleteStore extends IInitialState {
  setCompanyDelete: (companyAdd: boolean) => void
  setCompanyDeleteId: (companyDeleteId: number | undefined) => void
}
