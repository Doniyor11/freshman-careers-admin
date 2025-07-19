import { useMutation } from "@tanstack/react-query"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

import { TOKEN } from "@/shared/constants/env.ts"

import { signInApi } from "./index.ts"
import { ISignIn } from "./types.ts"

export const useSignInQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: ISignIn) => signInApi(data),
		onSuccess: (data) => {
			const token = data.access_token
			if (token) {
				Cookies.set(TOKEN.AUTH_TOKEN, token)
				toast.success("Authorization successful")
				onSuccess && onSuccess()
			}
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
