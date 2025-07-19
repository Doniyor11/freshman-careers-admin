import { PasswordInput } from "@mantine/core"
import cx from "clsx"
import React, { forwardRef } from "react"

import s from "./styles.module.scss"
import { IInputStyled } from "./types"

export const PasswordInputFilled = forwardRef<HTMLInputElement, IInputStyled>(
	({ error, height = 48, className, ...props }: IInputStyled, ref) => (
		<>
			<PasswordInput
				ref={ref}
				styles={{ input: { height } }}
				className={cx(s.input, className, {
					[s.error]: error,
				})}
				classNames={{
					input: s.mantineInput,
				}}
				{...props}
			/>
		</>
	),
)

PasswordInputFilled.displayName = "PasswordInputFilled"
