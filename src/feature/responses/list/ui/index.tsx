import { FilterResponse } from "@/feature/responses/filter-response/ui"
import { Box, Container, Flex, Grid, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import ImageUser from "@/shared/assets/images/image.png"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./my-profile.module.scss"

export const ResponsesList = () => {
	return (
		<Container size={"1440px"} className={s.myProfileWrapper}>
			<Grid gutter={"1.5rem"}>
				<Grid.Col span={3}>
					<Flex direction={"column"} gap={"1.5rem"}>
						<FilterResponse />
					</Flex>
				</Grid.Col>
				<Grid.Col span={9}>
					{/*	 -----------  Grid start ------------ */}
					<Grid>
						<Grid.Col span={4}>
							<Flex mb={"2.5rem"}>
								<Text component={"h1"} className={s.title}>
									Responses
								</Text>
							</Flex>
							<Card />
						</Grid.Col>
					</Grid>
					{/*	 -----------  Grid end ------------ */}
				</Grid.Col>
			</Grid>
		</Container>
	)
}

const Card = () => {
	return (
		<Box className={s.internshipsCardWrapper}>
			<Flex
				justify={"space-between"}
				align={"flex-start"}
				p={"1.5rem"}
				className={s.internshipsCardHead}
			>
				<Flex direction={"column"}>
					<Text component={"h3"} className={s.internshipsCardTitle}>
						Response #1
					</Text>
					<Text component={"h3"} className={s.status} c={"#004B84"}>
						Pending
					</Text>
				</Flex>
				<Box className={s.internshipsCardDay}>Today</Box>
			</Flex>
			<Box className={s.internshipsCardContent}>
				<Flex justify={"space-between"} align={"center"}>
					<Flex align={"center"} gap={10}>
						<Box className={s.internshipsCardIcon}>
							<Image
								src={ImageUser}
								alt={"iconAlt"}
								width={32}
								height={32}
								unoptimized
							/>
						</Box>
						<Text className={s.companyName}>Microsoft</Text>
					</Flex>
				</Flex>
				<Flex direction={"column"} m={"1.5rem 0 1.5rem"} gap={"0.75rem"}>
					<Text component={"h3"} className={s.internshipsCardTitle}>
						Trainee designer
					</Text>
					<Text component={"p"} className={s.internshipsCardDescription}>
						Internship at Microsoft is a unique experience of working in an
						international team, participation in real projects and the
						opportunity to learn the best practices of one of the most
						innovative corporations in the world.
					</Text>
				</Flex>
				<Flex direction={"column"} mb={"1.5rem"}>
					<Text component={"p"} className={s.internshipsCardDescription}>
						Internship Dates:
					</Text>
					<Text component={"p"} className={s.internshipsCardDate}>
						25.05.2025 - 25.08.2025
					</Text>
				</Flex>
				<FilledButton
					className={s.internshipsCardButton}
					fullWidth
					h={"2.75rem"}
				>
					View Summary
				</FilledButton>
				<Flex justify={"space-between"} gap={"0.5rem"} mt={"0.5rem"}>
					<OutlineButton fullWidth h={"2.75rem"} className={s.buttonOutline}>
						Accept
					</OutlineButton>
					<OutlineButton fullWidth h={"2.75rem"} className={s.buttonOutline}>
						Reject
					</OutlineButton>
				</Flex>
			</Box>
		</Box>
	)
}
