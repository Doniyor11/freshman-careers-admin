import { Anchor, Box, Container, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Link from "next/link"
import React from "react"

import s from "./footer.module.scss"

export const Footer = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
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
						<Link href={"/internships"} className={s.footerDescription}>
							Internships
						</Link>
						<Link href={"/companies"} className={s.footerDescription}>
							Companies
						</Link>
						<Link href={"/responses"} className={s.footerDescription}>
							Responses
						</Link>
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
							href={"https://freshman.careers"}
							target={"_blank"}
							className={s.footerDescription}
						>
							WebSite
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
