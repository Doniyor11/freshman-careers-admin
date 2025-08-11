import { FilterInternship } from "@/feature"
import { useInternshipDeleteStore } from "@/feature/internships/delete/model"
import { InternshipDelete } from "@/feature/internships/delete/ui"
import { useApplicationFilterStore } from "@/feature/internships/filter-internship/model"
import { Container, Flex, Grid, Menu, Text } from "@mantine/core"
import { useDebouncedValue, useMediaQuery } from "@mantine/hooks"
import dayjs from "dayjs"
import { useRouter } from "next/router"
import React from "react"

import Icon2 from "@/shared/assets/images/icon/chevron_backward3.svg"
import Icon3 from "@/shared/assets/images/icon/chevron_backward-small.svg"
import { EnvKeys } from "@/shared/constants/env.ts"
import { InternshipsCard } from "@/shared/ui"

import { useGetInternshipsQuery } from "../api/query.ts"
import { IGetInternship } from "../api/types.ts"
import s from "./internship-profile.module.scss"

export const InternshipList = () => {
	const router = useRouter()
	const matches = useMediaQuery("(max-width: 1024px)")
	const matchesMobile = useMediaQuery("(max-width: 576px)")
	const [format, education, search, date] = useApplicationFilterStore((s) => [
		s.format,
		s.education,
		s.search,
		s.date,
	])
	const [debouncedTitle] = useDebouncedValue(search, 200)

	const [setInternshipDelete, setInternshipDeleteId] = useInternshipDeleteStore(
		(s) => [s.setInternshipDelete, s.setInternshipDeleteId],
	)

	const { data } = useGetInternshipsQuery({
		format,
		education,
		title: debouncedTitle ? debouncedTitle : undefined,
		start_date_min: date[0] ? dayjs(date[0]).format("YYYY-MM-DD") : undefined,
		start_date_max: date[1] ? dayjs(date[1]).format("YYYY-MM-DD") : undefined,
	})

	const spanValue = matchesMobile ? 12 : matches ? 6 : 4

	return (
		<>
			<Container
				size={"1440px"}
				className={s.profileContainer}
				p={"3rem 1rem 7.25rem"}
				bg={"#FAFBFF"}
			>
				<Grid>
					<Grid.Col span={matches ? 12 : 3}>
						<FilterInternship />
					</Grid.Col>
					<Grid.Col span={matches ? 12 : 9}>
						<Flex justify={"space-between"} align={"center"}>
							<Text component={"h3"} className={s.myApplicationsTitle}>
								My Applications
							</Text>
							<Menu
								trigger={"hover"}
								position={"bottom-end"}
								classNames={{
									dropdown: s.profileDropdown,
								}}
								width={"16rem"}
							>
								<Menu.Target>
									<Text className={s.myApplicationsSelect}>
										Most Recent <Icon2 />
									</Text>
								</Menu.Target>

								<Menu.Dropdown>
									<Flex
										className={s.profileItem}
										justify={"space-between"}
										align={"center"}
									>
										<Text component={"span"} className={s.profileItemText}>
											Most Recent
										</Text>
										<Icon3 />
									</Flex>
									<Flex
										className={s.profileItem}
										justify={"space-between"}
										align={"center"}
									>
										<Text component={"span"} className={s.profileItemText}>
											The oldest
										</Text>
										<Icon3 />
									</Flex>
								</Menu.Dropdown>
							</Menu>
						</Flex>
						{/* ------------ Card -------------	*/}
						<Grid mt={"1.5rem"} gutter={"1.5rem"}>
							{data?.map((i: IGetInternship, index: number) => (
								<Grid.Col span={spanValue} key={index}>
									<InternshipsCard
										companyName={i?.company_title}
										imageSrc={`${EnvKeys.NEXT_HOST}/${i?.picture}`}
										imageAlt={i?.title}
										iconSrc={`${EnvKeys.NEXT_HOST}/${i?.company_image}`}
										iconAlt={i?.company_title}
										day={
											i?.date_posted &&
											dayjs(i.date_posted).isSame(dayjs(), "day")
												? "today"
												: dayjs(i.date_posted).format("YYYY-MM-DD")
										}
										title={i?.title}
										description={i?.description}
										datesLabel={"Internship Dates:"}
										dates={`${dayjs(i?.internship_start_date).format(
											"DD.MM.YYYY",
										)} - ${dayjs(i?.internship_end_date).format("DD.MM.YYYY")}`}
										onResponses={() => router.push("/responses")}
										onEdit={() => router.push(`/internships/edit/${i?.id}`)}
										onDelete={() => {
											setInternshipDelete(true)
											setInternshipDeleteId(i?.id)
										}}
									/>
								</Grid.Col>
							))}
						</Grid>
						{/* ------------ Card -------------	*/}
					</Grid.Col>
				</Grid>
			</Container>
			<InternshipDelete />
		</>
	)
}
