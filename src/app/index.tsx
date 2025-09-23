import { AppProps } from "next/app"
import Head from "next/head"
import React from "react"
import "react-quill/dist/quill.snow.css"

import "@/shared/styles/app.scss"

import { withHocs } from "./lib/with-hocs"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Freshman Careers</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default withHocs(App)
