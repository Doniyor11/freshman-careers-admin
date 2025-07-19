import { Box, Flex, Stack, Text } from "@mantine/core"
import { FC } from "react"

import { FilledButton } from "@/shared/ui/buttons"

import s from "./pricing-card.module.scss"

interface PricingCardIProps {
	justify?: "flex-start" | "center" | "flex-end"
	align?: "flex-start" | "center" | "flex-end"
	buttonText?: string
	handleSubscribe?: () => void
	loading?: boolean
	unsubscribe?: boolean
	onClickOnUnSubscribe?: () => void
	title?: string
	description?: string
}

export const PricingCard: FC<PricingCardIProps> = ({
	justify,
	align,
	buttonText,
	handleSubscribe,
	loading,
	unsubscribe = false,
	onClickOnUnSubscribe = () => {},
	title = "Don't have subscription?",
	description = "Get access to standard platform features for 6 months",
}) => {
	return (
		<div className={s.pricingCardContainer}>
			{/* Discount Header */}
			<div className={s.discountHeader}>85% DISCOUNT</div>
			<Box className={s.pricingCard}>
				{/* Card Content */}
				<Stack className={s.cardContent}>
					<Flex
						direction={"column"}
						gap={"1rem"}
						className={s.cardContentTop}
						align={align}
					>
						<Text className={s.cardContentTitle}>{title}</Text>
						<Text className={s.cardContentDescription}>{description}</Text>
					</Flex>

					<Flex align={"center"} gap={"0.5rem"} justify={justify}>
						<Text className={s.cardContentPrice}>$5.99</Text>
						<div className={s.priceSection}>
							<Text className={s.priceSectionMonth}>for 6 months</Text>
							<Text className={s.priceSectionInfo}>$47.99</Text>
						</div>
					</Flex>

					<Flex direction={"column"} gap={"0.5rem"} mt={"1.80rem"}>
						<FilledButton
							fullWidth
							size="2.75rem"
							className={s.subscribeButton}
							loading={loading}
							onClick={handleSubscribe}
						>
							{buttonText}
						</FilledButton>

						<Text className={s.pricingCardBottomText}>
							{unsubscribe ? (
								<Text
									className={s.pricingCardUnsubscribe}
									onClick={onClickOnUnSubscribe}
								>
									Unsubscribe
								</Text>
							) : (
								"$7.99 per month after 6-month offer"
							)}
						</Text>
					</Flex>
				</Stack>
			</Box>
		</div>
	)
}
