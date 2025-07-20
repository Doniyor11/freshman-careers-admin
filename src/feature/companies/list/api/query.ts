import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getCompaniesApi, getCompanyApi } from "./index.ts"

export const useGetCompaniesQuery = () => {
	return useQuery({
		queryFn: () => getCompaniesApi(),
		queryKey: [apiKeys.companies],
		select: (data) => data,
	})
}

export const useGetCompanyQuery = (id?: number) => {
	return useQuery({
		queryFn: () => getCompanyApi(id),
		queryKey: [apiKeys.companies, id],
		select: (data) => data,
		enabled: !!id,
	})
}
