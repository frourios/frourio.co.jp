import type { NextPage } from "next";
import Header from "../components/header";
import Footer from "../components/footer";
const Main: NextPage = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ backgroundColor: "#3AC9D2", height: "60vh" }}></div>
      {children}
      <Footer />
    </div>
  );
};

export default Main;
