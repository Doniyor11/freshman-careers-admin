import { Anchor, Box, Container, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import React from "react"

import s from "./footer.module.scss"

export const Footer = () => {
	const matches = useMediaQuery("(max-width: 1024px)")

	const onLinkClick = (id: string) => {
		const block = document.querySelector(`#${id}`)
		if (!block) return
		block.scrollIntoView(true)
	}
	return (
		<Box className={s.footerWrapper}>
			<Container size={"1440px"}>
				<Flex
					gap={matches ? "1rem" : "4.5rem"}
					direction={matches ? "column" : "row"}
				>
					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							PROGRAMS
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => onLinkClick("Internship")}
						>
							Internship
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => onLinkClick("Companies")}
						>
							Companies
						</Text>
					</Flex>
					<Flex direction={"column"} gap={"0.75rem"}>
						<Text component={"h2"} className={s.footerTitle}>
							INFORMATION
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => onLinkClick("Process")}
						>
							Process
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => onLinkClick("Reviews")}
						>
							Reviews
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => onLinkClick("Webinars")}
						>
							Webinars
						</Text>
						<Text
							className={s.footerDescription}
							onClick={() => onLinkClick("FAQ")}
						>
							FAQ
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
				<Flex
					justify={"center"}
					align={"center"}
					mt={matches ? "1.5rem" : "5rem"}
				>
					<Text className={s.footerInfo}>
						© {new Date().getFullYear()} Internship Platform. All Rights
						Reserved
					</Text>
				</Flex>
			</Container>
		</Box>
	)
}
