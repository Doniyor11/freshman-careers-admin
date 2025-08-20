import { Input } from "@mantine/core"
import cx from "clsx"
import { FC } from "react"

import s from "./styles.module.scss"
import { IWrapperProps } from "./types.ts"

export const InputWrapperStyled: FC<IWrapperProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Input.Wrapper className={cx(s.inputWrapper, className)} {...props}>
      {children}
    </Input.Wrapper>
  )
}
