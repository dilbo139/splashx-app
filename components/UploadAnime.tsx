import React, { useState } from "react";
import {
  Box,
  Text,
  Stack,
  SimpleGrid,
  GridItem,
  Heading,
  Flex,
} from "@chakra-ui/layout";
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Textarea,
  VisuallyHidden,
  chakra,
} from "@chakra-ui/react";

import { useAddress, useContract, useStorage } from "@thirdweb-dev/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useLazyMint } from "@thirdweb-dev/react";

const contractAddress = "0x99Da10B3633FfEba24951c4f42689841ed21f148";

type Props = {};

const UploadAnime = (props: Props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [maxSupply, setMaxSupply] = useState(0);
  const [pricePerNFT, setPricePerNFT] = useState(0);
  const [video, setVideo] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const storage = useStorage();
  const address = useAddress();
  const router = useRouter();

  const videoImage = "https://bit.ly/2Z4KKcF";

  const { contract } = useContract(contractAddress);
  const { mutateAsync: lazyMint, isLoading, error } = useLazyMint(contract);

  async function uploadAndGenerate(e: any): Promise<void> {
    e.preventDefault();
    try {
      // upload video to IPFS
      setLoading(true);
      const uri = await storage?.upload(video);
      // create metadata structure
      const metadata = {
        name: title,
        image: videoImage,
        external_url: "https://splashxapp.vercel.app",
        description: description,
        animation_url: uri,
      };
      // upload metadata to IPFS
      const metadataURI = await storage?.upload(metadata);
      // upload video IPFS URI + metadata to db
      const requestBody = {
        contractName: title,
        primarySaleRecipient: address,
        metadata,
      };
      const res = await axios.post("/api/generate-anime", requestBody);

      await lazyMint({
        // Metadata of the NFTs to upload
        metadatas: [{ ...metadata }],
      });

      setTitle("");
      setDescription("");
      setMaxSupply(0);
      setPricePerNFT(0);
      setVideo(null);
      setLoading(false);
      router.push("/");
    } catch (err: unknown) {
      console.error(err);
    }
  }

  return (
    <Box p={10}>
      <Box>
        <SimpleGrid
          display={{
            base: "initial",
            md: "grid",
          }}
          columns={{
            md: 1,
          }}
          spacing={{
            md: 6,
          }}
        >
          <GridItem
            mt={[5, null, 0]}
            colSpan={{
              md: 2,
            }}
          >
            <chakra.form
              method="POST"
              shadow="base"
              rounded={[null, "md"]}
              overflow={{
                sm: "hidden",
              }}
              onSubmit={uploadAndGenerate}
            >
              <Stack
                px={4}
                py={5}
                spacing={6}
                p={{
                  sm: 6,
                }}
              >
                <SimpleGrid columns={1} spacing={6}>
                  <FormControl as={GridItem} colSpan={[3, 1]}>
                    <FormLabel
                      fontSize="lg"
                      fontWeight="bold"
                      color="white"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Title
                    </FormLabel>
                    <InputGroup size="sm">
                      <Input
                        type="text"
                        placeholder="Anime title"
                        focusBorderColor="brand.400"
                        rounded="md"
                        bgColor={"white"}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </InputGroup>
                  </FormControl>

                  <Text fontSize="lg" fontWeight="bold" color="white">
                    NFT Minting
                  </Text>
                  <Flex gap={3}>
                    <FormControl as={GridItem} colSpan={[1, 1]}>
                      <FormLabel
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Max Supply
                      </FormLabel>
                      <InputGroup size="sm">
                        <Input
                          type="text"
                          placeholder="Ex: 1000"
                          focusBorderColor="brand.400"
                          rounded="md"
                          bgColor={"white"}
                          onChange={(e) =>
                            setMaxSupply(parseInt(e.target.value))
                          }
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl as={GridItem} colSpan={[1, 1]}>
                      <FormLabel
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Price Per NFT (Matic)
                      </FormLabel>
                      <InputGroup size="sm">
                        <Input
                          type="text"
                          placeholder="Ex: 1000"
                          focusBorderColor="brand.400"
                          rounded="md"
                          bgColor={"white"}
                          onChange={(e) =>
                            setPricePerNFT(parseInt(e.target.value))
                          }
                        />
                      </InputGroup>
                    </FormControl>
                  </Flex>
                </SimpleGrid>

                <div>
                  <FormControl id="email" mt={1}>
                    <FormLabel
                      fontSize="lg"
                      fontWeight="bold"
                      color="white"
                      _dark={{
                        color: "gray.50",
                      }}
                    >
                      Description
                    </FormLabel>
                    <Textarea
                      placeholder="This is a description about the anime."
                      bgColor={"white"}
                      mt={1}
                      rows={3}
                      shadow="sm"
                      focusBorderColor="brand.400"
                      fontSize={{
                        sm: "sm",
                      }}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                </div>

                <FormControl>
                  <FormLabel
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                    _dark={{
                      color: "gray.50",
                    }}
                  >
                    Anime Video
                  </FormLabel>
                  <Flex
                    mt={1}
                    justify="center"
                    px={6}
                    pt={5}
                    pb={6}
                    borderWidth={2}
                    _dark={{
                      color: "gray.500",
                    }}
                    borderStyle="dashed"
                    rounded="md"
                  >
                    <Stack spacing={1} textAlign="center">
                      <Icon
                        mx="auto"
                        boxSize={12}
                        color="gray.400"
                        _dark={{
                          color: "gray.500",
                        }}
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Icon>
                      <Flex
                        fontSize="sm"
                        color="gray.600"
                        _dark={{
                          color: "gray.400",
                        }}
                        alignItems="baseline"
                      >
                        <chakra.label
                          htmlFor="file-upload"
                          cursor="pointer"
                          rounded="md"
                          fontSize="md"
                          color="brand.600"
                          _dark={{
                            color: "brand.200",
                          }}
                          pos="relative"
                          _hover={{
                            color: "brand.400",
                            _dark: {
                              color: "brand.300",
                            },
                          }}
                        >
                          {video ? (
                            <span>{video.name}</span>
                          ) : (
                            <>
                              <span>Upload a file</span>
                              <VisuallyHidden>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  onChange={(e) =>
                                    e.target.files &&
                                    setVideo(e.target.files[0])
                                  }
                                />
                              </VisuallyHidden>
                              <Text pl={1}>or drag and drop</Text>
                            </>
                          )}
                        </chakra.label>
                      </Flex>
                      <Text
                        fontSize="xs"
                        color="gray.500"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        PNG, JPG, GIF up to 10MB
                      </Text>
                    </Stack>
                  </Flex>
                </FormControl>
              </Stack>
              <Box
                px={{
                  base: 4,
                  sm: 6,
                }}
                py={3}
                bg="none"
                _dark={{
                  bg: "#121212",
                }}
                textAlign="center"
              >
                <Button
                  type="submit"
                  bgColor="brand.darkBlue"
                  color={"white"}
                  _focus={{
                    shadow: "",
                  }}
                  fontWeight="md"
                  _hover={{
                    opacity: 0.8,
                  }}
                >
                  {loading ? "Loading..." : "Generate & Upload"}
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UploadAnime;
