import { useDeleteCompanyQuery } from "@/feature/companies/delete/api/query.ts"
import { useCompanyDeleteStore } from "@/feature/companies/delete/model"
import React from "react"

import { DeleteModal } from "@/entities/delete-modal"

export const CompanyDelete = () => {
  const [companyDelete, companyDeleteId, setCompanyDelete, setCompanyDeleteId] =
    useCompanyDeleteStore((s) => [
      s.companyDelete,
      s.companyDeleteId,
      s.setCompanyDelete,
      s.setCompanyDeleteId,
    ])
  const onClose = () => {
    setCompanyDelete(false)
    setCompanyDeleteId(undefined)
  }
  const { mutate } = useDeleteCompanyQuery(onClose, companyDeleteId)
  return (
    <>
      <DeleteModal
        name={"company"}
        opened={companyDelete}
        onClose={onClose}
        onCancel={onClose}
        onDelete={() => mutate(companyDeleteId as any)}
      />
    </>
  )
}
