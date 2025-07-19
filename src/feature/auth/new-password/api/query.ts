import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

import { TOKEN } from "@/shared/constants/env.ts"

import { newPasswordApi } from "./index.ts"
import { INewPassword } from "./types.ts"

export const useNewPasswordQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: INewPassword) => newPasswordApi(data),
		onSuccess: (data) => {
			const token = data.access_token
			if (token) {
				Cookies.set(TOKEN.AUTH_TOKEN, token)
				onSuccess && onSuccess()
			}
		},
		onError: (err) => {
			toast.error(err.message)
		},
	})
}
