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
          content="Preferencia-kérdőív alapú orvosi szakterület-választó platform"
        />
        <link
          rel="preload stylesheet"
          as="style"
          href="https://rsms.me/inter/inter.css"
          crossOrigin="anonymous"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
