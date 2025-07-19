import s from "@/feature/form/sign-up/create.module.scss"
import { Flex, Text } from "@mantine/core"
import React from "react"

import { Input } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

export const ForgotPassword = () => {
	return (
		<Flex direction={"column"} w={"100%"} gap={"2rem"}>
			<Flex direction={"column"} gap={"0.25rem"}>
				<Text component={"h3"} className={s.title}>
					Forgot your password?
				</Text>
				<Text component={"h3"} className={s.description}>
					Enter your email to continue
				</Text>
			</Flex>
			<Flex w={"100%"} gap={"1rem"} align={"center"} direction={"column"}>
				<Input label={"Email"} type={"text"} />
			</Flex>
			<FilledButton bg={"#004C84"} h={"3.5rem"} mt={"2rem"}>
				Send recovery code
			</FilledButton>
		</Flex>
	)
}
