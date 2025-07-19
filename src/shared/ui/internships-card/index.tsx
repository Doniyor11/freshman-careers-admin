import IconEdit from "@//shared/assets//images/icon/edit.svg"
import IconTrash from "@//shared/assets//images/icon/trash.svg"
import { ActionIcon, Box, Flex, Text } from "@mantine/core"
import Image, { StaticImageData } from "next/image"
import React from "react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./internships-card.module.scss"

interface InternshipsCardProps {
	imageSrc: StaticImageData
	imageAlt: string
	iconSrc: StaticImageData
	iconAlt: string
	day: string
	title: string
	companyName?: string
	description: string
	datesLabel: string
	dates: string
	onResponses?: () => void
	onEdit?: () => void
	onDelete?: () => void
	border?: boolean
}

export const InternshipsCard: React.FC<InternshipsCardProps> = ({
	imageSrc,
	imageAlt,
	iconSrc,
	iconAlt,
	day,
	title,
	description,
	datesLabel,
	dates,
	onResponses,
	onEdit,
	onDelete,
	border = true,
	companyName,
}) => {
	return (
		<Box
			className={s.internshipsCardWrapper}
			style={{
				border: border ? "1px solid #E5E5E5" : "none",
			}}
		>
			<Box className={s.internshipsCardImage}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					width={400}
					height={256}
					unoptimized
				/>
			</Box>
			<Box className={s.internshipsCardContent}>
				<Flex justify={"space-between"} align={"center"}>
					<Flex align={"center"} gap={10}>
						<Box className={s.internshipsCardIcon}>
							<Image
								src={iconSrc}
								alt={iconAlt}
								width={32}
								height={32}
								unoptimized
							/>
						</Box>
						<Text className={s.companyName}>{companyName}</Text>
					</Flex>
					<Box className={s.internshipsCardDay}>{day}</Box>
				</Flex>
				<Flex direction={"column"} m={"1.5rem 0 1.5rem"} gap={"0.75rem"}>
					<Text component={"h3"} className={s.internshipsCardTitle}>
						{title}
					</Text>
					<Text component={"p"} className={s.internshipsCardDescription}>
						{description}
					</Text>
				</Flex>
				<Flex direction={"column"} mb={"1.5rem"}>
					<Text component={"p"} className={s.internshipsCardDescription}>
						{datesLabel}
					</Text>
					<Text component={"p"} className={s.internshipsCardDate}>
						{dates}
					</Text>
				</Flex>
				<Flex gap={"0.5rem"}>
					<FilledButton
						className={s.internshipsCardButton}
						bg={"#004C84"}
						flex={"auto"}
						onClick={onResponses}
						h={'2.75rem'}
					>
						Responses
					</FilledButton>
					<ActionIcon
						bg={"#fff"}
						className={s.internshipsCardActionIcon}
						onClick={onEdit}
					>
						<IconEdit />
					</ActionIcon>
					<ActionIcon
						bg={"#fff"}
						className={s.internshipsCardActionIcon}
						onClick={onDelete}
					>
						<IconTrash />
					</ActionIcon>
				</Flex>
			</Box>
		</Box>
	)
}
