import { ReactNode } from "react";
import styled from "@emotion/styled";

const Section = styled.section`
  max-width: 900px;
  margin: 5rem auto;
  padding: 2rem 5rem;
  clear: both;
`;
const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 10rem;
  :after {
    content: "";
    position: absolute;
    top: calc(50% - 2px);
    left: 0;
    width: 100%;
    height: 5px;
    border-top: solid 1px #f4c41a;
    border-bottom: solid 1px #f4c41a;
  }
`;

const SectionTitleDiv = styled.div`
  display: inline-block;
  text-align: center;
  padding: 0 30px;
  background: #fff;
  z-index: 1;
`;

type Props = {
  title: string;
  kana: string;
  children?: ReactNode;
};
const Main = ({ title, kana, children }: Props) => {
  return (
    <Section>
      <SectionTitle>
        <SectionTitleDiv>
          <span
            style={{ fontSize: "3rem", display: "block", fontWeight: "500" }}
          >
            {title}
          </span>
          <span style={{ fontSize: "1.6rem", display: "block" }}>{kana}</span>
        </SectionTitleDiv>
      </SectionTitle>
      {children}
    </Section>
  );
};

export default Main;
