import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getCompaniesApi = async () => {
	const response = await clientApi.get(apiKeys.companies)
	return response?.data
}

export const getCompanyApi = async (id?: number) => {
	const response = await clientApi.get(`${apiKeys.companies}/${id}`)
	return response?.data
}
