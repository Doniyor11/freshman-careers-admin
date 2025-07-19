import { Flex, Text } from "@mantine/core"
import React, { useState } from "react"

import { Input } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./create.module.scss"

export const SignUp = () => {
	const [showPasswordBlock, setShowPasswordBlock] = useState(false)

	return (
		<>
			{!showPasswordBlock && (
				<Flex direction={"column"} gap={"2rem"}>
					<Flex direction={"column"} gap={"1rem"}>
						<Input label={"Email"} type={"text"} />
						<Input label={"Phone Number"} type={"text"} />
					</Flex>
					<Flex direction={"column"} gap={"1rem"}>
						<FilledButton h={"3.5rem"}>Sign Up</FilledButton>
						<FilledButton
							h={"3.5rem"}
							bg={"#004C84"}
							onClick={() => setShowPasswordBlock(true)}
						>
							Sign In
						</FilledButton>
					</Flex>
				</Flex>
			)}
			{showPasswordBlock && (
				<Flex direction={"column"} w={"100%"} gap={"2rem"}>
					<Flex direction={"column"} gap={"0.25rem"}>
						<Text component={"h3"} className={s.title}>
							Enter a new password
						</Text>
						<Text component={"h3"} className={s.description}>
							Enter the password and repeat it again
						</Text>
					</Flex>
					<Flex w={"100%"} gap={"1rem"} align={"center"} direction={"column"}>
						<Input label={"Email"} type={"password"} />
						<Input label={"Email"} type={"password"} />
					</Flex>
					<FilledButton bg={"#004C84"} h={"3.5rem"} mt={"2rem"}>
						Continue
					</FilledButton>
				</Flex>
			)}
		</>
	)
}
