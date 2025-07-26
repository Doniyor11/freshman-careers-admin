import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { editCompanyApi } from "./index.ts"
import { IEditCompany } from "./types.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const useEditCompanyQuery = (onSuccess: () => void) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: IEditCompany) => editCompanyApi(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [apiKeys.companies] })
			toast.success("Company edited successfully!")
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		}
	})
}
