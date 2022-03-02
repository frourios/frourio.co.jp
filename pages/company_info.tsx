import Head from "next/head";
import { Table, Tbody, Tr, Td } from "@chakra-ui/react";
import Layout from "../components/page";

const Item = (props: { sub: string; val: string }) => {
  return (
    <Tr>
      <Td borderColor="gray.300" padding="4rem 0" lineHeight="1.5em">
        {props.sub}
      </Td>
      <Td borderColor="gray.300" lineHeight="1.5em">
        {props.val}
      </Td>
    </Tr>
  );
};

const Main = () => {
  return (
    <Layout pageTitle="会社情報">
      <Head>
        <title> 会社情報 | フルーリオ株式会社</title>
      </Head>
      <div
        style={{
          backgroundColor: "#3AC9D2",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            fontSize: "4rem",
            textAlign: "center",
            fontWeight: "bold",
            letterSpacing: "0.88rem",
          }}
        >
          会社情報
        </h3>
      </div>

      <Table
        maxW="900px"
        m="15rem auto"
        w="80%"
        fontSize={{ base: "1.6rem", md: "1.8rem" }}
        lineHeight="1.5em"
      >
        <Tbody>
          <Item sub="会社名" val="フルーリオ株式会社" />
          <Item sub="代表取締役" val="松田 光秀" />
          <Item sub="所在地" val="東京都北区赤羽2-4-14 4A" />
          <Item sub="資本金" val="10万円" />
          <Tr>
            <Td
              rowSpan={3}
              borderColor="gray.300"
              padding="4rem 0"
              lineHeight="1.5em"
            >
              業務内容
            </Td>
            <Td borderColor="gray.300" padding="4rem 0" lineHeight="1.55em">
              コンピューターシステム及びソフトウェアの企画、開発・販売及びそれらの受託
              <br />
              プログラミング学習サービスの開発・企画・運営
              <br />
              ソフトウェアの研究開発、提供、技術指導及びコンサルタント業
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Layout>
  );
};

export default Main;
