import * as yup from "yup"

export const NewPasswordScheme = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is required")
    .min(8, "Password confirmation must be at least 8 characters long")
    .oneOf([yup.ref("password")], "Passwords do not match"),
})
