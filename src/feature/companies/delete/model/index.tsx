import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { ICompanyDeleteStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
	companyDelete: false,
	companyDeleteId: undefined
}

export const useCompanyDeleteStore = create<ICompanyDeleteStore>()(
	devtools((set) => ({
		...initialState,
		setCompanyDelete: (e) => {
			set({ companyDelete: e })
		},
		setCompanyDeleteId: (e) => {
			set({ companyDeleteId: e })
		}
	}))
)
