import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { deleteCompanyApi } from "./index.ts"

export const useDeleteCompanyQuery = (
	onSuccess: () => void,
	id: number | undefined,
) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: () => deleteCompanyApi(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [apiKeys.companies] })
			toast.success("Company deleted successfully!")
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
