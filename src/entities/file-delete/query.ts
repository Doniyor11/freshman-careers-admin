import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { deleteFileApi } from "@/entities/file-delete/index.ts"

import { apiKeys } from "@/shared/constants/api-keys.ts"

export const useDeleteFilesQuery = () => {
	const queryClient = useQueryClient()
	return useMutation({
		mutationFn: (id: number | undefined) => deleteFileApi(id),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: [apiKeys.userFiles] })
			toast.success("File deleted.")
		},
		onError: (error: any) => {
			toast.error(error.message)
		},
	})
}
