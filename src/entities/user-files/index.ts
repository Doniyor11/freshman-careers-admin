import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getUserFilesApi = async () => {
	const response = await clientApi.get(apiKeys.userFiles)
	return response?.data
}
