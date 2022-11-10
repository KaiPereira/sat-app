import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SAT IS GOING DOWN</title>
        <meta name="author" content="Kai Pereira, Sunrit Jana, Avichal Pandey" />
        <meta name="keywords" content="SAT, SAT Assistance, Assistance, SAT Tool, Tool" />
        <meta name="description" content="The SAT Assistance Tool assists students in the final outcome of their SAT test. We use Machine Learning and AI to show the process of solving a problem so you understand it." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
