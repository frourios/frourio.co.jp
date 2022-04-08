import { Html, Head, Main, NextScript } from "next/document";

function MyLayout() {
  const baseUrl = "https://frourio.co.jp";
  return (
    <Html>
      <Head>
        <link rel="icon" href="favicon.svg" sizes="64x64" />
        <meta name="og:image" key="ogImage" content={`${baseUrl}/ogp.png`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default MyLayout;
