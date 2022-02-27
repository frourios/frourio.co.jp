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
        <title>会社情報</title>
      </Head>
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
          <Item
            sub="事業内容"
            val="ソフトウェアの研究開発、提供、技術指導及びコンサルタント業"
          />
        </Tbody>
      </Table>
    </Layout>
  );
};

export default Main;
