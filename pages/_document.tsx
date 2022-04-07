import { Html, Head, Main, NextScript } from "next/document";

function MyLayout() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.svg" sizes="64x64" />
        <meta property="og:image" content="ogp.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default MyLayout;
