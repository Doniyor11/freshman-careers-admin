import { ColorSchemeScript } from "@mantine/core"
import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="icon" href="/favicon.png" />
				<link
					href="https://fonts.cdnfonts.com/css/graphik-trial"
					rel="stylesheet"
				/>
				<ColorSchemeScript />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
