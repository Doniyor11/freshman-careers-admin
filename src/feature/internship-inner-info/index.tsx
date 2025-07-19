import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import { Container, Flex, Text, Textarea } from "@mantine/core"
import React from "react"

import { ImageUpload, Select } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"

import s from "./internship-inner-info.module.scss"

export const InternshipInnerInfo = () => {
	return (
		<Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
			<Flex>
				<IconBack />
				<Text component={"p"} className={s.backText}>
					Go back
				</Text>
			</Flex>
			<Flex mb={"2.5rem"} direction={"column"}>
				<Text component={"h1"} className={s.title}>
					Adding an internship
				</Text>
			</Flex>
			<Flex gap={"2rem"}>
				{/* 1 */}
				<Flex
					direction={"column"}
					gap={"1.5rem"}
					flex={"50%"}
				>
					<Flex direction={"column"} >
						<Text component={"h3"} className={s.subTitle}>
							Basic information
						</Text>
						<Flex direction={"column"} gap={"0.5rem"}>
							<Select placeholder={"Company"} />
							<Select placeholder={"Title of internship"} />
							<Select placeholder={"Internship Date"} />
						</Flex>
					</Flex>
					<Flex direction={"column"} >
						<Text component={"h3"} className={s.subTitle}>
							Payments
						</Text>
						<Flex direction={"column"} gap={"0.5rem"}>
							<Select placeholder={"Present/Not present"} />
							<Select placeholder={"Payment amount"} />
							<Select placeholder={"Payment amount"} />
						</Flex>
					</Flex>
					<Flex direction={"column"} mt={"2.5rem"}>
						<Text component={"h3"} className={s.subTitle}>
							More info
						</Text>
						<Flex direction={"column"} gap={"0.5rem"}>
							<Select placeholder={"Education"} />
							<Select placeholder={"Format"} />
							<Select placeholder={"Schedule"} />
							<Select placeholder={"Working hours"} />
						</Flex>
					</Flex>
					<FilledButton fullWidth h={"3.5rem"}>
						Publish
					</FilledButton>
				</Flex>
				{/* 2 */}
				<Flex direction={'column'} className={s.imageWrapper} flex={"50%"} gap={'1.5rem'}>
					<ImageUpload/>
					<Flex direction={'column'}>
						<Text component={"h3"} className={s.subTitle}>
							Description
						</Text>
						<Textarea placeholder={"Internship Description"} rows={10}
							className={s.textArea}
						/>
						<Textarea placeholder={"Internship Requirements"} rows={10}
							className={s.textArea}
						/>
						<Textarea placeholder={"Internship Conditions"} rows={10}
							className={s.textArea}
						/>
					</Flex>
				</Flex>
			</Flex>
		</Container>
	)
}
