import {
	IResponseParam,
	IResponseStatus,
} from "@/feature/responses/list/api/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getResponsesApi = async (params?: IResponseParam) => {
	const response = await clientApi.get(apiKeys.responses, {
		params: {
			status: params?.status,
			company_id: params?.company_id,
			data_order: params?.data_order,
			date_to: params?.date_to,
			date_from: params?.date_from,
		},
	})
	return response?.data
}

export const responseStatusApi = async (data: IResponseStatus) => {
	const resData = {
		status: data?.status,
	}
	const response = await clientApi.put(
		`${apiKeys.responses}/${data?.id}/status`,
		resData,
	)
	return response.data
}
