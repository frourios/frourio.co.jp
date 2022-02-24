import type { NextPage } from "next";
import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
type Props = {
  pageTitle?: string;
  children: ReactNode;
};
const Main = ({ pageTitle, children }: Props) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
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
          {pageTitle}
        </h3>
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Main;
