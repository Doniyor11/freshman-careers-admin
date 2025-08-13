import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import { Box, Container, Flex, List, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import React from "react"

import { EnvKeys } from "@/shared/constants/env.ts"

import { useGetInternshipQuery } from "../api/query"
import s from "./internship-inner-info.module.scss"

export const InternshipInnerInfo = () => {
	const matches = useMediaQuery("(max-width: 1024px)")
	const params = useParams()
	const router = useRouter()

	const { data } = useGetInternshipQuery(Number(params?.id))

	const dataPriceInfo = [
		{
			title: "Payments",
			info: data?.payment_status || "-",
		},
		{
			title: "Education",
			info: data?.education || "-",
		},
		{
			title: "Format",
			info: data?.format || "-",
		},
		{
			title: "Schedule",
			info: data?.schedule || "-",
		},
		{
			title: "Working hours",
			info: data?.working_hours || "-",
		},
		{
			title: "Internship dates",
			info: `${data?.internship_start_date || "-"} - ${
				data?.internship_end_date || "-"
			}`,
		},
	]

	return (
		<Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
			<Flex
				onClick={() => router.push("/responses")}
				align={"center"}
				mb={12}
				p={matches ? "0 2rem" : ""}
			>
				<IconBack />
				<Text className={s.backText}>Go back</Text>
			</Flex>
			<Flex mb={matches ? "1rem" : "2.5rem"} p={matches ? "0 2rem" : ""}>
				<Text component={"h1"} className={s.title}>
					{data?.title}
				</Text>
			</Flex>
			<Flex
				gap={matches ? "1.5rem" : "2rem"}
				direction={matches ? "column-reverse" : "row"}
			>
				{/* 1 */}
				<Flex
					direction={"column"}
					flex={"auto"}
					justify={"space-between"}
					p={matches ? "0 2rem" : ""}
				>
					<Box>
						<Flex gap={"0.69rem"} mb={"0.5rem"} align={"center"}>
							<Image
								src={`${EnvKeys.NEXT_HOST}/${data?.company_image}`}
								alt={"apple"}
								width={42}
								height={42}
								className={s.companyLogo}
								unoptimized
							/>
							<Text component={"p"} className={s.infoText}>
								{data?.company_title}
							</Text>
						</Flex>
						<Flex mb={"2rem"}>
							<Text component={"p"} className={s.priceText}>
								{data?.salary}
							</Text>
						</Flex>
						<Flex direction={"column"} gap={"0.5rem"}>
							{dataPriceInfo?.map((item, index) => (
								<Text component={"p"} className={s.priceInfoText} key={index}>
									{item.title}: <b>{item.info}</b>
								</Text>
							))}
						</Flex>
					</Box>
				</Flex>
				{/* 2 */}
				<Box className={s.imageWrapper}>
					<Image
						src={`${EnvKeys.NEXT_HOST}/${data?.picture}`}
						alt={""}
						width={850}
						height={515}
						unoptimized
					/>
				</Box>
			</Flex>
			{/* ----------------- Bottom info ----------------- */}
			<Flex
				direction={"column"}
				m={"5rem 0 2.5rem 0"}
				gap={"0.5rem"}
				p={matches ? "0 2rem" : ""}
			>
				<Text component={"p"} className={s.descriptionTitle}>
					Description
				</Text>
				<Text component={"p"} className={s.description}>
					{data?.description || "-"}
				</Text>
			</Flex>
			<Flex
				m={"2.5rem 0 4rem 0"}
				gap={"2.5rem"}
				direction={matches ? "column" : "row"}
				p={matches ? "0 2rem" : ""}
			>
				{/* 1 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Requirements
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								{data?.requirements || "-"}
							</Text>
						</List.Item>
					</List>
				</Flex>
				{/*	2 */}
				<Flex direction={"column"} flex={1} gap={"0.5rem"}>
					<Text component={"p"} className={s.descriptionTitle}>
						Responsibilities
					</Text>
					<List className={s.list}>
						<List.Item>
							<Text component={"p"} className={s.description}>
								{data?.conditions || "-"}
							</Text>
						</List.Item>
					</List>
				</Flex>
			</Flex>
		</Container>
	)
}
