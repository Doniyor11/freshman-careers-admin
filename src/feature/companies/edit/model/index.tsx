import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { ICompanyEditStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
  companyEdit: false,
  companyId: undefined,
}

export const useCompanyEditStore = create<ICompanyEditStore>()(
  devtools((set) => ({
    ...initialState,
    setCompanyEdit: (e) => {
      set({ companyEdit: e })
    },
    setCompanyId: (e) => {
      set({ companyId: e })
    },
  })),
)
