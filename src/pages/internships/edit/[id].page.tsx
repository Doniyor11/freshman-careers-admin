import { InternshipEdit } from "@/feature/internships/edit/ui"
import dynamic from "next/dynamic"
import React from "react"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
	ssr: false,
})

const EditInternship = () => {
	return (
		<PrivateRoute>
			<InternshipEdit />
		</PrivateRoute>
	)
}

export default EditInternship
