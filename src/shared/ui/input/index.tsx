import EyeOff from "@//shared/assets/images/icon/eye-slash.svg"
import Eye from "@//shared/assets/images/icon/eye.svg"
import { TextInput, TextInputProps } from "@mantine/core"
import React, { forwardRef, useEffect, useState } from "react"

import s from "./input.module.scss"

interface InputIProps extends TextInputProps {
	label?: string
	labelProps?: React.ComponentPropsWithoutRef<"label">
	onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void
	onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?: React.HTMLInputTypeAttribute
	className?: string
	height?: string | number
	component?: any
	mask?: any
}

export const Input = forwardRef<HTMLInputElement, InputIProps>(
	(
		{
			height = 40,
			component,
			mask,
			className,
			type,
			label,
			...props
		}: InputIProps,
		ref,
	) => {
		const [value, setValue] = useState("")
		const [focused, setFocused] = useState(false)
		const [showPassword, setShowPassword] = useState(false)
		const floating = focused || value.length > 0 || undefined

		useEffect(() => {
			if (props.value) {
				setFocused(true)
			} else {
				setFocused(false)
			}
		}, [props.value])

		return (
			<>
				<TextInput
					ref={ref}
					label={label}
					labelProps={{ "data-floating": floating }}
					classNames={{
						root: s.root,
						input: `${s.input} ${floating ? s.inputFloating : ""}`,
						label: s.label,
					}}
					onFocus={(e) => {
						setFocused(true)
						props.onFocus?.(e)
					}}
					onBlur={(e) => {
						setFocused(false)
						props.onBlur?.(e)
					}}
					value={value}
					onChange={(event) => {
						setValue(event.currentTarget.value)
						props.onChange?.(event)
					}}
					type={type === "password" && showPassword ? "text" : type}
					rightSection={
						type === "password" ? (
							<button
								type="button"
								className={s.eyeButton}
								onClick={() => setShowPassword((prev) => !prev)} // переключение видимости пароля
								tabIndex={-1}
							>
								{showPassword ? <Eye /> : <EyeOff />}
							</button>
						) : null
					}
					{...props}
				/>
			</>
		)
	},
)

Input.displayName = "Input"
