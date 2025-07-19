import * as yup from "yup"

export const NewPasswordScheme = yup.object().shape({
	password: yup.string().required().min(8),
	password_confirmation: yup
		.string()
		.required()
		.min(8)
		.oneOf([yup.ref("password")], "The passwords are not the same."),
})
