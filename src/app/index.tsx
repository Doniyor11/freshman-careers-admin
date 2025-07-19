import { AppProps } from "next/app"
import React from "react"

import "@/shared/styles/app.scss"

import { withHocs } from "./lib/with-hocs"

const App = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />
}

export default withHocs(App)
