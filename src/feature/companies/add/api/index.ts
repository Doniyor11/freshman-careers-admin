import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IAddCompany } from "./types.ts"

export const addCompanyApi = async (data: IAddCompany) => {
	const formData = new FormData()

	if (data?.image) {
		formData.append("image", data?.image)
	}

	formData.append("name", data?.name)

	const response = await clientApi.post(apiKeys.companies, formData)
	return response.data
}
