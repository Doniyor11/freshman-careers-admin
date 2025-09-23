import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

import { apiKeys } from "@/shared/constants/api-keys.ts"

import { deleteInternshipsApi } from "./index.ts"

export const useDeleteInternshipsQuery = (
  onSuccess: () => void,
  id: number | undefined,
) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: () => deleteInternshipsApi(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [apiKeys.internships] })
      toast.success("Internship deleted successfully!")
      onSuccess && onSuccess()
    },
    onError: (data) => {
      // @ts-ignore
      toast.error(data?.detail)
    },
  })
}
