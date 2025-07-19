import Icon from "@//shared/assets/images/icon/chevron_backward-small.svg"
import { Box, Container, Flex, Menu, Text } from "@mantine/core"
import Cookies from "js-cookie"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import { useGetUserMeQuery } from "@/entities/user-me/query.ts"

import { EnvKeys, TOKEN } from "@/shared/constants/env.ts"

import s from "./navbar-profile.module.scss"

export const NavbarProfile = () => {
	const router = useRouter()
	const { data } = useGetUserMeQuery()

	const handleLogout = () => {
		Cookies.remove(TOKEN.AUTH_TOKEN)
		router.push("/")
	}
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
					<Menu
						trigger={"hover"}
						position={"bottom-end"}
						classNames={{
							dropdown: s.profileDropdown,
						}}
					>
						<Menu.Target>
							<Box className={s.profileImage}>
								<Image
									src={`${EnvKeys.NEXT_HOST}/${data?.profile_image}`}
									alt={"profile_image"}
									width={56}
									height={56}
									unoptimized
								/>
							</Box>
						</Menu.Target>

						<Menu.Dropdown>
							<Flex
								justify={"space-between"}
								className={s.profileItem}
								gap={"1rem"}
							>
								<Flex align={"flex-start"} direction={"column"} w={"11rem"}>
									<Text component={"h3"} className={s.profileItemName}>
										{data?.login}
									</Text>
									<Text component={"p"} className={s.profileItemEmail}>
										{data?.email}
									</Text>
								</Flex>
								<Text component={"span"} className={s.profileItemInfo}>
									BASIC
								</Text>
							</Flex>
							<Flex
								className={s.profileItem}
								justify={"space-between"}
								align={"center"}
								onClick={() => router.push("/my-profile")}
							>
								<Text component={"span"} className={s.profileItemText}>
									Profile
								</Text>
								<Icon />
							</Flex>
							<Flex
								className={s.profileItem}
								justify={"space-between"}
								align={"center"}
								onClick={handleLogout}
							>
								<Text component={"span"} className={s.profileItemText}>
									Sign Out
								</Text>
								<Icon />
							</Flex>
						</Menu.Dropdown>
					</Menu>
				</Flex>
			</Container>
		</Box>
	)
}
