import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IApplicationFilterStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
	format: undefined,
	education: undefined,
	salary: undefined,
	search: undefined,
	date: null,
}

export const useApplicationFilterStore = create<IApplicationFilterStore>()(
	devtools((set) => ({
		...initialState,
		setFormat: (e) => {
			set({ format: e })
		},
		setEducation: (e) => {
			set({ education: e })
		},
		setSalary: (e) => {
			set({ salary: e })
		},
		setSearch: (e) => {
			set({ search: e })
		},
		setDate: (e) => {
			set({ date: e })
		},
	})),
)
