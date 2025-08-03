import {
	IResponseParam,
	IResponseStatus,
} from "@/feature/responses/list/api/types.ts"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { getResponsesApi, responseStatusApi } from "./index.ts"

export const useGetResponsesQuery = (params?: IResponseParam) => {
	return useQuery({
		queryFn: () => getResponsesApi(params),
		queryKey: [apiKeys.responses, params],
		select: (data) => data,
	})
}

export const useResponseStatusQuery = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: IResponseStatus) => responseStatusApi(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [apiKeys.responses] })
			toast.success("Status changed successfully!")
		},
		onError: (data: any) => {
			toast.error(data?.detail)
		},
	})
}
