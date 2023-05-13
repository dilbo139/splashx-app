import { Box, Container } from "@chakra-ui/react";
import Hero from "../Hero";
import MainFeature from "../MainFeature";
import AnimeList from "../AnimeList";

export default function Primary() {
  return (
    <Box>
      <Hero />
      <MainFeature />
      <AnimeList />
    </Box>
  );
}
