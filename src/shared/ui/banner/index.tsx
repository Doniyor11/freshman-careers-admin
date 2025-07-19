import { ForgotPassword, FormBanner, SignUp } from "@/feature"
import { Flex, Text } from "@mantine/core"
import React, { useState } from "react"

import { Modal } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./banner.module.scss"

export const Banner = () => {
	const [opened, setOpened] = useState(false)
	const [forgotPassword, setForgotPassword] = useState(false)
	const [singIn, setSignIn] = useState(false)
	const handleOpen = () => {
		setOpened(true)
	}

	return (
		<>
			<Flex
				justify={"space-between"}
				align={"center"}
				className={s.internshipsBanner}
				bg={"#004C84"}
			>
				<Text component={"p"} className={s.internshipsBannerText}>
					Start your path to an internship today!
				</Text>
				<FilledButton h={"3.75rem"} p={"0rem 1.5rem"} onClick={handleOpen}>
					Apply Now
				</FilledButton>
			</Flex>
			<Modal
				size={"56.3rem"}
				opened={opened && !forgotPassword}
				onClose={() => setOpened(false)}
			>
				<FormBanner
					onClickForgotPassword={() => {
						setForgotPassword(true)
						setOpened(false)
					}}
					handleSubscribe={() => {
						setSignIn(true)
						setOpened(false)
						setForgotPassword(false)
					}}
				/>
			</Modal>
			<Modal
				size={"43rem"}
				opened={forgotPassword}
				onClose={() => setForgotPassword(false)}
			>
				<ForgotPassword />
			</Modal>
			<Modal size={"43rem"} opened={singIn} onClose={() => setSignIn(false)}>
				<SignUp />
			</Modal>
		</>
	)
}
