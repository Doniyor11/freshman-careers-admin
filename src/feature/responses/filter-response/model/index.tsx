import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IInitialState, IResponseFilterStore } from "./types.ts"

const initialState: IInitialState = {
	companyId: undefined,
	status: undefined,
	date: [null, null],
}

export const useResponseFilterStore = create<IResponseFilterStore>()(
	devtools((set) => ({
		...initialState,
		setCompanyId: (e) => {
			set({ companyId: e })
		},
		setStatus: (e) => {
			set({ status: e })
		},
		setDate: (e) => {
			set({ date: e })
		},
	})),
)
