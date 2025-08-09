import { Center, Loader } from "@mantine/core"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"

import { Footer, Navbar } from "@/widgets"

import { TOKEN } from "@/shared/constants/env.ts"

const PrivateRoute = ({ children }: { children: ReactNode }) => {
	const router = useRouter()
	const token = Cookies.get(TOKEN.AUTH_TOKEN)

	useEffect(() => {
		if (!token) {
			Cookies.remove(TOKEN.AUTH_TOKEN)
			router.push("/signin")
		}
	}, [token, router])

	if (!token) {
		return (
			<Center h={"40vh"}>
				<Loader size={"xl"} color={"#004B84" as any} />
			</Center>
		)
	}

	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	)
}

export default PrivateRoute
