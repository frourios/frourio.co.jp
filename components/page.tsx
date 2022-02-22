import type { NextPage } from "next";
import Header from "../components/header";
const Main: NextPage = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <div style={{ backgroundColor: "#3AC9D2", height: "60vh" }}></div>
      {children}
    </div>
  );
};

export default Main;
