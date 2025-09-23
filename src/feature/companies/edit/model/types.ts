export interface IInitialState {
  companyEdit: boolean
  companyId: number | undefined
}

export interface ICompanyEditStore extends IInitialState {
  setCompanyEdit: (companyAdd: boolean) => void
  setCompanyId: (companyId: number | undefined) => void
}
