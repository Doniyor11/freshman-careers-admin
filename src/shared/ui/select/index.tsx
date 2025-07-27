import Icon from "@//shared/assets/images/icon/chevron_backward4.svg"
import { Select as MantineSelect, SelectProps } from "@mantine/core"
import React from "react"

import s from "./select.module.scss"

interface ISelectProps extends SelectProps {
	height?: string | number
}

export const Select: React.FC<ISelectProps> = ({ height = 64, ...props }) => {
	return (
		<>
			<MantineSelect
				styles={{ input: { height } }}
				rightSection={<Icon />}
				className={s.select}
				classNames={{
					section: s.selectSection,
					label: s.selectLabel,
				}}
				{...props}
			/>
		</>
	)
}
