import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { addInternshipApi } from "./index.ts"
import { IInternships } from "./types.ts"

export const useAddInternshipQuery = (onSuccess: () => void) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (data: IInternships) => addInternshipApi(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiKeys.internships] })
      toast.success("Internship added successfully!")
      onSuccess && onSuccess()
    },
    onError: (data: any) => {
      toast.error(data?.detail)
    },
  })
}
