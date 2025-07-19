import { Box, Flex, Text } from "@mantine/core"
import React, { FC, useState } from "react"

import { Input, PricingCard } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./form.module.scss"

interface IFormProps {
	onClickForgotPassword?: () => void
	handleSubscribe?: () => void
	loading?: boolean
}

export const FormBanner: FC<IFormProps> = ({
	onClickForgotPassword,
	handleSubscribe,
	loading,
}) => {
	const [value, setValue] = useState("")
	const [_, setFocused] = useState(false)

	return (
		<>
			<Flex direction={"column"} gap={"0.75rem"} mb={"2rem"}>
				<Text component={"p"} className={s.navbarModalInfo}>
					FRESHMAN CAREERS
				</Text>
				<Text component={"p"} className={s.navbarModalTitle}>
					Get full access to platform by subscribing
				</Text>
				<Text component={"p"} className={s.navbarModalDescription}>
					Tired of waiting for success to come to you? Take matters into your
					own hands and we'll help you.
				</Text>
			</Flex>
			<Flex gap={"1.75rem"}>
				<Box flex={"1"}>
					<Flex direction={"column"} gap={"2rem"}>
						<Flex direction={"column"} gap={"0.25rem"}>
							<Text className={s.formTitle}>Account Login</Text>
							<Text className={s.formDescription}>
								Enter your email and password to log in to your account
							</Text>
						</Flex>
						<Flex direction={"column"}>
							<Flex direction={"column"} gap={"1rem"}>
								<Input
									label={"Email"}
									type={"email"}
									onChange={(event) => setValue(event.currentTarget.value)}
									onFocus={() => setFocused(false)}
									onBlur={() => setFocused(false)}
									value={value}
								/>
								<Input
									label={"Password"}
									type={"password"}
									onChange={(event) => setValue(event.currentTarget.value)}
									onFocus={() => setFocused(false)}
									onBlur={() => setFocused(false)}
									value={value}
								/>
							</Flex>
							<Text
								component={"p"}
								className={s.formForgotPassword}
								onClick={onClickForgotPassword}
							>
								Forgot your password?
							</Text>
						</Flex>
						<Flex direction={"column"} gap={"0.5rem"}>
							<FilledButton bg={"#004C84"} h={"2.75rem"}>
								Sign In
							</FilledButton>
							<FilledButton h={"2.75rem"}>Sign Up</FilledButton>
						</Flex>
					</Flex>
				</Box>
				<Box flex={"1"}>
					<PricingCard
						buttonText={"Subscribe"}
						handleSubscribe={handleSubscribe}
						loading={loading}
					/>
				</Box>
			</Flex>
		</>
	)
}
