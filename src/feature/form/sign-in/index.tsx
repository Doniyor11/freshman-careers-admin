import s from "@/feature/form/sign-up/create.module.scss"
import { Flex, Text } from "@mantine/core"
import React from "react"

import { Input } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

export const SignIn = () => {
	return (
		<>
			<Flex direction={"column"} gap={"2rem"}>
				<Flex direction={"column"} gap={"0.25rem"}>
					<Text component={"h3"} className={s.title}>
						Sing In
					</Text>
				</Flex>
				<Flex direction={"column"} gap={"1rem"}>
					<Input label={"Email"} type={"text"} />
					<Input label={"Phone Number"} type={"text"} />
				</Flex>
				<Flex direction={"column"} gap={"1rem"}>
					<FilledButton h={"3.5rem"} bg={"#004C84"}>
						Sign In
					</FilledButton>
				</Flex>
			</Flex>
		</>
	)
}
