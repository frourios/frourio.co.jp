import type { NextPage } from "next";
import Slider from "../components/slider";
import Tweets from "../components/Tweet";
import Layout from "../components/page";
import Section from "../components/section";
import Head from "next/head";

const Home: NextPage = () => {
  const slideInfo = [
    { path: "frourio.png", url:  "frourio.com" },
    { path: "aspida.png", url:   "github.com/aspida/aspida" },
    { path: "pathpida.png", url: "github.com/aspida/pathpida" },
  ];

  return (
    <Layout>
      <Head>
        <title>フルーリオ株式会社</title>
      </Head>
      <Slider info={slideInfo} />
      <Section title="NEWS" kana="ニュース">
        <Tweets />
      </Section>
    </Layout>
  );
};

export default Home;
