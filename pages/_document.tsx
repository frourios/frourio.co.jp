import { Html, Head, Main, NextScript } from "next/document";

function MyLayout() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="logo.svg" sizes="64x64" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
export default MyLayout;
