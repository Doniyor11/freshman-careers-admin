import { useApplicationFilterStore } from "@/feature/internships/filter-internship/model"
import { Box, Flex, Input } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { useRouter } from "next/router"
import React from "react"

import IconBriefcase from "@/shared/assets/images/icon/briefcase.svg"
import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { BadgeGroup } from "@/shared/ui/badge-group"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./filter.module.scss"

export const FilterInternship = () => {
	const router = useRouter()
	const [
		format,
		education,
		search,
		date,
		setFormat,
		setEducation,
		setSearch,
		setDate,
	] = useApplicationFilterStore((s) => [
		s.format,
		s.education,
		s.search,
		s.date,
		s.setFormat,
		s.setEducation,
		s.setSearch,
		s.setDate,
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
					label={"Format"}
					options={["Remote", "Office", "Hybrid"]}
					value={format}
					onChange={(e: any) => setFormat(e)}
				/>
				<BadgeGroup
					label={"Education"}
					options={["Graduate", "3rd year", "1-2 courses", "Absent"]}
					value={education}
					onChange={(e: any) => setEducation(e)}
				/>
				{/*<BadgeGroup*/}
				{/*	label={"Salary, $"}*/}
				{/*	options={[*/}
				{/*		"up to 100",*/}
				{/*		"101-200",*/}
				{/*		"201-500",*/}
				{/*		"501-1000",*/}
				{/*		"1001-2000",*/}
				{/*		"2000+",*/}
				{/*		"Not Specified",*/}
				{/*	]}*/}
				{/*	value={salary}*/}
				{/*	onChange={(e: any) => setSalary(e)}*/}
				{/*/>*/}
			</Flex>
			<FilledButton
				fullWidth
				h={"3rem"}
				mt={"1.5rem"}
				onClick={() => router.push("/internships/add")}
			>
				Add interships
			</FilledButton>
		</Box>
	)
}
