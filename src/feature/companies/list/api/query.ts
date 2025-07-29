import { IGetCompaniesParam } from "@/feature/companies/list/api/types.ts"
import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getCompaniesApi, getCompanyApi } from "./index.ts"

export const useGetCompaniesQuery = ({
	title,
	internship_count_range,
}: IGetCompaniesParam) => {
	return useQuery({
		queryFn: () => getCompaniesApi({ title, internship_count_range }),
		queryKey: [apiKeys.companies, title, internship_count_range],
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
