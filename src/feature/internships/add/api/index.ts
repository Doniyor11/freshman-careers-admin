import clientApi from "@/shared/api/base-api.ts";
import { apiKeys } from "@/shared/constants/api-keys.ts";



import { IInternships } from "./types.ts";


export const addInternshipApi = async (data: IInternships) => {
	const formData = new FormData()

	formData.append("company_id", data?.company_id)
	formData.append("title", data?.title)
	formData.append("internship_start_date", data?.internship_start_date)
	formData.append("internship_end_date", data?.internship_end_date)

	formData.append("payment_status", data?.payment_status)
	if (data?.payment_status === "Present") {
		formData.append("payment_amount", String(data?.payment_amount))
		if (data?.payment_regularity) {
			formData.append("payment_regularity", data?.payment_regularity)
		}
	}

	formData.append("education", data?.education)
	formData.append("format", data?.format)
	formData.append("schedule", data?.schedule)
	formData.append("working_hours", data?.working_hours)

	if (data?.picture) {
		formData.append("picture", data?.picture)
	}
	formData.append("conditions", data?.conditions)
	formData.append("description", data?.description)
	formData.append("requirements", data?.requirements)

	const response = await clientApi.post(apiKeys.internships, formData)
	return response.data
}
