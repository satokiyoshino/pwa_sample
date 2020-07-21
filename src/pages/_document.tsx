import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";


class CustomDocument extends Document {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <meta name="viewport" content="width=device-width,height=device-height" key="viewport" />
          <link rel='manifest' href='../static/manifest.json' />
          <link rel='icon' type="image/png" href='./icons/icon-512x512.png' />
          <link rel="apple-touch-icon" type="image/png" sizes="180x180" href="./icons/icon-192x192.png" />
        </Head>

        <body>
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;