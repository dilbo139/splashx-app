import { Box, Flex, Image } from "@chakra-ui/react";
import Footer from "./Footer";

export default function AnimePlayer() {
  return (
    <Flex justifyContent={"center"} w={"auto"} h={"full"}>
      <Image src="/images/player-image.svg" />
    </Flex>
  );
}
