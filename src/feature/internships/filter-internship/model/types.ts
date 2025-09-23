export interface IInitialState {
  format: string | undefined
  education: string | undefined
  salary: string | undefined
  search: string | undefined
  data_order: string | undefined
  date: [Date | null, Date | null]
}

export interface IApplicationFilterStore extends IInitialState {
  setFormat: (format: string | undefined) => void
  setEducation: (education: string | undefined) => void
  setSalary: (salary: string | undefined) => void
  setSearch: (search: string | undefined) => void
  setDataOrder: (data_order: string | undefined) => void
  setDate: (date: [Date | null, Date | null]) => void
}
