import { create } from "zustand"
import { devtools } from "zustand/middleware"

import { IAuthorizationStore, IInitialState } from "./types.ts"

const initialState: IInitialState = {
	authorization: false,
	authSuccess: null,
	modalType: "login",
}

export const useAuthorizationStore = create<IAuthorizationStore>()(
	devtools((set) => ({
		...initialState,
		setAuthorization: (e) => {
			set({ authorization: e })
		},
		setAuthSuccess: (e) => {
			set({ authSuccess: e })
		},
		setModalType: (e) => {
			set({ modalType: e })
		},
	})),
)
