import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { ISignUp } from "./types.ts"

export const signUpApi = async (data: ISignUp) => {
	const response = await clientApi.post(apiKeys.signUp, data)
	return response.data
}
