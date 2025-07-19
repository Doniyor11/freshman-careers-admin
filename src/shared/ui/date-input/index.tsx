import Icon from "@//shared/assets/images/icon/chevron_backward4.svg"
import { DateInput, DateInputProps } from "@mantine/dates"
import React from "react"

import s from "./styles.module.scss"

interface IDateInput extends DateInputProps {
	label?: string
}

export const InputDate: React.FC<IDateInput> = (props) => {
	return (
		<>
			<DateInput className={s.input} rightSection={<Icon />} {...props} />
		</>
	)
}
