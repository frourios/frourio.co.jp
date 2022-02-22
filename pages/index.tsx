import type { NextPage } from "next";
import Header from "../components/header";
import Slider from "../components/slider";
import Tweets from "../components/Tweet";
import { Box } from "@chakra-ui/react";

const sectionStyle: React.CSSProperties = {
  maxWidth: "900px",
  margin: "5rem auto 5rem auto",
  padding: "5rem 10rem",
  clear: "both",
};

const Home: NextPage = () => {
  const slideInfo = [
    { path: "frourio.png", url: "frouriojs/frourio" },
    { path: "aspida.png", url: "aspida/aspida" },
    { path: "pathpida.png", url: "aspida/pathpida" },
  ];

  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "#3AC9D2", height: "60vh" }}></div>
      <section style={sectionStyle}>
        <h2 style={{ fontSize: "3rem", textAlign: "center" }}>プロダクト</h2>
        <Slider info={slideInfo} />
      </section>
      <section style={sectionStyle}>
        <h2 style={{ fontSize: "3rem", textAlign: "center" }}>ツイート</h2>
        <Tweets />
      </section>
    </div>
  );
};

export default Home;
