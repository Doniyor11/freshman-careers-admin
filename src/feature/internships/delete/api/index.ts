import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const deleteInternshipsApi = async (id: number | undefined) => {
	const response = await clientApi.delete(`${apiKeys.internships}/${id}`)
	return response.data
}
