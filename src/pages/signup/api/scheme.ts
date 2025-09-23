import * as yup from "yup"

export const SignUpScheme = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  phone_number: yup.string().required("Phone number is required"),
})
