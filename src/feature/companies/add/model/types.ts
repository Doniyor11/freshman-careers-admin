export interface IInitialState {
  companyAdd: boolean
}

export interface ICompanyAddStore extends IInitialState {
  setCompanyAdd: (companyAdd: boolean) => void
}
