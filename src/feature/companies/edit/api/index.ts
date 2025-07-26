import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

import { IEditCompany } from "./types.ts"

export const editCompanyApi = async (data: IEditCompany) => {
	const formData = new FormData()

	if (data?.image) {
		formData.append("image", data?.image)
	}

	formData.append("name", data?.name)

	const response = await clientApi.put(`${apiKeys.companies}/${data?.id}`, formData)
	return response.data
}
