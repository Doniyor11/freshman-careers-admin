import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { Input } from "@/shared/ui"

import { useSignUpQuery } from "./api/query.ts"
import { SignUpScheme } from "./api/scheme.ts"
import { ISignUp } from "./api/types.ts"
import s from "./styles.module.scss"

const PublicRoute = dynamic(() => import("@/widgets/public-route"), {
	ssr: false,
})

const SignUp = () => {
	const router = useRouter()

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid, errors },
	} = useForm<ISignUp>({
		mode: "onChange",
		resolver: yupResolver(SignUpScheme),
	})

	const { mutate, isPending } = useSignUpQuery(() => {
		router.push("/new-password")
	})

	const onSubmit = (data: ISignUp) => {
		mutate(data)
		if (data?.email) {
			sessionStorage.setItem("email", data.email)
		}
	}

	return (
		<PublicRoute>
			<Flex align={"center"} justify={"center"} h={"100vh"}>
				<div className={s.card}>
					<Text className={s.title}>Create Account</Text>
					<Text className={s.subtitle}>
						Enter your email and phone number to create a new account on the
						platform
					</Text>

					<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
						<Controller
							name={"email"}
							control={control}
							render={({ field }) => (
								<Input
									height={64}
									label={"Email"}
									error={errors?.email?.message}
									{...field}
								/>
							)}
						/>

						<Controller
							name={"phone_number"}
							control={control}
							render={({ field }) => (
								<Input
									mt={16}
									height={64}
									type={"number"}
									label={"Phone number"}
									error={errors?.phone_number?.message}
									{...field}
								/>
							)}
						/>

						<Button
							type={"submit"}
							loading={isPending}
							disabled={!isValid || !isDirty}
							className={cx(s.formBtn, s.blue)}
						>
							Sign up
						</Button>

						<Button
							mt={12}
							onClick={() => router.push("/signin")}
							className={cx(s.formBtn, s.orange)}
						>
							Sign in
						</Button>
					</form>
				</div>
			</Flex>
		</PublicRoute>
	)
}

export default SignUp
