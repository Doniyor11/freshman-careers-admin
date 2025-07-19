import { useSignUpQuery } from "@/feature/auth/sign-up/api/query.ts"
import { SignUpScheme } from "@/feature/auth/sign-up/api/scheme.ts"
import { ISignUp } from "@/feature/auth/sign-up/api/types.ts"
import { yupResolver } from "@hookform/resolvers/yup"
import { ActionIcon, Box, Button, Text } from "@mantine/core"
import cx from "clsx"
import { Controller, useForm } from "react-hook-form"
import { IMaskInput } from "react-imask"

import { useAuthorizationStore } from "@/widgets/auth/model"
import s from "@/widgets/auth/ui/styles.module.scss"

import IconClose from "@/shared/assets/images/icon/icon-close.svg"
import { Input } from "@/shared/ui"
import { InputFilled } from "@/shared/ui/inputs"

export const SignUp = () => {
	const [setAuthorization, setModalType] = useAuthorizationStore((s) => [
		s.setAuthorization,
		s.setModalType,
	])

	const {
		control,
		handleSubmit,
		formState: { isDirty, isValid },
	} = useForm<ISignUp>({
		mode: "onChange",
		resolver: yupResolver(SignUpScheme),
	})
	const { mutate, isPending } = useSignUpQuery(() =>
		setModalType("new-password"),
	)

	const onSubmit = (data: ISignUp) => {
		mutate({
			email: data?.email,
			phone_number: data.phone_number,
		})
	}

	return (
		<Box w={670} className={s.boxWrapper}>
			<ActionIcon className={s.close} onClick={() => setAuthorization(false)}>
				<IconClose />
			</ActionIcon>
			<h2 className={s.otherTitle}>Create Account</h2>
			<Text m={"4px 0 32px"} className={s.cardSubtitle}>
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
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				/>

				<Controller
					name={"phone_number"}
					control={control}
					render={({ field }) => (
						<InputFilled
							mt={16}
							height={64}
							component={IMaskInput as any}
							mask="+0 000 000 0000"
							placeholder={"Phone Number"}
							value={field.value}
							onChange={field.onChange}
						/>
					)}
				/>

				<Button
					h={56}
					fz={20}
					type={"submit"}
					m={"32px 0 8px"}
					className={cx(s.formBtn, s.signUp)}
					disabled={!isDirty || !isValid}
					loading={isPending}
				>
					Sign Up
				</Button>
				<Button
					fz={20}
					h={56}
					disabled={isPending}
					className={cx(s.formBtn, s.signIn)}
					onClick={() => setModalType("login")}
				>
					Sign In
				</Button>
			</form>
		</Box>
	)
}
