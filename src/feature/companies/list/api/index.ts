import { IGetCompaniesParam } from "@/feature/companies/list/api/types.ts"

import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getCompaniesApi = async ({
  title,
  internship_count_range,
}: IGetCompaniesParam) => {
  const response = await clientApi.get(apiKeys.companies, {
    params: {
      title,
      internship_count_range,
    },
  })
  return response?.data
}

export const getCompanyApi = async (id?: number) => {
  const response = await clientApi.get(`${apiKeys.companies}/${id}`)
  return response?.data
}
