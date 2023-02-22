import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import React from "react";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
          <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>


          <script src="https://apis.google.com/js/platform.js" async defer></script>
          <meta name="google-signin-client_id" content="181931049890-18f0g8iibl4ovduro9jehsjuekfnef5k.apps.googleusercontent.com"></meta>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
