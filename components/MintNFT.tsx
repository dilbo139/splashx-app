import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react";

export default function MintNFT() {
  return (
    <Box>
      <HStack justifyContent={"space-between"} width={"95%"}>
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            Earnings
          </Text>
          <HStack gap={4} justifyContent={"center"}>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.gray"}>
                Current Earnings
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.white"}>
                11
              </Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.gray"}>
                Expected Earnings
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.white"}>
                0.000024 eth (0.046 USD)
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <VStack alignItems={"flex-start"}>
          <Text fontSize={"3xl"} fontWeight={"semibold"}>
            NFT
          </Text>
          <HStack gap={4} justifyContent={"center"}>
            <VStack>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.gray"}>
                Max Supply
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.white"}>
                50
              </Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.gray"}>
                NFT's Available
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.white"}>
                12
              </Text>
            </VStack>
            <VStack alignItems={"flex-start"}>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.gray"}>
                Price Per NFT
              </Text>
              <Text fontSize={"md"} fontWeight={"bold"} color={"brand.white"}>
                3 Eth
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <Box>
          <Button
            bgGradient="linear(to-l,  brand.darkBlue,#012b9e,)"
            rounded={"lg"}
            color={"white"}
            mt={2}
            fontWeight={700}
            _hover={{ bg: "blue.400" }}
          >
            Mint Anime as NFT
          </Button>
        </Box>
      </HStack>
    </Box>
  );
}
