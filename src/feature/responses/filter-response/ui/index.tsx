import { useGetCompaniesQuery } from "@/feature/companies/list/api/query.ts"
import { IGetCompanies } from "@/feature/companies/list/api/types.ts"
import { useResponseFilterStore } from "@/feature/responses/filter-response/model"
import { Box } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import React from "react"

import IconBriefcase from "@/shared/assets/images/icon/briefcase.svg"
import IconGlobal from "@/shared/assets/images/icon/global.svg"
import { Select } from "@/shared/ui"
import { BadgeGroup } from "@/shared/ui/badge-group"

import s from "./filter.module.scss"

export const FilterResponse = () => {
  const [companyId, status, date, setCompanyId, setStatus, setDate] =
    useResponseFilterStore((s) => [
      s.companyId,
      s.status,
      s.date,
      s.setCompanyId,
      s.setStatus,
      s.setDate,
    ])

  const { data: CompanyData } = useGetCompaniesQuery({})

  return (
    <Box className={s.filterWrapper}>
      <Select
        leftSection={<IconGlobal />}
        label={"Company"}
        placeholder={"Enter company"}
        value={companyId}
        onChange={(e: any) => setCompanyId(e)}
        data={
          CompanyData?.map((i: IGetCompanies) => ({
            value: i?.id ? String(i.id) : "",
            label: i?.title || "Untitled",
          })) || []
        }
      />
      <DatePickerInput
        type="range"
        valueFormat={"YYYY-MM-DD"}
        label={"Date of application"}
        placeholder="Select dates"
        className={s.rangeInput}
        classNames={{
          label: s.datePickerLabel,
          input: s.datePickerInput,
          placeholder: s.datePickerPlaceholder,
        }}
        leftSection={<IconBriefcase />}
        value={date}
        onChange={setDate}
        clearable
      />
      <BadgeGroup
        label={"Status"}
        options={["accepted", "rejected", "Pending"]}
        value={status}
        onChange={(e: any) => setStatus(e)}
      />
    </Box>
  )
}
