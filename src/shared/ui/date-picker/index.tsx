import Icon from "@//shared/assets/images/icon/chevron_backward4.svg"
import { DateInput, DateInputProps } from "@mantine/dates"
import React from "react"

import s from "./styles.module.scss"

interface IDateInput extends DateInputProps {
	label?: string
	height?: string
}

export const InputDate: React.FC<IDateInput> = ({ height = 64, ...props }) => {
	return (
		<>
			<DateInput
				styles={{
					input: { height: height },
				}}
				className={s.input}
				rightSection={<Icon />}
				{...props}
			/>
		</>
	)
}
