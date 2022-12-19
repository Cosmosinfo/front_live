import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { GlobalStyles } from "components/styles/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>Milkomeda</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </>
  );
}
