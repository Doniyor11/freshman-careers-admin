import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getUserFilesApi } from "./index.ts"

export const useGetUserFilesQuery = () => {
	return useQuery({
		queryFn: getUserFilesApi,
		queryKey: [apiKeys.userFiles],
		select: (data) => data,
	})
}
