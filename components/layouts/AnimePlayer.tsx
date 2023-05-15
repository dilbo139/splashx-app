import { Box, Flex, Image } from "@chakra-ui/react";
import Footer from "./Footer";
import { MediaRenderer } from "@thirdweb-dev/react";

export default function AnimePlayer() {
  return (
    <Flex justifyContent={"center"} w={"auto"} h={"full"}>
      {/* <Image src="/images/player-image.svg" />
       */}

      <MediaRenderer
        src="ipfs://Qmefue6LRTZjhDxQCbR61gJemhZqPzUJLiSHkxWM6Nf3VD/Gen-1%20OnePiece%20(1).MP4"
        controls
        height="100%"
        width="100%"
        requireInteraction
      />
    </Flex>
  );
}
