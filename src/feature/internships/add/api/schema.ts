import * as yup from "yup"

export const AddInternshipScheme = yup.object().shape({
	company_id: yup.string().required("Kompaniya tanlanishi shart"),
	title: yup.string().required("Lavozim nomi kiritilishi shart"),

	payment_status: yup.string().required("To‘lov holatini tanlang"),
	payment_amount: yup
		.number()
		.required("To‘lov summasi kiritilishi shart")
		.min(0, "To‘lov summasi manfiy bo‘lmasligi kerak"),
	payment_regularity: yup.string().required("To‘lov davriyligini tanlang"),

	education: yup.string().required("Ta’lim darajasi kiritilishi shart"),
	format: yup.string().required("Format tanlanishi shart"),
	schedule: yup.string().required("Jadval tanlanishi shart"),
	working_hours: yup.string().required("Ish vaqti kiritilishi shart"),

	description: yup.string().required("Tavsif kiritilishi shart"),
	requirements: yup.string().required("Talablar kiritilishi shart"),
	conditions: yup.string().required("Sharoitlar kiritilishi shart"),
})
