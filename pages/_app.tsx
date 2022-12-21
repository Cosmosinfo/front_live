import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { GlobalStyles } from "components/styles/GlobalStyles";
import MainTop from "components/MainTop";
import MainLeft from "components/MainLeft";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>FullDive</title>
      </Head>
      <MainTop />
      <Wrap>
        <MainLeft />
        <Component {...pageProps} />
      </Wrap>
      <GlobalStyles />
    </>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 100%;
`;
