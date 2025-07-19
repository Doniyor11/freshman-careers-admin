import { useQuery } from "@tanstack/react-query"

import { IMyInternshipParam } from "@/entities/my-applications/types.ts"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getMyApplicationsApi } from "./index.ts"

export const useGetMyApplicationsQuery = (params: IMyInternshipParam) => {
	return useQuery({
		queryFn: () => getMyApplicationsApi(params),
		queryKey: [apiKeys.myApplications, params],
		select: (data) => data,
	})
}
