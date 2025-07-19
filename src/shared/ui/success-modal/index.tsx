import { Flex, Text } from "@mantine/core"
import React, { FC } from "react"

import IconSuccess from "@/shared/assets/images/icon/check.svg"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./success-modal.module.scss"

interface SuccessModalIProps {
	onClick?: () => {}
}

export const SuccessModal: FC<SuccessModalIProps> = ({ onClick }) => {
	return (
		<Flex direction={"column"} gap={"2rem"} justify={"center"} align={"center"}>
			<IconSuccess />
			<Flex direction={"column"} gap={"0.75rem"}>
				<Text component={"h3"} className={s.info}>
					FRESHMAN CAREERS
				</Text>
				<Text component={"h3"} className={s.title}>
					Subscription successfully subscribed
				</Text>
				<Text component={"p"} className={s.description}>
					Fill out the form to be able to send applications to companies for
					internships
				</Text>
			</Flex>
			<FilledButton h={"3.5rem"} bg={"#004C84"} onClick={onClick}>
				To internships
			</FilledButton>
		</Flex>
	)
}
