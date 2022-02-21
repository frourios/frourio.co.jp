import styled from "styled-components";
import Image from "next/image";

const headerStyle = {
  display: "flex",
  height: "5rem",
  width: "100%",
  justifyContent: "center",
};

const headerItemStyle = {
  padding: "0.78rem 1.5rem",
};

export default () => {
  return (
    <div>
      <div style={headerStyle}>
        <Image src="/logo.svg" height={40} width={40} />
        <p style={headerItemStyle}>HOGE</p>
        <p style={headerItemStyle}>HOGE</p>
        <p style={headerItemStyle}>HOGE</p>
        <p style={headerItemStyle}>HOGE</p>
      </div>
    </div>
  );
};
