import { ActionIcon, Box, Container, Flex, Burger, Drawer } from "@mantine/core"
import { useMediaQuery, useDisclosure } from "@mantine/hooks"
import cx from "clsx"
import Cookies from "js-cookie"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

import IconLogout from "@/shared/assets/images/icon/logout.svg"
import Logo from "@/shared/assets/images/logo.png"
import { TOKEN } from "@/shared/constants/env.ts"

import s from "./styles.module.scss"

export const Navbar = () => {
	const router = useRouter()
	const isMobile = useMediaQuery('(max-width: 768px)')
	const [opened, { open, close }] = useDisclosure(false)

	const handleLogout = () => {
		Cookies.remove(TOKEN.AUTH_TOKEN)
		router.push("/signin")
	}

	const navigationLinks = (
		<>
			<Link
				href={"/companies"}
				className={cx(s.link, {
					[s.active]: router.pathname === "/companies",
				})}
				onClick={close}
			>
				Companies
			</Link>
			<Link
				href={"/internships"}
				className={cx(s.link, {
					[s.active]: router.pathname === "/internships",
				})}
				onClick={close}
			>
				Internships
			</Link>
			<Link
				href={"/responses"}
				className={cx(s.link, {
					[s.active]: router.pathname === "/responses",
				})}
				onClick={close}
			>
				Responses
			</Link>
		</>
	)

		return (
		<>
			<Box className={s.profileContainer} p={"0.5rem 0"}>
				<Container size={"1440px"}>
					<Flex justify={"space-between"} align={"center"} p={"0.5rem 1rem"}>
						<Flex
							direction={"column"}
							align={"center"}
							justify={"center"}
							gap={"0.13rem"}
							className={s.navbarLogoBox}
							onClick={() => {
								router.push("/")
							}}
						>
							<Image
								src={Logo}
								alt={"logo"}
								width={isMobile ? 120 : 160}
								height={undefined}
								unoptimized
							/>
						</Flex>

						{isMobile ? (
							<Flex align={"center"} gap={16}>
								<ActionIcon onClick={handleLogout} variant={"subtle"}>
									<IconLogout />
								</ActionIcon>
								<Burger opened={opened} onClick={open} size="sm" />
							</Flex>
						) : (
							<Flex align={"center"} gap={34}>
								<Flex align={"center"} gap={24} className={s.desktopNav}>
									{navigationLinks}
								</Flex>
								<ActionIcon onClick={handleLogout} variant={"subtle"}>
									<IconLogout />
								</ActionIcon>
							</Flex>
						)}
					</Flex>
				</Container>
			</Box>

			<Drawer
				opened={opened}
				onClose={close}
				position="right"
				size="sm"
				classNames={{ title: s.drawerTitle }}
			>
				<Flex direction={"column"} gap={24} className={s.mobileNav}>
					{navigationLinks}
				</Flex>
			</Drawer>
		</>
	)
}
