import { Center, Loader } from "@mantine/core"
import Cookies from "js-cookie"
import { useRouter } from "next/router"
import { ReactNode, useEffect } from "react"

import { TOKEN } from "@/shared/constants/env"

const PublicRoute = ({ children }: { children: ReactNode }) => {
	const router = useRouter()
	const token = Cookies.get(TOKEN.AUTH_TOKEN)

	useEffect(() => {
		if (token) {
			router.push("/")
		}
	}, [token, router])

	if (token) {
		return (
			<Center h={"40vh"}>
				<Loader size={"xl"} color={"#004B84" as any} />
			</Center>
		)
	}

	return <>{children}</>
}

export default PublicRoute
