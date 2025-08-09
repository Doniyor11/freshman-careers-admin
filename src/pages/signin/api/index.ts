import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { ISignIn } from "./types.ts"

export const signInApi = async (data: ISignIn) => {
	const formData = new FormData()

	formData.append("username", data?.username)
	formData.append("password", data?.password)

	const response = await clientApi.post(apiKeys.signIn, formData)
	return response.data
}
