import Image1 from "@//shared/assets/images/icon.png"
import Image2 from "@//shared/assets/images/icon/edit-orange.svg"
import Image3 from "@//shared/assets/images/icon/trash-orange.svg"
import { Filter } from "@/feature"
import { ActionIcon, Box, Container, Flex, Grid, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./companies.module.scss"

export const Companies = () => {
	return (
		<>
			<Container size={"1440px"} p={"3rem 0 7.25rem 0"} bg={"#FAFBFF"}>
				<Grid>
					<Grid.Col span={3}>
						<Filter />
					</Grid.Col>
					<Grid.Col span={9}>
						<Flex justify={"space-between"} align={"center"}>
							<Text component={"h3"} className={s.companiesTitle}>
								Companies
							</Text>
						</Flex>
						{/* ------------ Card -------------	*/}
						<Grid mt={"1.5rem"} gutter={"1.5rem"}>
							<Grid.Col span={4}>
								<Box className={s.companiesCardWrapper}>
									<Flex gap={"1rem"}>
										<Box className={s.companiesCardIcon}>
											<Image
												src={Image1}
												alt="Company Logo"
												width={48}
												height={48}
											/>
										</Box>
										<Flex direction={"column"} gap={"0.5rem"}>
											<Text component={"h3"} className={s.companiesCardTitle}>
												Xiaomi
											</Text>
											<Text
												component={"p"}
												className={s.companiesCardDescription}
											>
												1 internship
											</Text>
										</Flex>
									</Flex>
									<Flex mt={"1.5rem"} justify={'space-between'} gap={'0.5rem'}>
										<FilledButton flex={'auto'} h={"2.75rem"}>Internships</FilledButton>
										<ActionIcon className={s.actionIcon}>
											<Image2 />
										</ActionIcon>
										<ActionIcon className={s.actionIcon}>
											<Image3 />
										</ActionIcon>
									</Flex>
								</Box>
							</Grid.Col>
						</Grid>
						{/* ------------ Card -------------	*/}
					</Grid.Col>
				</Grid>
			</Container>
		</>
	)
}
