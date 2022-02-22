import { Image } from "@chakra-ui/react";
const Logo = () => {
  return (
    <div style={{ display: "flex", margin: "1rem .2rem 1rem 3rem" }}>
      <Image src="/logo.svg" boxSize="40px" />
      <p style={{ fontSize: "2rem", fontWeight: "bold", paddingTop: ".2rem" }}>
        frourio
      </p>
    </div>
  );
};

export default Logo;
