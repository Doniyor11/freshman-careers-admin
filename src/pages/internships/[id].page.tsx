import dynamic from "next/dynamic"

import { InternshipInnerInfo } from "@/pages/internships/view/ui"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
	ssr: false,
})

const InternshipsPage = () => {
	return (
		<PrivateRoute>
			<InternshipInnerInfo />
		</PrivateRoute>
	)
}

export default InternshipsPage
