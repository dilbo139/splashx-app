import { Flex, Grid, GridItem, Box, Text } from "@chakra-ui/react";
import AnimeFrame from "./layouts/AnimeFrame";

const ImageLinks: string[] = [];

for (let i = 1; i <= 15; i++) {
  const imageName = `image_${i}.svg`;
  ImageLinks.push(imageName);
}

export default function AnimeList() {
  return (
    <Box>
      <Text
        color={"brand.white"}
        fontSize={"4xl"}
        fontWeight={"bold"}
        pb={4}
        pl={6}
      >
        This Week Trending Animes
      </Text>
      <Flex w={"full"} h={"95vh"} justifyContent={"center"}>
        <Grid
          templateRows="repeat(3,1fr)"
          templateColumns="repeat(5,1fr)"
          px={8}
        >
          {ImageLinks.map((image, index) => (
            <AnimeFrame key={image} fileName={image} gridItemKey={index} />
          ))}
        </Grid>
      </Flex>
    </Box>
  );
}
