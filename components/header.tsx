import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  Stack,
  Box,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "./logo";

const headerItemStyle = {
  padding: "0 1.5rem",
  fontSize: "1.6rem",
};

const PCLayout = () => {
  return (
    <Stack
      w="100%"
      direction={{ base: "column", md: "row" }}
      display={{ base: "none", md: "flex" }}
      alignItems="center"
      justifyContent="flex-end"
      pr={20}
    >
    </Stack>
  );
};

const SPLayout = () => {
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      alignItems="center"
      justifyContent="flex-end"
      w="100%"
    >
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          icon={<HamburgerIcon />}
          variant="outline"
          mr={20}
          bg="transparent"
          css={{ border: "none" }}
        />
        <MenuList fontSize="1.5rem">
          <Link href="/">
            <MenuItem>HOME</MenuItem>
          </Link>
          <Link href="/company_info">
            <MenuItem>会社情報</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
};

const Header = () => {
  return (
    <Box
      w="100vw"
      position="fixed"
      top="0"
      display="flex"
      css={{
        padding: ".5rem 0",
        zIndex: "10",
      }}
    >
      <Link href="/" style={{ textDecoration: "none" }}>
        <Logo />
      </Link>
      <PCLayout />
      <SPLayout />
    </Box>
  );
};

export default Header;
