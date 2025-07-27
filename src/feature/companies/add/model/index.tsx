import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { ICompanyAddStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
	companyAdd: false,
}

export const useCompanyAddStore = create<ICompanyAddStore>()(
	devtools((set) => ({
		...initialState,
		setCompanyAdd: (e) => {
			set({ companyAdd: e })
		},
	})),
)
