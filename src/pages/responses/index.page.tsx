import { ResponsesList } from "@/feature"
import dynamic from "next/dynamic"
import React from "react"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
	ssr: false,
})

const ProfilePage = () => {
	return (
		<>
			<PrivateRoute>
				<ResponsesList />
			</PrivateRoute>
		</>
	)
}

export default ProfilePage
