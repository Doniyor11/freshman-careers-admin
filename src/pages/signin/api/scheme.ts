import * as yup from "yup"

export const SignInScheme = yup.object().shape({
	username: yup
		.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: yup
		.string()
		.required("Password is required")
		.min(8, "Password must be at least 8 characters long"),
})
