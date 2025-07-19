import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getInternshipApi, getInternshipsApi } from "./index.ts"

export const useGetInternshipsQuery = () => {
	return useQuery({
		queryFn: () => getInternshipsApi(),
		queryKey: [apiKeys.internships],
		select: (data) => data,
	})
}

export const useGetInternshipQuery = (id?: number) => {
	return useQuery({
		queryFn: () => getInternshipApi(id),
		queryKey: [apiKeys.internships, id],
		select: (data) => data,
		enabled: !!id,
	})
}
