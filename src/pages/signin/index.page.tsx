import { yupResolver } from "@hookform/resolvers/yup"
import { Button, Flex, Text } from "@mantine/core"
import cx from "clsx"
import dynamic from "next/dynamic"
import { useRouter } from "next/router"
import React from "react"
import { Controller, useForm } from "react-hook-form"

import { Input } from "@/shared/ui"

import { useSignInQuery } from "./api/query"
import { SignInScheme } from "./api/scheme"
import { ISignIn } from "./api/types"
import s from "./styles.module.scss"

const PublicRoute = dynamic(() => import("@/widgets/public-route"), {
  ssr: false,
})

const SignIn = () => {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<ISignIn>({
    mode: "onChange",
    resolver: yupResolver(SignInScheme),
  })

  const { mutate, isPending } = useSignInQuery(() => {
    router.push("/companies")
  })

  const onSubmit = (data: ISignIn) => {
    mutate(data)
  }

  return (
    <PublicRoute>
      <Flex align={"center"} justify={"center"} h={"100vh"}>
        <div className={s.card}>
          <Text className={s.title}>Account Login</Text>
          <Text className={s.subtitle}>
            Enter your email and password to log in to your account
          </Text>

          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name={"username"}
              control={control}
              render={({ field }) => (
                <Input
                  height={64}
                  label={"Email"}
                  error={errors?.username?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name={"password"}
              control={control}
              render={({ field }) => (
                <Input
                  mt={16}
                  height={64}
                  type={"password"}
                  label={"Password"}
                  error={errors?.password?.message}
                  {...field}
                />
              )}
            />

            <Button
              type={"submit"}
              loading={isPending}
              className={cx(s.formBtn, s.blue)}
              disabled={!isValid || !isDirty}
            >
              Sign in
            </Button>
          </form>
        </div>
      </Flex>
    </PublicRoute>
  )
}

export default SignIn
