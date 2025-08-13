import { InternshipAdd } from "@/feature"
import dynamic from "next/dynamic"
import React from "react"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
	ssr: false,
})

const AddInternship = () => {
	return (
		<PrivateRoute>
			<InternshipAdd />
		</PrivateRoute>
	)
}

export default AddInternship
