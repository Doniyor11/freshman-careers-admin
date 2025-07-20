import { Box, Container, Flex, Text } from "@mantine/core"
import { useRouter } from "next/router"
import React from "react"

import s from "./navbar-profile.module.scss"

export const NavbarProfile = () => {
	const router = useRouter()

	return (
		<Box className={s.profileContainer} p={"0.5rem 0"}>
			<Container size={"1440px"}>
				<Flex justify={"space-between"} align={"center"}>
					<Flex
						direction={"column"}
						align={"center"}
						justify={"center"}
						gap={"0.13rem"}
						className={"navbarLogoBox"}
						p={"0.5rem 1rem"}
						onClick={() => {
							router.push("/")
						}}
					>
						<Text component={"p"}>Freshman</Text>
						<Text component={"span"}>Careers</Text>
					</Flex>
				</Flex>
			</Container>
		</Box>
	)
}
