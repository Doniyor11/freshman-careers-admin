import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

import { TOKEN } from "@/shared/constants/env.ts"

import { signUpApi } from "./index.ts"
import { ISignUp } from "./types.ts"

export const useSignUpQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: ISignUp) => signUpApi(data),
		onSuccess: (data) => {
			const token = data.signup_token
			if (token) {
				Cookies.set(TOKEN.SIGNUP_TOKEN, token)
				onSuccess && onSuccess()
			}
		},
		onError: (err) => {
			toast.error(err.message)
		},
	})
}
