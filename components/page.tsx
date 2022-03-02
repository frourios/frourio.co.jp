import type { NextPage } from "next";
import { ReactNode } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
type Props = {
  pageTitle?: string;
  children: ReactNode;
};
const Main = ({ children }: Props) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
