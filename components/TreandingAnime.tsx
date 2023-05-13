import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function TrendingAnime() {
  return (
    <Box>
      <VStack alignItems={"flex-start"} pt={"20"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={4}>
          Trending Anime
        </Text>
        <HStack gap={10}>
          <Image src="/images/trending-1.svg" boxSize={"fit-content"} />
          <Image src="/images/trending-2.svg" boxSize={"fit-content"} />
          <Image src="/images/trending-3.svg" boxSize={"fit-content"} />
        </HStack>
      </VStack>
    </Box>
  );
}
