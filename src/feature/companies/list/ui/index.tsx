import {
	CompanyAdd,
	CompanyDelete,
	CompanyEdit,
	FilterCompanies,
} from "@/feature/companies"
import { useCompanyDeleteStore } from "@/feature/companies/delete/model"
import { useCompanyEditStore } from "@/feature/companies/edit/model"
import { useCompaniesFilterStore } from "@/feature/companies/filter-companies/model"
import { useGetCompaniesQuery } from "@/feature/companies/list/api/query.ts"
import { IGetCompanies } from "@/feature/companies/list/api/types.ts"
import { ActionIcon, Box, Container, Flex, Grid, Text } from "@mantine/core"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import Image2 from "@/shared/assets/images/icon/edit-orange.svg"
import Image3 from "@/shared/assets/images/icon/trash-orange.svg"
import { EnvKeys } from "@/shared/constants/env.ts"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./companies.module.scss"

export const CompaniesList = () => {
	const router = useRouter()
	const [setCompanyEdit, setCompanyId] = useCompanyEditStore((s) => [
		s.setCompanyEdit,
		s.setCompanyId,
	])
	const [setCompanyDelete, setCompanyDeleteId] = useCompanyDeleteStore((s) => [
		s.setCompanyDelete,
		s.setCompanyDeleteId,
	])
	const [search, availableInternships] = useCompaniesFilterStore((s) => [
		s.search,
		s.availableInternships,
	])

	const handleAvailableInternships = () => {
		if (availableInternships === "up to 10") {
			return "0-10"
		} else if (availableInternships === "No available") {
			return "no"
		} else {
			return availableInternships
		}
	}

	const { data } = useGetCompaniesQuery({
		title: search as any,
		internship_count_range: handleAvailableInternships(),
	})

	return (
		<>
			<Container size={"1440px"} p={"3rem 1rem 7.25rem"} bg={"#FAFBFF"}>
				<Grid>
					<Grid.Col span={3}>
						<FilterCompanies />
					</Grid.Col>
					<Grid.Col span={9}>
						<Flex justify={"space-between"} align={"center"}>
							<Text component={"h3"} className={s.companiesTitle}>
								Companies
							</Text>
						</Flex>
						{/* ------------ Card -------------	*/}
						<Grid mt={"1.5rem"} gutter={"1.5rem"}>
							{data?.map((i: IGetCompanies) => (
								<Grid.Col span={4}>
									<Box className={s.companiesCardWrapper}>
										<Flex gap={"1rem"}>
											<Box className={s.companiesCardIcon}>
												{i?.image && (
													<Image
														src={`${EnvKeys.NEXT_HOST}/${i?.image}`}
														alt="Company Logo"
														width={48}
														height={48}
														unoptimized
													/>
												)}
											</Box>
											<Flex direction={"column"} gap={"0.5rem"}>
												<Text component={"h3"} className={s.companiesCardTitle}>
													{i?.name}
												</Text>
												{!!i?.internship_count && (
													<Text
														component={"p"}
														className={s.companiesCardDescription}
													>
														{i?.internship_count}
														{i?.internship_count > 1
															? " internships"
															: " internship"}
													</Text>
												)}
											</Flex>
										</Flex>
										<Flex
											mt={"1.5rem"}
											justify={"space-between"}
											gap={"0.5rem"}
										>
											<FilledButton
												flex={"auto"}
												h={"2.75rem"}
												onClick={() => router.push(`/internships`)}
											>
												Internships
											</FilledButton>
											<ActionIcon
												className={s.actionIcon}
												onClick={() => {
													setCompanyEdit(true)
													setCompanyId(i?.id)
												}}
											>
												<Image2 />
											</ActionIcon>
											<ActionIcon
												className={s.actionIcon}
												onClick={() => {
													setCompanyDelete(true)
													setCompanyDeleteId(i?.id)
												}}
											>
												<Image3 />
											</ActionIcon>
										</Flex>
									</Box>
								</Grid.Col>
							))}
						</Grid>
						{/* ------------ Card -------------	*/}
					</Grid.Col>
				</Grid>
			</Container>
			<CompanyAdd />
			<CompanyEdit />
			<CompanyDelete />
		</>
	)
}
