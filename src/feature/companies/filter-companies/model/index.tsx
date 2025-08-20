import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { ICompaniesFilterStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
  search: undefined,
  availableInternships: undefined,
}

export const useCompaniesFilterStore = create<ICompaniesFilterStore>()(
  devtools((set) => ({
    ...initialState,
    setSearch: (e) => {
      set({ search: e })
    },
    setAvailableInternships: (e) => {
      set({ availableInternships: e })
    },
  })),
)
