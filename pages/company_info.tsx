import { Table, Tbody, Tr, Td } from "@chakra-ui/react";
import Layout from "../components/page";

const Item = (props: { sub: string; val: string }) => {
  return (
    <Tr>
      <Td padding="4rem 0">{props.sub}</Td>
      <Td>{props.val}</Td>
    </Tr>
  );
};

const Main = () => {
  return (
    <Layout>
      <Table maxW="900px" m="15rem auto" w="80%" fontSize="1.8rem">
        <Tbody>
          <Item sub="会社名" val="フルーリオ株式会社" />
          <Item sub="代表取締役" val="松田 光秀" />
          <Item sub="所在地" val="東京都北区赤羽2-4-14 4A" />
          <Item sub="資本金" val="10万円" />
          <Item sub="事業内容" val="OSSの開発運用保守" />
        </Tbody>
      </Table>
    </Layout>
  );
};

export default Main;
