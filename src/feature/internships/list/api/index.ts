import { IInternshipParam } from "@/feature/internships/list/api/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getInternshipsApi = async (params?: IInternshipParam) => {
	const response = await clientApi.get(apiKeys.internships, {
		params: {
			name: params?.name,
			format: params?.format,
			education: params?.education,
			salary: params?.salary,
			date: params?.date,
		},
	})
	return response?.data
}

export const getInternshipApi = async (id?: number) => {
	const response = await clientApi.get(`${apiKeys.internships}/${id}`)
	return response?.data
}
