import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";

export default function NextAnime() {
  return (
    <Box>
      <VStack alignItems={"flex-start"} pt={"20"}>
        <Text fontSize={"4xl"} fontWeight={"bold"} pb={4}>
          Next Episode
        </Text>
        <HStack gap={10}>
          <Image src="/images/episode-2.svg" boxSize={"fit-content"} />
          <Image src="/images/episode-2.svg" boxSize={"fit-content"} />
        </HStack>
      </VStack>
    </Box>
  );
}
