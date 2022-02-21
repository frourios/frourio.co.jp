import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Slider from "../components/slider";
import styled from "styled-components";

const TweetSection = () => {
  return (
    <div style={{ width: "40%", margin: "10rem auto 0 auto" }}>
      <a
        className="twitter-timeline"
        href="https://twitter.com/frourio_jp?ref_src=twsrc%5Etfw"
      >
        Tweets by frourio_jp
      </a>
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </div>
  );
};

const ContentWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Home: NextPage = () => {
  const slideInfo = [
    { path: "frourio.png", url: "frouriojs/frourio" },
    { path: "aspida.png", url: "aspida/aspida" },
  ];
  return (
    <div>
      <Header />
      <ContentWrapper>
        <Slider info={slideInfo} />
        <TweetSection />
      </ContentWrapper>
    </div>
  );
};

export default Home;
