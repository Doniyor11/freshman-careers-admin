import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { addCompanyApi } from "./index.ts"
import { IAddCompany } from "./types.ts"

export const useAddCompanyQuery = (onSuccess: () => void) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: IAddCompany) => addCompanyApi(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [apiKeys.companies] })
			toast.success("Company added successfully!")
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
