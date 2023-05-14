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
import React from "react";

type Props = {};

const UploadAnime = (props: Props) => {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [maxSupply, setMaxSupply] = React.useState(0);

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
                        Price Per NFT
                      </FormLabel>
                      <InputGroup size="sm">
                        <Input
                          type="text"
                          placeholder="Ex: 1000"
                          focusBorderColor="brand.400"
                          rounded="md"
                          bgColor={"white"}
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
                          <span>Upload a file</span>
                          <VisuallyHidden>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                            />
                          </VisuallyHidden>
                        </chakra.label>
                        <Text pl={1}>or drag and drop</Text>
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
                  Generate & Upload
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
