import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IFileUpload } from "./types.ts"

export const uploadFileApi = async (data: IFileUpload) => {
	const formData = new FormData()

	if (data?.file) {
		formData.append("file", data?.file)
	}

	const response = await clientApi.post(apiKeys.userFiles, formData)
	return response.data
}
