import { useResponseFilterStore } from "@/feature/responses/filter-response/model"
import { Box, Input } from "@mantine/core"
import React from "react"

import Icon4 from "@/shared/assets/images/icon/search-normal.svg"

import s from "./filter.module.scss"

export const FilterResponse = () => {
	const [search, setSearch] = useResponseFilterStore((s) => [
		s.search,
		s.setSearch,
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
		</Box>
	)
}
