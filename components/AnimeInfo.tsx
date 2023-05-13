import {
  Box,
  HStack,
  Image,
  Text,
  Flex,
  VStack,
  Button,
  color,
  Stack,
} from "@chakra-ui/react";

{
  /* <Image src="/images/globe.png" boxSize={"fit-content"} /> */
}

export default function AnimeInfo() {
  return (
    <Box>
      <Flex flexDirection={"column"} width={"95%"}>
        <HStack spacing={12}>
          <HStack>
            <Image src="/images/eye.png" boxSize={"fit-content"} />
            <Text> 232,410,198 Views</Text>
          </HStack>
          <HStack>
            <Image src="/images/globe.png" boxSize={"fit-content"} />
            <Text> Updated 3 days ago</Text>
          </HStack>
        </HStack>
        <HStack justifyContent={"space-between"} h={"10vh"}>
          <Text fontSize={"4xl"} fontWeight={"semibold"}>
            Episode1. Man In The Mars
          </Text>
          <HStack gap={10}>
            <HStack gap={2}>
              <Image src="/images/avatar.svg" boxSize={"fit-content"} />
              <VStack alignItems={"flex-start"}>
                <Text fontSize={"md"} fontWeight={"bold"}>
                  Tokyonight
                </Text>
                <Text>20k Followers | 12 Animes</Text>
              </VStack>
            </HStack>
            <Box>
              <Button
                bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
                rounded={"lg"}
                color={"white"}
                mt={2}
                fontWeight={700}
                _hover={{ bg: "blue.400" }}
              >
                Follow
              </Button>
            </Box>
          </HStack>
        </HStack>
        <VStack gap={4} alignItems={"flex-start"} my={10} width={"90%"}>
          <Text>
            The animation's soundtrack is also noteworthy, with epic orchestral
            scores and electrifying rock music adding to the intensity and drama
            of each scene. The music enhances the emotional impact of the
            animation.
          </Text>
          <Text>
            As the heroes fight to save the earth, the stakes remain high, with
            the fate of humanity hanging in the balance. The heroes face
            challenging and seemingly insurmountable obstacles, but they never
            give up and remain committed to the cause.
          </Text>
          <Text>
            Despite the gravity of the situation, the animation also includes
            moments of humor and levity, adding to the overall enjoyment of the
            adventure.
          </Text>
          <Text>
            In the end, the heroes emerge victorious, having saved the earth
            from certain destruction. The animation concludes with a sense of
            triumph and a renewed sense of hope for the future.
          </Text>
        </VStack>
      </Flex>
    </Box>
  );
}
