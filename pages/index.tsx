import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Slider from "../components/slider";
import styled from "styled-components";

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
      </ContentWrapper>
    </div>
  );
};

export default Home;
