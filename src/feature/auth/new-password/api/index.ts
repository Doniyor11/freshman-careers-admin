import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { INewPassword } from "./types.ts"

export const newPasswordApi = async (data: INewPassword) => {
	const response = await clientApi.post(apiKeys.newPassword, data)
	return response.data
}
