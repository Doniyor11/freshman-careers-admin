import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { editInternshipApi } from "./index.ts"
import { IEditInternships } from "./types.ts"

export const useEditInternshipQuery = (onSuccess: () => void) => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (data: IEditInternships) => editInternshipApi(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [apiKeys.internships] })
			toast.success("Internship added successfully!")
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
