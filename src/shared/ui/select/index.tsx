import Icon from "@//shared/assets/images/icon/chevron_backward4.svg"
import { Select as MantineSelect, SelectProps } from "@mantine/core"
import React from "react"

import s from "./select.module.scss"

export const Select: React.FC<SelectProps> = (props) => {
	return (
		<>
			<MantineSelect
				{...props}
				rightSection={<Icon />}
				className={s.select}
				classNames={{
					section: s.selectSection,
					label: s.selectLabel,
				}}
			/>
		</>
	)
}
