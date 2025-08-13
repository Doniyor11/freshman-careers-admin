import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getInternshipApi = async (id?: number) => {
	const response = await clientApi.get(`${apiKeys.internships}/${id}`)
	return response?.data
}
