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
      <Link style={headerItemStyle}>HOGE</Link>
      <Link style={headerItemStyle}>HOGE</Link>
      <Link style={headerItemStyle}>HOGE</Link>
      <Link style={headerItemStyle}>HOGE</Link>
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
          aria-label="Options"
          mr={20}
        />
        <MenuList>
          <Link href="/">
            <MenuItem as={Link}>HOGE</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem as={Link}>HOGE</MenuItem>
          </Link>
          <Link href="/">
            <MenuItem as={Link}>HOGE</MenuItem>
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
      bg="#ffffff"
      display="flex"
      css={{ boxShadow: "0 0 0 2px rgba(34,120,126,.2)" }}
    >
      <Logo />
      <PCLayout />
      <SPLayout />
    </Box>
  );
};

export default Header;
