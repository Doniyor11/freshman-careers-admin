export interface IInitialState {
  companyId: string | undefined
  status: string | undefined
  data_order: string | undefined
  date: [Date | null, Date | null]
}

export interface IResponseFilterStore extends IInitialState {
  setCompanyId: (companyId: string) => void
  setStatus: (status: string) => void
  setDataOrder: (data_order: string | undefined) => void
  setDate: (date: [Date | null, Date | null]) => void
}
