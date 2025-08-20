import { IInternshipParam } from "@/feature/internships/list/api/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getInternshipsApi = async (params?: IInternshipParam) => {
  const response = await clientApi.get(apiKeys.internships, {
    params: {
      title: params?.title,
      start_date_min: params?.start_date_min,
      start_date_max: params?.start_date_max,
      format: params?.format,
      education: params?.education,
      data_order: params?.data_order,
      limit: params?.limit,
      offset: params?.offset,
      company_id: params?.company_id,
    },
  })
  return response?.data
}

export const getInternshipApi = async (id?: number) => {
  const response = await clientApi.get(`${apiKeys.internships}/${id}`)
  return response?.data
}
