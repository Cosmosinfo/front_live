import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { GlobalStyles } from "components/styles/GlobalStyles";
import MainTop from "components/MainTop";
import MainLeft from "components/MainLeft";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "../store/ConfigStore";

const persistor = persistStore(store);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>FullDive</title>
      </Head>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <MainTop />
          <Wrap>
            <MainLeft />
            <Component {...pageProps} />
          </Wrap>
        </PersistGate>
      </Provider>
      <GlobalStyles />
    </>
  );
};

const Wrap = styled.div`
  display: flex;
  min-width: 100%;
  height: 100%;
  padding-top: 100px;
`;

export default App;
