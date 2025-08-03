import { Anchor, Box, Container, Flex, Text } from "@mantine/core"
import { useRouter } from "next/router"
import React from "react"

import s from "./footer.module.scss"

export const Footer = () => {
	const router = useRouter()
	return (
		<Box className={s.footerWrapper}>
			<Container size={"1440px"}>
				<Flex gap={"4.5rem"}>
					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							PROGRAMS
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => router.push("/companies")}
						>
							Companies
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => router.push("/internships")}
						>
							Internships
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => router.push("/responses")}
						>
							Responses
						</Text>
					</Flex>

					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							SOCIAL MEDIA
						</Text>
						<Anchor
							href={"https://t.me/freshmancareers"}
							target={"_blank"}
							className={s.footerDescription}
						>
							Telegram
						</Anchor>
						<Anchor
							href={"https://www.instagram.com/freshman.careers"}
							target={"_blank"}
							className={s.footerDescription}
						>
							Instagram
						</Anchor>
						<Anchor
							href={"#"}
							target={"_blank"}
							className={s.footerDescription}
						>
							YouTube
						</Anchor>
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
