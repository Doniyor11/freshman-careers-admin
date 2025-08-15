import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getResponseViewApi } from "./index.ts"

export const useGetResponseViewQuery = (id?: number) => {
	return useQuery({
		queryFn: () => getResponseViewApi(id),
		queryKey: [apiKeys.responses, id],
		select: (data) => data,
		enabled: !!id,
	})
}
