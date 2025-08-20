import { useGetCompaniesQuery } from "@/feature/companies/list/api/query.ts"
import { IGetCompanies } from "@/feature/companies/list/api/types.ts"
import { useEditInternshipQuery } from "@/feature/internships/edit/api/query.ts"
import { EditInternshipScheme } from "@/feature/internships/edit/api/schema.ts"
import { IEditInternships } from "@/feature/internships/edit/api/types.ts"
import { useGetInternshipQuery } from "@/feature/internships/list/api/query.ts"
import { yupResolver } from "@hookform/resolvers/yup"
import { Container, Flex, Text } from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import dayjs from "dayjs"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Controller, useForm } from "react-hook-form"

import IconBack from "@/shared/assets/images/icon/chevron_backward5.svg"
import { EnvKeys } from "@/shared/constants/env.ts"
import { ImageUpload, Select } from "@/shared/ui"
import { FilledButton } from "@/shared/ui/buttons"
import { InputOutlined } from "@/shared/ui/inputs/input-outlined"

import s from "./styles.module.scss"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

export const InternshipEdit = () => {
  const router = useRouter()
  const params = useParams()
  const [file, setFile] = useState<File | null>(null)
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])

  const { data: DefaultValue } = useGetInternshipQuery(Number(params?.id))

  const { data: CompaniesData } = useGetCompaniesQuery({
    title: undefined,
    internship_count_range: undefined,
  })

  const {
    watch,
    reset,
    control,
    getValues,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm<IEditInternships>({
    mode: "all",
    resolver: yupResolver(EditInternshipScheme),
  })

  useEffect(() => {
    reset({
      company_id: DefaultValue?.company_id.toString(),
      title: DefaultValue?.title,
      payment_status: DefaultValue?.payment_status,
      payment_amount: DefaultValue?.payment_amount,
      payment_regularity: DefaultValue?.payment_regularity,
      format: DefaultValue?.format,
      education: DefaultValue?.education,
      schedule: DefaultValue?.schedule,
      working_hours: DefaultValue?.working_hours,
      description: DefaultValue?.description,
      requirements: DefaultValue?.requirements,
      conditions: DefaultValue?.conditions,
    })
    setValue([
      dayjs(DefaultValue?.internship_start_date).toDate(),
      dayjs(DefaultValue?.internship_end_date).toDate(),
    ])
  }, [DefaultValue])

  const onClose = () => {
    setFile(null)
    reset({})
  }

  const { mutate, isPending } = useEditInternshipQuery(onClose)

  const onSubmit = (data: IEditInternships) => {
    mutate({
      ...data,
      id: DefaultValue?.id,
      picture: file,
      internship_start_date: value[0]
        ? dayjs(value[0]).format("DD/MM/YYYY")
        : undefined,
      internship_end_date: value[1]
        ? dayjs(value[1]).format("DD/MM/YYYY")
        : undefined,
    })
  }
  watch("payment_status")

  return (
    <Container size={"1440px"} className={s.internshipInnerInfoWrapper}>
      <Flex
        align={"center"}
        onClick={() => router.push("/internships")}
        w={"fit-content"}
      >
        <IconBack />
        <Text component={"p"} className={s.backText}>
          Go back
        </Text>
      </Flex>
      <Flex mb={"2.5rem"} direction={"column"}>
        <Text component={"h1"} className={s.title}>
          Editing an internship
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={"2rem"}>
          {/* 1 */}
          <Flex direction={"column"} gap={"1.5rem"} flex={"50%"}>
            <Flex direction={"column"}>
              <Text component={"h3"} className={s.subTitle}>
                Basic information
              </Text>
              <Flex direction={"column"} gap={"0.5rem"}>
                <Controller
                  name={"company_id"}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder={"Company"}
                      data={CompaniesData?.map((i: IGetCompanies) => ({
                        value: i?.id ? String(i?.id) : "",
                        label: i?.title || "Untitled",
                      }))}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name={"title"}
                  control={control}
                  render={({ field }) => (
                    <InputOutlined
                      placeholder={"Title of internship"}
                      {...field}
                    />
                  )}
                />

                <DatePickerInput
                  type="range"
                  valueFormat={"DD.MM.YY"}
                  placeholder="Internship Date"
                  className={s.rangeInput}
                  classNames={{
                    input: s.datePickerInput,
                    placeholder: s.datePickerPlaceholder,
                  }}
                  value={value}
                  onChange={setValue}
                />
              </Flex>
            </Flex>
            <Flex direction={"column"}>
              <Text component={"h3"} className={s.subTitle}>
                Payments
              </Text>
              <Flex direction={"column"} gap={"0.5rem"}>
                <Controller
                  name={"payment_status"}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder={"Present/Not present"}
                      data={["Present", "Not Present"]}
                      {...field}
                    />
                  )}
                />

                {getValues("payment_status") === "Present" && (
                  <>
                    <Controller
                      name={"payment_amount"}
                      control={control}
                      render={({ field }) => (
                        <InputOutlined
                          placeholder={"Payment amount"}
                          type={"number"}
                          {...field}
                        />
                      )}
                    />

                    <Controller
                      name={"payment_regularity"}
                      control={control}
                      render={({ field }) => (
                        <Select
                          placeholder={"Regularity of payment"}
                          data={[
                            "Daily",
                            "Weekly",
                            "Monthly",
                            "At the end of internship",
                          ]}
                          {...field}
                        />
                      )}
                    />
                  </>
                )}
              </Flex>
            </Flex>
            <Flex direction={"column"} mt={"2.5rem"}>
              <Text component={"h3"} className={s.subTitle}>
                More info
              </Text>
              <Flex direction={"column"} gap={"0.5rem"}>
                <Controller
                  name={"education"}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder={"Education"}
                      data={[
                        "High School",
                        "High School Graduate",
                        "College 1st - 2nd Year",
                        "College 3rd - 4th Year",
                        "College Graduate",
                      ]}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name={"format"}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder={"Format"}
                      data={["Remote", "Office", "Hybrid"]}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name={"schedule"}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder={"Schedule"}
                      data={[
                        "5/2",
                        "6/1",
                        "2/2",
                        "Flexible schedule",
                        "part-time",
                        "full-time",
                        "custom schedule",
                      ]}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name={"working_hours"}
                  control={control}
                  render={({ field }) => (
                    <Select
                      placeholder={"Working hours"}
                      data={[
                        "09:00-18:00",
                        "10:00-19:00",
                        "Negotiated with Company",
                      ]}
                      {...field}
                    />
                  )}
                />
              </Flex>
            </Flex>
            <FilledButton
              type={"submit"}
              fullWidth
              h={"3.5rem"}
              disabled={!isDirty || !isValid}
              loading={isPending}
            >
              Publish
            </FilledButton>
          </Flex>
          {/* 2 */}
          <Flex
            direction={"column"}
            className={s.imageWrapper}
            flex={"50%"}
            gap={"1.5rem"}
          >
            <Controller
              name={"picture"}
              control={control}
              render={({ field }) => (
                <ImageUpload
                  setUploadFile={(file) => {
                    setFile(file)
                    field.onChange(file)
                  }}
                  defaultImage={
                    DefaultValue?.picture &&
                    `${EnvKeys.NEXT_HOST}/${DefaultValue?.picture}`
                  }
                />
              )}
            />

            <Flex direction={"column"}>
              <Text component={"h3"} className={s.subTitle}>
                Description
              </Text>

              <Controller
                name={"description"}
                control={control}
                render={({ field }) => (
                  <ReactQuill
                    className={s.textArea}
                    placeholder="Internship Description"
                    {...field}
                  />
                )}
              />

              <Controller
                name={"requirements"}
                control={control}
                render={({ field }) => (
                  <ReactQuill
                    className={s.textArea}
                    placeholder="Internship Requirements"
                    {...field}
                  />
                )}
              />

              <Controller
                name={"conditions"}
                control={control}
                render={({ field }) => (
                  <ReactQuill
                    className={s.textArea}
                    placeholder="Internship Conditions"
                    {...field}
                  />
                )}
              />
            </Flex>
          </Flex>
        </Flex>
      </form>
    </Container>
  )
}
