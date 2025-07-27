import { Button, Flex, Text } from "@mantine/core"
import Cookies from "js-cookie"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { toast } from "react-toastify"

import { TOKEN } from "@/shared/constants/env.ts"
import { Input } from "@/shared/ui"

import s from "./styles.module.scss"

const PublicRoute = dynamic(() => import("@/widgets/public-route"), {
	ssr: false,
})

const LoginPage = () => {
	const router = useRouter()

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (email === "admin@freshman.com" && password === "freshm@n") {
			const token =
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJyYXp6YWtiZXJnYW5vdi5tQGdtYWlsLmNvbSIsImV4cCI6MTc1MzE2ODg4OH0.8gPDPqrnLvufSgQU-66jYE-qMPzxepqggfRV0RiLwQ4"
			Cookies.set(TOKEN.AUTH_TOKEN, token)
			router.push("/")
		} else {
			toast.error("Email yoki parol noto‘g‘ri")
		}
	}

	return (
		<PublicRoute>
			<Flex align={"center"} justify={"center"} h={"100vh"}>
				<div className={s.card}>
					<Text className={s.title}>Account Login</Text>
					<Text className={s.subtitle}>
						Enter your email and password to log in to your account
					</Text>

					<form className={s.form} onSubmit={handleSubmit}>
						<Input
							height={64}
							label={"Email"}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							onBlur={(e) => setEmail(e.target.value)}
						/>

						<Input
							height={64}
							mt={16}
							label={"Password"}
							type={"password"}
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onBlur={(e) => setPassword(e.target.value)}
						/>

						<Button type={"submit"} className={s.formBtn}>
							Login
						</Button>
					</form>
				</div>
			</Flex>
		</PublicRoute>
	)
}

export default LoginPage
