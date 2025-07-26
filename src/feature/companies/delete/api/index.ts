import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const deleteCompanyApi = async (id: number | undefined) => {
	const response = await clientApi.delete(`${apiKeys.companies}/${id}`)
	return response.data
}
