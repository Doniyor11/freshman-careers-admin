import { Box, Container, Flex, Text } from "@mantine/core"
import { useRouter } from "next/router"
import React from "react"

import { useAuthorizationStore } from "@/widgets/auth/model"
import { AuthWrapper } from "@/widgets/auth/ui"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./navbar.module.scss"

const navbarLink = [
	{
		label: "Internship",
		href: "/",
	},
	{
		label: "Mentorship",
		href: "/",
	},
	{
		label: "Opportunities",
		href: "/ ",
	},
	{
		label: "Reviews",
		href: "/ ",
	},
]

export const Navbar = () => {
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])
	const router = useRouter()

	return (
		<>
			<Box className={s.navbarWrapper}>
				<Container size={"1440px"}>
					<Flex className={s.navbar} justify="space-between" align="center">
						<Flex pl={"2rem"}>
							{navbarLink.map((link) => (
								<a key={link.label} href={link.href} className={s.navbarLink}>
									{link.label}
								</a>
							))}
						</Flex>
						<Flex
							direction={"column"}
							align={"center"}
							justify={"center"}
							gap={"0.13rem"}
							className={"navbarLogoBox"}
							pr={"7rem"}
							onClick={() => {
								router.push("/")
							}}
						>
							<Text component={"p"}>Freshman</Text>
							<Text component={"span"}>Careers</Text>
						</Flex>
						<Flex gap={"1rem"} className={s.navbarButtons}>
							<FilledButton
								onClick={() => {
									setAuthorization(true)
									setModalType("login")
								}}
								className={s.navbarButton}
								bg={"#004C84"}
							>
								Sign In
							</FilledButton>
							<FilledButton
								onClick={() => {
									setAuthorization(true)
									setModalType("register")
								}}
								className={s.navbarButton}
							>
								Sign Up
							</FilledButton>
						</Flex>
					</Flex>
				</Container>
			</Box>
			<AuthWrapper />
		</>
	)
}
