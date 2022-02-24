import type { NextPage } from "next";
import Slider from "../components/slider";
import Tweets from "../components/Tweet";
import Layout from "../components/page";
import Section from "../components/section";

const Home: NextPage = () => {
  const slideInfo = [
    { path: "frourio.png", url: "frouriojs/frourio" },
    { path: "aspida.png", url: "aspida/aspida" },
    { path: "pathpida.png", url: "aspida/pathpida" },
  ];

  return (
    <Layout>
      <Slider info={slideInfo} />
      <Section title="NEWS" kana="ニュース">
        <Tweets />
      </Section>
    </Layout>
  );
};

export default Home;
