import { ReactNode } from "react";
import {
  Box,
  Image,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Links = [
  { name: "Home", param: "/" },
  { name: "Generate Anime", param: "/generateAnime" },
  { name: "Watch Anime", param: "/watchAnime" },
  { name: "My Animes", param: "/myAnimes" },
];

const NavLink = ({
  children,
  param,
  name,
}: {
  children?: ReactNode;
  param: string;
  name: string;
}) => (
  <Link
    px={2}
    py={1}
    rounded={"sm"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray", "gray"),
    }}
    href={`${param}`}
  >
    {name}
  </Link>
);

export default function Simple() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("brand.black", "brand.white")} px={4} py={2}>
        <Flex
          h={20}
          alignItems={"center"}
          justifyContent={"space-between"}
          px={6}
        >
          <Link href="/" _hover={{ opacity: 0.7 }}>
            <Image width={"90%"} src="/images/splashX-logo.svg" alt="SplashX" />
          </Link>
          <Flex alignItems={"center"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack
              spacing={8}
              alignItems={"center"}
              paddingRight={"6"}
              fontWeight={500}
              textColor={useColorModeValue("brand.white", "brand.black")}
            >
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {Links.map((link) => (
                  <NavLink
                    key={link.name}
                    param={link.param}
                    name={link.name}
                  />
                ))}
              </HStack>
            </HStack>
            {/* Biconomy Sign-in */}
            <Stack direction={"row"} spacing={7}>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"lg"}
                  padding={"2"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  bg={useColorModeValue("brand.white", "brand.brand.black")}
                >
                  <Button
                    size={"lg"}
                    as={"a"}
                    fontSize={"md"}
                    fontWeight={700}
                    variant={"link"}
                    href={"#"}
                    textColor={useColorModeValue("brand.black", "brand.white")}
                  >
                    Connect Wallet
                  </Button>
                </MenuButton>
              </Menu>
            </Stack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.name} param={link.param} name={link.name} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
