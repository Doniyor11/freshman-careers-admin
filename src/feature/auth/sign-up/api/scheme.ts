import * as yup from "yup"

export const SignUpScheme = yup.object().shape({
	email: yup.string().email().required(""),
	phone_number: yup.string().required(""),
})
