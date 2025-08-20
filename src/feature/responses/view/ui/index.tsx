import IconBack from "@//shared/assets/images/icon/chevron_backward5.svg"
import { Anchor, Box, Container, Flex, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import React from "react"

import { EnvKeys } from "@/shared/constants/env.ts"

import { useGetResponseViewQuery } from "../api/query"
import s from "./internship-inner-info.module.scss"

export const ResponseView = () => {
  const matches = useMediaQuery("(max-width: 1024px)")
  const params = useParams()
  const router = useRouter()

  const { data } = useGetResponseViewQuery(Number(params?.id))
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
    <Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
      <Flex
        mb={12}
        align={"center"}
        p={matches ? "0 1rem" : 0}
        onClick={() => router.push("/responses")}
      >
        <IconBack />
        <Text className={s.backText}>Go back</Text>
      </Flex>

      <Flex align={"center"} justify={"space-between"} gap={16} p={"0 1rem"}>
        <Text className={s.title}>{data?.internship?.title || "-"}</Text>
        <Text className={s.status} color={getStatusColor(data?.status)}>
          {data?.status || "-"}
        </Text>
      </Flex>
      <Flex
        gap={"0.69rem"}
        mb={"0.5rem"}
        p={matches ? "0 1rem" : 0}
        align={"center"}
      >
        <Image
          src={`${EnvKeys.NEXT_HOST}/${data?.company?.image}`}
          alt={"apple"}
          width={42}
          height={42}
          className={s.companyLogo}
          unoptimized
        />
        <Text component={"p"} className={s.infoText}>
          {data?.company?.title}
        </Text>
      </Flex>
      <div className={s.infoWrapper}>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Full Name</Text>
          <Text className={s.text}>{data?.full_name || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Email</Text>
          <Text className={s.text}>{data?.email || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Mobile Number</Text>
          <Text className={s.text}>{data?.phone_number || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Currently study</Text>
          <Text className={s.text}>{data?.current_study || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Languages</Text>
          <Text className={s.text}>{data?.languages || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Future goals</Text>
          <Text className={s.text}>{data?.future_goals || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Past experience</Text>
          <Text className={s.text}>{data?.past_experience || "-"}</Text>
        </Box>
        <Box className={s.textWrapper}>
          <Text className={s.label}>Additional circumstances</Text>
          <Text className={s.text}>
            {data?.additional_circumstances || "-"}
          </Text>
        </Box>
      </div>
      <Flex
        p={matches ? "0 1rem" : 0}
        direction={matches ? "column" : "row"}
        align={"center"}
        gap={16}
        mt={24}
      >
        {data?.resume_url && (
          <Anchor
            target={"_blank"}
            className={s.downloadBtn}
            href={`${EnvKeys.NEXT_HOST}/${data?.resume_url}`}
          >
            View CV
          </Anchor>
        )}
        {data?.supporting_documents_path && (
          <Anchor
            target={"_blank"}
            className={s.downloadBtn}
            href={`${EnvKeys.NEXT_HOST}/${data?.supporting_documents_path}`}
          >
            View supporting documents
          </Anchor>
        )}
      </Flex>
    </Container>
  )
}
