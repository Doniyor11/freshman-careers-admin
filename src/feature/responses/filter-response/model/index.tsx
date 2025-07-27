import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IInitialState, IResponseFilterStore } from "./types.ts"

const initialState: IInitialState = {
	search: undefined,
}

export const useResponseFilterStore = create<IResponseFilterStore>()(
	devtools((set) => ({
		...initialState,
		setSearch: (e) => {
			set({ search: e })
		},
	})),
)
