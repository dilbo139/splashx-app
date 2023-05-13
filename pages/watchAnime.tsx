import AnimeInfo from "@/components/AnimeInfo";
import AnimePlayer from "@/components/layouts/AnimePlayer";
import MintNFT from "@/components/MintNFT";
import NextAnime from "@/components/NextAnime";
import TrendingAnime from "@/components/TreandingAnime";
import { Box, Flex } from "@chakra-ui/react";

export default function watchAnime() {
  return (
    <Box pb={10}>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <AnimePlayer />
        <Flex
          flexDirection={"column"}
          justifyContent={"flex-start"}
          h={"auto"}
          width={"80%"}
          m={0}
          py={20}
          color={"brand.white"}
          gap={10}
        >
          <AnimeInfo />
          <MintNFT />
          <NextAnime />
          <TrendingAnime />
        </Flex>
      </Flex>
    </Box>
  );
}
