import type { NextPage } from "next";
import Slider from "../components/slider";
import Tweets from "../components/Tweet";
import Layout from "../components/page";
import Section from "../components/section";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Home: NextPage = () => {
  const slideInfo = [
    { path: "frourio.png", url: "frouriojs/frourio" },
    { path: "aspida.png", url: "aspida/aspida" },
    { path: "pathpida.png", url: "aspida/pathpida" },
  ];

  return (
    <Layout>
      <Head>
        <title>フルーリオ株式会社</title>
      </Head>
      <Box
        height={{ base: "50vh", md: "50vh" }}
        width="100vw"
        css={{ marginTop: "15rem" }}
      >
        <Slider info={slideInfo} />
      </Box>
      <Section title="NEWS" kana="ニュース">
        <Tweets />
      </Section>
    </Layout>
  );
};

export default Home;
