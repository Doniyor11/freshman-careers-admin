import { useApplicationFilterStore } from "@/feature/filter/model"
import { Badge, Box, Flex, Input, Text } from "@mantine/core"
import cx from "clsx"
import React from "react"

import Icon5 from "@/shared/assets/images/icon/briefcase.svg"
import Icon4 from "@/shared/assets/images/icon/search-normal.svg"
import { InputDate } from "@/shared/ui/date-input"

import s from "./filter.module.scss"
import { FilledButton } from "@/shared/ui/buttons"

export const Filter = () => {
	const [
		format,
		education,
		salary,
		search,
		date,
		setFormat,
		setEducation,
		setSalary,
		setSearch,
		setDate,
	] = useApplicationFilterStore((s) => [
		s.format,
		s.education,
		s.salary,
		s.search,
		s.date,
		s.setFormat,
		s.setEducation,
		s.setSalary,
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
				{/*<Select*/}
				{/*	label={"Internship direction"}*/}
				{/*	placeholder={"Internship direction"}*/}
				{/*	leftSection={<Icon5 />}*/}
				{/*/>*/}
				<InputDate
					label={"Internship Date"}
					placeholder={"Select dates"}
					leftSection={<Icon5 />}
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
				<BadgeGroup
					label={"Salary, $"}
					options={[
						"up to 100",
						"101-200",
						"201-500",
						"501-1000",
						"1001-2000",
						"2000+",
						"Not Specified",
					]}
					value={salary}
					onChange={(e: any) => setSalary(e)}
				/>
			</Flex>
			<FilledButton fullWidth h={"3rem"} mt={"1.5rem"}>
				Add interships
			</FilledButton>
		</Box>
	)
}

const BadgeGroup: React.FC<{
	options: string[]
	value: string | undefined
	onChange: (option: string | undefined) => void
	label: string
}> = ({ options, value, onChange, label }) => (
	<Flex gap={"0.5rem"} direction={"column"}>
		<Text component={"p"} className={s.filterLabel}>
			{label}
		</Text>
		<Flex gap={"0.38rem"} wrap={"wrap"}>
			{options.map((option, idx) => (
				<Badge
					key={idx}
					color="#848F98"
					bg={value === option ? "#FF6A00" : "#E2EAFF"}
					size={"xl"}
					className={cx(s.filterBadge, {
						[s.filterBadgeActive]: value === option,
					})}
					onClick={() => onChange(option)}
				>
					{option}
				</Badge>
			))}
		</Flex>
	</Flex>
)
