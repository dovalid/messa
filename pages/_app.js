import { ChakraProvider } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import Head from "next/head"
import theme from "../theme"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MESSA</title>
        <meta
          name="description"
          content="Orvosi szakterület-választó platform"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
