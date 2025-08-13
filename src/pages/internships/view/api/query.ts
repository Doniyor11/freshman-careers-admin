import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getInternshipApi } from "./index.ts"

export const useGetInternshipQuery = (id?: number) => {
	return useQuery({
		queryFn: () => getInternshipApi(id),
		queryKey: [apiKeys.internships, id],
		select: (data) => data,
		enabled: !!id,
	})
}
