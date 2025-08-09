import { ActionIcon, Box, Container, Flex, Text } from "@mantine/core"
import cx from "clsx"
import Cookies from "js-cookie"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

import IconLogout from "@/shared/assets/images/icon/logout.svg"
import { TOKEN } from "@/shared/constants/env.ts"

import s from "./styles.module.scss"

export const Navbar = () => {
	const router = useRouter()

	const handleLogout = () => {
		Cookies.remove(TOKEN.AUTH_TOKEN)
		router.push("/signin")
	}

	return (
		<Box className={s.profileContainer} p={"0.5rem 0"}>
			<Container size={"1440px"}>
				<Flex justify={"space-between"} align={"center"} p={"0.5rem 1rem"}>
					<Flex
						direction={"column"}
						align={"center"}
						justify={"center"}
						gap={"0.13rem"}
						className={"navbarLogoBox"}
						onClick={() => {
							router.push("/")
						}}
					>
						<Text component={"p"}>Freshman</Text>
						<Text component={"span"}>Careers</Text>
					</Flex>

					<Flex align={"center"} gap={34}>
						<Flex align={"center"} gap={24}>
							<Link
								href={"/companies"}
								className={cx(s.link, {
									[s.active]: router.pathname === "/companies",
								})}
							>
								Companies
							</Link>
							<Link
								href={"/internships"}
								className={cx(s.link, {
									[s.active]: router.pathname === "/internships",
								})}
							>
								Internships
							</Link>
							<Link
								href={"/responses"}
								className={cx(s.link, {
									[s.active]: router.pathname === "/responses",
								})}
							>
								Responses
							</Link>
						</Flex>
						<ActionIcon onClick={handleLogout} variant={"subtle"}>
							<IconLogout />
						</ActionIcon>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}
