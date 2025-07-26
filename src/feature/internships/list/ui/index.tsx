import { FilterInternship } from "@/feature"
import { Container, Flex, Grid, Menu, Text } from "@mantine/core"
import dayjs from "dayjs"
import React from "react"

import Icon2 from "@/shared/assets/images/icon/chevron_backward3.svg"
import Icon3 from "@/shared/assets/images/icon/chevron_backward-small.svg"
import { InternshipsCard } from "@/shared/ui"

import { useGetInternshipsQuery } from "../api/query.ts"
import { IGetInternship } from "../api/types.ts"
import s from "./internship-profile.module.scss"

export const InternshipList = () => {
	const { data } = useGetInternshipsQuery()
	return (
		<Container
			size={"1440px"}
			className={s.profileContainer}
			p={"3rem 1rem 7.25rem"}
			bg={"#FAFBFF"}
		>
			<Grid>
				<Grid.Col span={3}>
					<FilterInternship />
				</Grid.Col>
				<Grid.Col span={9}>
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
						{data ? (
							data.map((i: IGetInternship, index: number) => (
								<Grid.Col span={4} key={index}>
									<InternshipsCard
										companyName={i?.company?.title}
										imageSrc={i?.picture as any}
										imageAlt={i?.title}
										iconSrc={i?.company?.image as any}
										iconAlt={i?.company?.title}
										day={
											i?.date_posted &&
											dayjs(i.date_posted).isSame(dayjs(), "day")
												? "today"
												: " "
										}
										title={i?.title}
										description={i?.description}
										datesLabel={"Internship Dates:"}
										dates={`${dayjs(i?.internship_start_date).format(
											"DD.MM.YYYY",
										)} - ${dayjs(i?.internship_end_date).format("DD.MM.YYYY")}`}
									/>
								</Grid.Col>
							))
						) : (
							<div className={s.error}>
								Произошла ошибка при загрузке стажировок. Проверьте подключение
								к сети.
							</div>
						)}
					</Grid>
					{/* ------------ Card -------------	*/}
				</Grid.Col>
			</Grid>
		</Container>
	)
}
