import { Box, Container, Grid } from "@mantine/core"
import dayjs from "dayjs"
import React from "react"

import { useGetInternshipsQuery } from "@/entities/internships/query.ts"
import { IGetInternship } from "@/entities/internships/types.ts"

import { Banner, InternshipsCard, TitleHead } from "@/shared/ui"

import s from "./internships.module.scss"

export const Internships = () => {

	const { data } = useGetInternshipsQuery()
	return (
		<Box className={s.internshipsWrapper}>
			<Container size={"1440px"}>
				<TitleHead
					info={"Internships"}
					title={"Available Internships"}
					description={
						"Explore internships that will allow you to be truly successful"
					}
				/>
				<Grid gutter={"3rem"} m={"2.5rem 0 2.5rem"}>
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
							Произошла ошибка при загрузке стажировок. Проверьте подключение к
							сети.
						</div>
					)}
				</Grid>
				<Banner />
			</Container>
		</Box>
	)
}
