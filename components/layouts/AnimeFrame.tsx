import { GridItem } from "@chakra-ui/react";

interface AnimeFrameProps {
  fileName: string;
  gridItemKey: number;
}

export default function AnimeFrame(props: AnimeFrameProps) {
  return (
    <GridItem
      key={props.gridItemKey}
      bg={"white"}
      w="20vw"
      backgroundImage={`url('/images/animeList/${props.fileName}')`}
      backgroundSize={"cover"}
      backgroundPosition={"top center"}
    ></GridItem>
  );
}
