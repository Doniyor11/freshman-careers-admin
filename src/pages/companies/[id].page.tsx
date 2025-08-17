import { useInternshipDeleteStore } from "@/feature/internships/delete/model"
import { useApplicationFilterStore } from "@/feature/internships/filter-internship/model"
import { useGetInternshipsQuery } from "@/feature/internships/list/api/query.ts"
import { IGetInternship } from "@/feature/internships/list/api/types.ts"
import s from "@/feature/internships/list/ui/internship-profile.module.scss"
import { Box, Container, Flex, Grid, Menu, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import dayjs from "dayjs"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import React, { useMemo } from "react"

import Icon2 from "@/shared/assets/images/icon/chevron_backward3.svg"
import Icon3 from "@/shared/assets/images/icon/chevron_backward-small.svg"
import { EnvKeys } from "@/shared/constants/env.ts"
import { InternshipsCard } from "@/shared/ui"

const PrivateRoute = dynamic(() => import("@/widgets/private-route"), {
	ssr: false,
})
const CompanyInternships = () => {
	const params = useParams()
	const router = useRouter()
	const matches = useMediaQuery("(max-width: 1024px)")
	const matchesMobile = useMediaQuery("(max-width: 576px)")
	const [data_order, setDataOrder] = useApplicationFilterStore((s) => [
		s.data_order,
		s.setDataOrder,
	])

	const [setInternshipDelete, setInternshipDeleteId] = useInternshipDeleteStore(
		(s) => [s.setInternshipDelete, s.setInternshipDeleteId],
	)

	const { data } = useGetInternshipsQuery({
		data_order,
	})

	const filteredData = useMemo(() => {
		return data.filter(
			(item: IGetInternship) => item.company_id === Number(params?.id),
		)
	}, [data, params?.id])

	const spanValue = matchesMobile ? 12 : matches ? 6 : 4

	return (
		<PrivateRoute>
			<Container
				size={"1440px"}
				p={matchesMobile ? "1.5rem 1rem 3rem" : "3rem 1rem 7.25rem"}
				bg={"#FAFBFF"}
			>
				<Box>
					<Flex justify={"space-between"} align={"center"}>
						<Text component={"h3"} className={s.myApplicationsTitle}>
							Internships
						</Text>
						<Menu
							trigger={"hover"}
							position={"bottom-end"}
							classNames={{
								dropdown: s.profileDropdown,
							}}
							width={"16rem"}
						>
							<Menu.Target>
								<Text className={s.myApplicationsSelect}>
									{data_order === "NEWEST"
										? "Most Recent"
										: data_order === "OLDEST"
										? "The oldest"
										: "Select order"}
									<Icon2 />
								</Text>
							</Menu.Target>

							<Menu.Dropdown>
								<Flex
									className={s.profileItem}
									justify={"space-between"}
									align={"center"}
									onClick={() => setDataOrder("NEWEST")}
								>
									<Text component={"span"} className={s.profileItemText}>
										Most Recent
									</Text>
									<Icon3 />
								</Flex>
								<Flex
									className={s.profileItem}
									justify={"space-between"}
									align={"center"}
									onClick={() => setDataOrder("OLDEST")}
								>
									<Text component={"span"} className={s.profileItemText}>
										The oldest
									</Text>
									<Icon3 />
								</Flex>
							</Menu.Dropdown>
						</Menu>
					</Flex>
					<Grid mt={"1.5rem"} gutter={"1.5rem"}>
						{filteredData?.length > 0 ? (
							filteredData?.map((i: IGetInternship, index: number) => (
								<Grid.Col span={spanValue} key={index}>
									<InternshipsCard
										companyName={i?.company_title}
										imageSrc={`${EnvKeys.NEXT_HOST}/${i?.picture}`}
										imageAlt={i?.title}
										iconSrc={`${EnvKeys.NEXT_HOST}/${i?.company_image}`}
										iconAlt={i?.company_title}
										day={
											i?.date_posted &&
											dayjs(i.date_posted).isSame(dayjs(), "day")
												? "today"
												: dayjs(i.date_posted).format("YYYY-MM-DD")
										}
										title={i?.title}
										description={i?.description}
										datesLabel={"Internship Dates:"}
										dates={`${dayjs(i?.internship_start_date).format(
											"DD.MM.YYYY",
										)} - ${dayjs(i?.internship_end_date).format("DD.MM.YYYY")}`}
										onResponses={() => router.push("/responses")}
										onEdit={() => router.push(`/internships/edit/${i?.id}`)}
										onDelete={() => {
											setInternshipDelete(true)
											setInternshipDeleteId(i?.id)
										}}
									/>
								</Grid.Col>
							))
						) : (
							<Grid.Col span={12}>
								<Box className={"no-data__available"}>
									<Text>No data available</Text>
								</Box>
							</Grid.Col>
						)}
					</Grid>
				</Box>
			</Container>
		</PrivateRoute>
	)
}

export default CompanyInternships
