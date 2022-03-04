import { Link, Stack, Box } from "@chakra-ui/react";

const headerItemStyle = {
  padding: "0 1.8rem",
  fontSize: "1.3rem",
};

const PCLayout = () => {
  return (
    <Stack
      w="100%"
      direction="column"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box>
        <Link href="/" style={headerItemStyle}>
          HOME
        </Link>
        <Link href="/company_info" style={headerItemStyle}>
          会社情報
        </Link>
      </Box>
      <h3 style={{ fontSize: "1.2rem", marginTop: "1rem" }}>©Frourio Inc</h3>
    </Stack>
  );
};

const Footer = () => {
  return (
    <Box
      w="100vw"
      h="11vh"
      position="absolute"
      alignItems="center"
      bg="#ffffff"
      display="flex"
      css={{
        borderTop: "solid 2px #3AC9D2",
      }}
    >
      <PCLayout />
    </Box>
  );
};

export default Footer;
