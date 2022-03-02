import { Image } from "@chakra-ui/react";
const Logo = () => {
  return (
    <div style={{ display: "flex", margin: "1rem .2rem 1rem 3rem" }}>
      <Image src="/logo.svg" w="14rem" height="100%" alt="logo" />
    </div>
  );
};

export default Logo;
