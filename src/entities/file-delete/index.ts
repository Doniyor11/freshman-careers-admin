import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const deleteFileApi = async (id: number | undefined) => {
	const response = await clientApi.delete(`${apiKeys.userFiles}/${id}`)
	return response.data
}
