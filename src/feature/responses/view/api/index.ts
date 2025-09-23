import clientApi from "@/shared/api/base-api.ts"
import { apiKeys } from "@/shared/constants/api-keys.ts"

export const getResponseViewApi = async (id?: number) => {
  const response = await clientApi.get(`${apiKeys.responses}/${id}`)
  return response?.data
}
