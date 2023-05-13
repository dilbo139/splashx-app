import {
  Box,
  Image,
  Link,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("black", "gray.900")}
      color={useColorModeValue("brand.gray", "gray.200")}
      mt={10}
      mb={4}
    >
      <Box py={4}>
        <Flex justifyContent={"center"} gap={4}>
          <Link href="https://twitter.com/splashdotwatch">
            <Image src="/images/twitter.png" />
          </Link>
          <Text>|</Text>
          <Link href="https://t.me/+HtLsWa3PB6AwMDk9">
            <Image src="/images/telegram.png" />
          </Link>
        </Flex>
        <Text pt={2} fontSize={"sm"} textAlign={"center"}>
          ⓒ 2023 SplashX. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
