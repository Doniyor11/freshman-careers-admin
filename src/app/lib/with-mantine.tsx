import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import "@mantine/dropzone/styles.css"
import { ComponentType } from "react"

export const WithMantine =
  <T extends object>(Component: ComponentType<T>) =>
  (props: T) => (
    <MantineProvider>
      <Component {...props} />
    </MantineProvider>
  )
