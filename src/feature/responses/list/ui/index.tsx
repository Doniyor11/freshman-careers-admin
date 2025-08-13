import { useResponseFilterStore } from "@/feature/responses/filter-response/model"
import { FilterResponse } from "@/feature/responses/filter-response/ui"
import {
	useGetResponsesQuery,
	useResponseStatusQuery,
} from "@/feature/responses/list/api/query.ts"
import { IGetResponse } from "@/feature/responses/list/api/types.ts"
import { Box, Container, Flex, Grid, Text } from "@mantine/core"
import dayjs from "dayjs"
import Image from "next/image"
import { useRouter } from "next/router"
import React from "react"

import { EnvKeys } from "@/shared/constants/env.ts"
import { FilledButton, OutlineButton } from "@/shared/ui/buttons"

import s from "./my-profile.module.scss"

interface ICardDataType {
	data: IGetResponse
}

export const ResponsesList = () => {
	const [companyId, status, date] = useResponseFilterStore((s) => [
		s.companyId,
		s.status,
		s.date,
	])
	const { data } = useGetResponsesQuery({
		status,
		company_id: companyId ? Number(companyId) : undefined,
		date_from: date[0] ? dayjs(date[0]).format("DD.MM.YYYY") : undefined,
		date_to: date[1] ? dayjs(date[1]).format("DD.MM.YYYY") : undefined,
	})
	return (
		<Container size={"1440px"} className={s.myProfileWrapper}>
			<Grid gutter={"1.5rem"}>
				<Grid.Col span={3}>
					<Flex direction={"column"} gap={"1.5rem"}>
						<FilterResponse />
					</Flex>
				</Grid.Col>
				<Grid.Col span={9}>
					<Flex mb={"2.5rem"}>
						<Text component={"h1"} className={s.title}>
							Responses
						</Text>
					</Flex>
					{/*	 -----------  Grid start ------------ */}
					<Grid>
						{data?.map((item: IGetResponse, index: number) => (
							<Grid.Col span={4} key={index}>
								<Card data={item} />
							</Grid.Col>
						))}
					</Grid>
					{/*	 -----------  Grid end ------------ */}
				</Grid.Col>
			</Grid>
		</Container>
	)
}

const Card = ({ data }: ICardDataType) => {
	const router = useRouter()

	const { mutate, isPending } = useResponseStatusQuery()

	const onChangeStatus = (status?: string) => {
		mutate({
			id: data?.id,
			status,
		})
	}

	const getStatusColor = (status?: string) => {
		switch (status) {
			case "Rejected":
				return "#CD0700"
			case "Accepted":
				return "#00C206"
			case "Pending":
			default:
				return "#004B84"
		}
	}
	return (
		<Box className={s.internshipsCardWrapper}>
			<Flex
				justify={"space-between"}
				align={"flex-start"}
				p={"1.5rem"}
				className={s.internshipsCardHead}
			>
				<Flex direction={"column"}>
					<Text component={"h3"} className={s.internshipsCardTitle}>
						{data?.hashed_id || "-"}
					</Text>
					<Text
						component={"h3"}
						className={s.status}
						c={getStatusColor(data?.status)}
					>
						{data?.status || "Pending"}
					</Text>
				</Flex>
				<Box className={s.internshipsCardDay}>
					{data?.application_date &&
					dayjs(data?.application_date).isSame(dayjs(), "day")
						? "today"
						: dayjs(data?.application_date).format("YYYY-MM-DD")}
				</Box>
			</Flex>
			<Box className={s.internshipsCardContent}>
				<Box>
					<Flex justify={"space-between"} align={"center"}>
						<Flex align={"center"} gap={10}>
							<Box className={s.internshipsCardIcon}>
								<Image
									src={`${EnvKeys.NEXT_HOST}/${data?.company?.image}`}
									alt={"iconAlt"}
									width={32}
									height={32}
									unoptimized
								/>
							</Box>
							<Text className={s.companyName}>{data?.company?.title}</Text>
						</Flex>
					</Flex>
					<Flex direction={"column"} m={"1.5rem 0 1.5rem"} gap={"0.75rem"}>
						<Text component={"h3"} className={s.internshipsCardTitle}>
							{data?.internship?.title || "-"}
						</Text>
						<Text component={"p"} className={s.internshipsCardDescription}>
							{data?.internship?.description || "-"}
						</Text>
					</Flex>
					<Flex direction={"column"} mb={"1.5rem"}>
						<Text component={"p"} className={s.internshipsCardDescription}>
							Internship Dates:
						</Text>
						<Text component={"p"} className={s.internshipsCardDate}>
							{`${data?.internship?.internship_start_date} - ${data?.internship?.internship_end_date}`}
						</Text>
					</Flex>
				</Box>
				<Box>
					<FilledButton
						fullWidth
						h={"2.75rem"}
						className={s.internshipsCardButton}
						onClick={() => router.push(`/internships/${data?.internship_id}`)}
					>
						View Summary
					</FilledButton>
					<Flex justify={"space-between"} gap={"0.5rem"} mt={"0.5rem"}>
						<OutlineButton
							fullWidth
							h={"2.75rem"}
							className={s.buttonOutline}
							loading={isPending}
							onClick={() => onChangeStatus("Accepted")}
							disabled={data?.status === "Accepted"}
						>
							Accept
						</OutlineButton>
						<OutlineButton
							fullWidth
							h={"2.75rem"}
							className={s.buttonOutline}
							loading={isPending}
							onClick={() => onChangeStatus("Rejected")}
							disabled={data?.status === "Rejected"}
						>
							Reject
						</OutlineButton>
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}
