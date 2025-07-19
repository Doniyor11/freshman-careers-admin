import { useQuery } from "@tanstack/react-query"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getUserMeApi } from "./index.ts"

export const useGetUserMeQuery = () => {
	return useQuery({
		queryFn: () => getUserMeApi(),
		queryKey: [apiKeys.userMe],
		select: (data) => data,
	})
}
