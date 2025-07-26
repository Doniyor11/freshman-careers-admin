import { useCompaniesFilterStore } from "@/feature/companies/filter-companies/model"
import { Box, Flex, Input } from "@mantine/core"
import React from "react"

import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { BadgeGroup } from "@/shared/ui/badge-group"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./filter.module.scss"
import { useCompanyAddStore } from "@/feature/companies/add/model"

export const FilterCompanies = () => {
	const setCompanyAdd = useCompanyAddStore((s) => s.setCompanyAdd)

	const [search, availableInternships, setSearch, setAvailableInternships] =
		useCompaniesFilterStore((s) => [
			s.search,
			s.availableInternships,
			s.setSearch,
			s.setAvailableInternships
		])

	return (
		<Box className={s.filterWrapper}>
			<Box className={s.filterSearch}>
				<Input
					value={search}
					leftSection={<Icon4 />}
					className={"input-custom"}
					placeholder={"Search for internships"}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</Box>
			<Flex direction={"column"} gap={"2rem"}>
				<BadgeGroup
					label={"Available internships"}
					options={[
						"up to 10",
						"11-20",
						"21-50",
						"51-100",
						"101-200",
						"200+",
						"No available"
					]}
					value={availableInternships}
					onChange={(e: any) => setAvailableInternships(e)}
				/>
			</Flex>
			<FilledButton fullWidth h={"3rem"} mt={"1.5rem"} onClick={() => setCompanyAdd(true)}>
				Add a company
			</FilledButton>
		</Box>
	)
}
