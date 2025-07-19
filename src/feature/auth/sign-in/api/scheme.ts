import * as yup from "yup"

export const SignInScheme = yup.object().shape({
	username: yup.string().email().required(),
	password: yup.string().required().min(8),
})
