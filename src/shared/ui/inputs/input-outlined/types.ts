import { InputProps } from "@mantine/core"
import { InputHTMLAttributes } from "react"

type DefaultProps = InputProps &
	Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> &
	InputHTMLAttributes<HTMLInputElement>

export interface IInputStyled extends DefaultProps {
	className?: string
	height?: string | number
	error?: boolean
	component?: any
	mask?: any
}
