import { useMutation } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { uploadFileApi } from "./index.ts"
import { IFileUpload } from "./types.ts"

export const useUploadFileQuery = (onSuccess: () => void) => {
	return useMutation({
		mutationFn: (data: IFileUpload) => uploadFileApi(data),
		onSuccess: (data) => {
			// @ts-ignore
			toast.success(data?.detail)
			onSuccess && onSuccess()
		},
		onError: (data) => {
			// @ts-ignore
			toast.error(data?.detail)
		},
	})
}
