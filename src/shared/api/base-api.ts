import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import Cookies from "js-cookie"
import { toast } from "react-toastify"

import { EnvKeys, TOKEN } from "@/shared/constants/env"
import { routeHistory } from "@/shared/libs/history-router.ts"
import { IResponseData } from "@/shared/types/response-data"

const clientApi = axios.create({
  baseURL: EnvKeys.NEXT_HOST,
})

clientApi.interceptors.request.use(
  <T>(config: InternalAxiosRequestConfig<IResponseData<T>>) => {
    const token = Cookies.get(TOKEN.AUTH_TOKEN)
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`
    }
    return config
  },
)

clientApi.interceptors.response.use(
  <T>(response: AxiosResponse<IResponseData<T>>) => {
    return response
  },
  (err) => {
    if (!err.response) {
      toast.error(err.message)
    } else if (err.response.status === 401) {
      if (routeHistory) {
        routeHistory.push("/main")
      }
      Cookies.remove(TOKEN.AUTH_TOKEN)
    }
    return Promise.reject(err.response.data)
  },
)

export default clientApi
