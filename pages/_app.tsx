import Head from 'next/head';

import Layout from '../components/Layout';

import '../styles/globals.scss';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SAT IS GOING DOWN</title>
        <meta
          name="author"
          content="Kai Pereira, Sunrit Jana, Avichal Pandey"
        />
        <meta
          name="keywords"
          content="SAT, SAT Assistance, Assistance, SAT Tool, Tool"
        />
        <meta
          name="description"
          content="The SAT Assistance Tool assists students in the final outcome of their SAT test. We use Machine Learning and AI to show the process of solving a problem so you understand it."
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@500;600;700;800;900&family=Poppins:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
