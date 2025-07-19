import { NewPassword, SignIn, SignUp } from "@/feature/auth"
import { Modal } from "@mantine/core"
import React, { useEffect } from "react"
import { Case, Switch } from "react-if"

import { useAuthorizationStore } from "@/widgets/auth/model"

export const AuthWrapper = () => {
	const [authorization, modalType, setAuthorization, setModalType] =
		useAuthorizationStore((s) => [
			s.authorization,
			s.modalType,
			s.setAuthorization,
			s.setModalType,
		])

	useEffect(() => {
		const authType = sessionStorage.getItem("authType") || "login"
		setModalType(
			authType === "register" ||
				authType === "forgot-password" ||
				authType === "new-password"
				? authType
				: "login",
		)
	}, [])

	return (
		<Modal
			centered
			radius={8}
			padding={24}
			size={"auto"}
			opened={authorization}
			withCloseButton={false}
			onClose={() => setAuthorization(false)}
		>
			<Switch>
				<Case condition={modalType === "login"}>
					<SignIn />
				</Case>
				<Case condition={modalType === "register"}>
					<SignUp />
				</Case>
				<Case condition={modalType === "new-password"}>
					<NewPassword />
				</Case>
			</Switch>
		</Modal>
	)
}
