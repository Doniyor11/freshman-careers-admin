import { Badge, Flex, Text } from "@mantine/core"
import cx from "clsx"

import s from "./styles.module.scss"

export const BadgeGroup: React.FC<{
	options: string[]
	value: string | undefined
	onChange: (option: string | undefined) => void
	label: string
}> = ({ options, value, onChange, label }) => (
	<Flex gap={"0.5rem"} direction={"column"}>
		<Text component={"p"} className={s.filterLabel}>
			{label}
		</Text>
		<Flex gap={"0.38rem"} wrap={"wrap"}>
			{options.map((option, idx) => (
				<Badge
					key={idx}
					color="#848F98"
					bg={value === option ? "#FF6A00" : "#E2EAFF"}
					size={"xl"}
					className={cx(s.filterBadge, {
						[s.filterBadgeActive]: value === option,
					})}
					onClick={() => onChange(option)}
				>
					{option}
				</Badge>
			))}
		</Flex>
	</Flex>
)
