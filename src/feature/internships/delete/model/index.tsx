import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IInitialState, IInternshipDeleteStore } from "./types.ts"

const initialState: IInitialState = {
	internshipDelete: false,
	internshipDeleteId: undefined,
}

export const useInternshipDeleteStore = create<IInternshipDeleteStore>()(
	devtools((set) => ({
		...initialState,
		setInternshipDelete: (e) => {
			set({ internshipDelete: e })
		},
		setInternshipDeleteId: (e) => {
			set({ internshipDeleteId: e })
		},
	})),
)
