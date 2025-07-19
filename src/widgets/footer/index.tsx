import { Box, Container, Flex, Text } from "@mantine/core"
import React from "react"

import s from "./footer.module.scss"

export const Footer = () => {
	return (
		<Box className={s.footerWrapper}>
			<Container size={"1440px"}>
				<Flex gap={"4.5rem"}>
					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							PROGRAMS
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Internship
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Mentorship
						</Text>
					</Flex>
					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							INFORMATION
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Opportunities
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Reviews
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Webinars
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							FAQ
						</Text>
					</Flex>
					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							SOCIAL MEDIA
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Telegram
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							Instagram
						</Text>
						<Text component={"p"} className={s.footerDescription}>
							YouTube
						</Text>
					</Flex>
				</Flex>
				<Flex justify={"center"} align={"center"} mt={"5rem"}>
					<Text className={s.footerInfo}>
						© {new Date().getFullYear()} Internship Platform. All Rights
						Reserved
					</Text>
				</Flex>
			</Container>
		</Box>
	)
}
