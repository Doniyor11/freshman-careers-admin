import { useGetCompaniesQuery } from "@/feature/companies/list/api/query.ts"
import { IGetCompanies } from "@/feature/companies/list/api/types.ts"
import { useResponseFilterStore } from "@/feature/responses/filter-response/model"
import { Box, Flex } from "@mantine/core"
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
			<Flex direction={"column"} gap={"2rem"}>
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
					placeholder="Internship Date"
					className={s.rangeInput}
					classNames={{
						input: s.datePickerInput,
						placeholder: s.datePickerPlaceholder,
					}}
					leftSection={<IconBriefcase />}
					value={date}
					onChange={setDate}
				/>
				<BadgeGroup
					label={"Status"}
					options={["accepted", "rejected", "Pending"]}
					value={status}
					onChange={(e: any) => setStatus(e)}
				/>
			</Flex>
		</Box>
	)
}
