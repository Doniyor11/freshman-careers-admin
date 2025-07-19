import { IMyInternshipParam } from "@/entities/my-applications/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getMyApplicationsApi = async (params: IMyInternshipParam) => {
	const response = await clientApi.get(apiKeys.myApplications, {
		params: {
			name: params.name,
			format: params.format,
			education: params.education,
			salary: params.salary,
			date: params.date,
		},
	})
	return response?.data
}
