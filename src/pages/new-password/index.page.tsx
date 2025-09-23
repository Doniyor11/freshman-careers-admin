import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Flex, Text } from "@mantine/core"
import Cookies from "js-cookie"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React, { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

import { useNewPasswordQuery } from "@/pages/new-password/api/query.ts"
import { NewPasswordScheme } from "@/pages/new-password/api/scheme.ts"
import { INewPassword } from "@/pages/new-password/api/types.ts"

import { TOKEN } from "@/shared/constants/env.ts"
import { Input } from "@/shared/ui"

import s from "./styles.module.scss"

const PublicRoute = dynamic(() => import("@/widgets/public-route"), {
  ssr: false,
})

const NewPassword = () => {
  const router = useRouter()
  const SignupToken = Cookies.get(TOKEN.SIGNUP_TOKEN)

  useEffect(() => {
    if (!SignupToken) {
      router.push("/signup")
    }
  }, [SignupToken])

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<INewPassword>({
    mode: "onChange",
    resolver: yupResolver(NewPasswordScheme),
  })
  const { mutate, isPending } = useNewPasswordQuery(() => {
    router.push("/companies")
    sessionStorage.removeItem("email")
  })
  const onSubmit = (data: INewPassword) => {
    const email = sessionStorage.getItem("email")

    mutate({
      login: email?.split("@")[0],
      password: data?.password,
      password_confirmation: data?.password_confirmation,
      signup_token: SignupToken,
    })
  }

  return (
    <PublicRoute>
      <Flex align={"center"} justify={"center"} h={"100vh"}>
        <div className={s.card}>
          <Text className={s.title}>Enter a new password</Text>
          <Text className={s.subtitle}>
            Enter the password and repeat it again
          </Text>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name={"password"}
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.password?.message}
                  height={64}
                  label={"New password"}
                  type={"password"}
                  {...field}
                />
              )}
            />

            <Controller
              name={"password_confirmation"}
              control={control}
              render={({ field }) => (
                <Input
                  error={errors?.password_confirmation?.message}
                  mt={16}
                  height={64}
                  type={"password"}
                  label={"Repeat the password"}
                  {...field}
                />
              )}
            />

            <Button
              type={"submit"}
              loading={isPending}
              className={s.formBtn}
              disabled={!isValid || !isDirty}
            >
              Continue
            </Button>
          </form>
        </div>
      </Flex>
    </PublicRoute>
  )
}

export default NewPassword
