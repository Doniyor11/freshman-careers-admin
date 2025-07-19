import { PasswordInputProps } from "@mantine/core"
import { InputHTMLAttributes } from "react"

type DefaultProps = PasswordInputProps & InputHTMLAttributes<HTMLInputElement>

export interface IInputStyled extends DefaultProps {
	className?: string
	height?: string | number
	error?: boolean
}
