import { Input } from "@mantine/core"
import cx from "clsx"
import React, { forwardRef } from "react"

import s from "./styles.module.scss"
import { IInputStyled } from "./types"

export const InputOutlined = forwardRef<HTMLInputElement, IInputStyled>(
  (
    { error, height = 64, component, mask, className, ...props }: IInputStyled,
    ref,
  ) => (
    <>
      <Input
        ref={ref}
        component={component}
        mask={mask}
        styles={{ input: { height } }}
        className={cx(s.input, className, {
          [s.error]: error,
        })}
        {...props}
      />
    </>
  ),
)

InputOutlined.displayName = "InputOutlined"
