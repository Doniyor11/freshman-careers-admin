import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getUserMeApi = async () => {
	const response = await clientApi.get(apiKeys.userMe)
	return response?.data
}
