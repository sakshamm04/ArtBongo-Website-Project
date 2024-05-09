import React from 'react'
import { Box, Grid, GridItem, Image, Heading, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Textures = () => {
  const categories = [
    {
      label: "Rubber",
      images: [
        { id: 1, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/e7bf2a94-c3bd-4f59-513b-27143bbec600/900px", label: "Rubber Mulch Tile Manmade Ground Texture, Green & Blue", description: "Rubber Mulch Tile Manmade Ground Texture, Green & Blue", link: "https://drive.google.com/file/d/1RnO41UpvHZKTazRDnwmYT2JaVGyv_fxf/view?usp=drive_link" },
        { id: 2, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/90e2ff7e-16f3-4026-ac51-dc5c72dc8400/900px", label: "Rubber Mulch Manmade Ground Texture, Brown", description: "Rubber Mulch Manmade Ground Texture, Brown", link: "https://drive.google.com/file/d/1x38l6iPnuELHb0QOTKvkpGzPKIugAona/view?usp=sharing"},
        { id: 3, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/487bfa70-0bef-49fa-3e6c-b9b7bb3d2b00/900px", label: "Rubber Mulch Tile Manmade Ground Texture, Red & Black", description: "Rubber Mulch Tile Manmade Ground Texture, Red & Black", link: "https://drive.google.com/file/d/1fJh9lD0XQfm9h-L5O2Nv8NO4jp_fAG-L/view?usp=drive_link"},
        { id: 4, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/82e0a511-a076-408e-41f9-5daff93ad700/900px", label: "Rubber Mulch Manmade Ground Texture, Green & Blue", description: "Rubber Mulch Manmade Ground Texture, Green & Blue", link: "https://drive.google.com/file/d/1C50A2Zk9CMBgCs7aFLN82APselZ1u4WF/view?usp=sharing"},
      ],
    },
    {
      label: "Wood",
      images: [
        { id: 5, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/7e666fa1-0a7a-4f7a-7d69-f472818d8000/900px", label: "Worn Wooden Deck Texture", description: "Worn Wooden Deck Texture", link: "https://drive.google.com/file/d/1Kpiy8amApPeQ_7TTXju21eLs2NktXPSr/view?usp=sharing" },
        { id: 6, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/2d203252-f9f1-41e4-185f-520bf5a4db00/600px", label: "Wood Flooring Texture Generator", description: "Wood Flooring Texture Generator", link: "https://drive.google.com/file/d/1EzbH0ZYdcsmNxYG4v7EnPkUkW0zUJJ3J/view?usp=sharing" },
        { id: 7, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/88b5caaf-d959-405c-c7f8-1ce04f1a3c00/900px", label: "Cognac Brick Bond Pattern Oak Wood Flooring Texture", description: "Cognac Brick Bond Pattern Oak Wood Flooring Texture", link: "https://drive.google.com/file/d/1xyltFkAjygDdubo61dDl5mWeXfXDmjDd/view?usp=sharing" },
        { id: 8, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/a71dba19-0b76-460e-d37c-925d3d20f700/900px", label: "Deep Ginger Ash Wood Flooring Texture", description: "Deep Ginger Ash Wood Flooring Texture", link: "https://drive.google.com/file/d/1LSzQ-12DW33-L6otYi3bsGVNPNMuvdSl/view?usp=drive_link" },
      ],
    },
    {
      label: "Fabric",
      images: [
        { id: 9, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/2654f3c4-9ba7-489c-74a5-c4701ca95000/900px", label: "Faux Leather Fabric Texture, Brown", description: "Faux Leather Fabric Texture, Brown", link: "https://drive.google.com/file/d/1Y1s1Sj5ezpo2KDzB0VFtjEYJeclOA9-K/view?usp=sharing" },
        { id: 10, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/0435fcce-23d7-4998-53a7-67ccf3286600/900px", label: "Round Staggered Boucle Fabric Texture", description: "Round Staggered Boucle Fabric Texture", link: "https://drive.google.com/file/d/1LqrnQPB96s_jZSrKTG2R45PqbyfiMhiu/view?usp=sharing" },
        { id: 11, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/8498184e-3761-431e-001e-240823c01300/900px", label: "Denim Upholstery Fabric Texture, Dark Blue", description: "Denim Upholstery Fabric Texture, Dark Blue", link: "https://drive.google.com/file/d/1GMBtVyXZuvJ18PFacquTAVlwLMWQHis5/view?usp=sharing" },
        { id: 12, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/bfc2f781-8596-40ec-7d81-61be9957ec00/900px", label: "Inca Striped Woven Fabric Texture", description: "Inca Striped Woven Fabric Texture", link: "https://drive.google.com/file/d/1DWBUkx5_9y0k9YGaGcKMpO5ltilOd_k-/view?usp=sharing" },
      ],
    },
    {
      label: "Ground",
      images: [
        { id: 13, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/089af16d-9459-4b3d-060a-841a98299300/900px", label: "Cracked Lava Texture", description: "Cracked Lava Texture", link: "https://drive.google.com/file/d/1sh29IZ2ximxHf5d1_xSS8CsY6pub1xOY/view?usp=drive_link" },
        { id: 14, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/2329dd64-ecb5-4494-42f3-03f9e98e5a00/900px", label: "Grass Ground Texture, Green", description: "Grass Ground Texture, Green", link: "https://drive.google.com/file/d/1Iq0vSrQQJ2bhpAYGzizSMdmHVDY5QCrS/view?usp=sharing" },
        { id: 15, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/211744c9-2b2a-4017-6711-3623c8bc0a00/900px", label: "Dead Leaves with Grass Patches Ground Texture", description: "Dead Leaves with Grass Patches Ground Texture", link: "https://drive.google.com/file/d/1G9X2UmMpxYV_bJLLAGPq1SSvqg3p4ZdA/view?usp=sharing" },
        { id: 16, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/7214ef3c-7f1d-4ed9-09ac-3dc9f601e800/900px", label: "Ground Dirt Cracked 009", description: "Ground Dirt Cracked 009", link: "https://drive.google.com/file/d/1OP4dN6Gt3GvcL0tcGB33C3rLZX5TJMpM/view?usp=sharing" },
      ],
    },
  ];

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openCategoryModal = (category) => {
    setSelectedCategory(category);
  };

  const closeCategoryModal = () => {
    setSelectedCategory(null);
    setSelectedImage(null); // Reset selected image when modal is closed
  };

  const openImageDescription = (index) => {
    setSelectedImage(index);
  };

  return (
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Heading mb={8} textAlign="center">Choose Your Texture Category</Heading>
      <Box maxWidth="1200px" width="100%" px={4} overflowY="auto" display="flex" justifyContent="center">
        <Grid templateColumns={isLargerThan768 ? "repeat(2, 1fr)" : "repeat(1, 1fr)"} gap={6}>
          {categories.map((category) => (
            <GridItem
              key={category.label}
              cursor="pointer"
              borderRadius={4}
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.300"
              position="relative"
              height={"200px"}
              onClick={() => openCategoryModal(category)}
            >
              <Box
                opacity={0}
                _hover={{ opacity: 1 }}
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.700"
                transition="all 0.3s ease"
                zIndex={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Heading size="md" color="white">
                  {category.label}
                </Heading>
              </Box>
              <Image
                src={category.images[0].src}
                alt={`Category ${category.label}`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      {selectedCategory && (
        <Modal isOpen={!!selectedCategory} onClose={closeCategoryModal} size="3xl" isCentered>
          <ModalOverlay />
          <ModalContent>
            <Flex>
              <Box w="66%">
                <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }} gap={6} p={4} overflowY="auto" maxH="80vh">
                  {selectedCategory.images.map((image, index) => (
                    <GridItem key={image.id} h="100%" position="relative"
                      onClick={() => openImageDescription(index)}
                    >
                      <Image
                        src={image.src}
                        alt={`Image ${index}`}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        transition="transform 0.3s"
                        _hover={{ transform: "scale(1.05)" }}
                      />
                      {selectedImage === index && (
                        <Box
                          position="absolute"
                          top={0}
                          left={0}
                          right={0}
                          bottom={0}
                          bg="blackAlpha.800"
                          color="white"
                          p={4}
                          zIndex={1}
                        >
                          <Heading size="md">{image.label}</Heading>
                        </Box>
                      )}
                    </GridItem>
                  ))}
                </Grid>
              </Box>

              <Box w="33%" overflowY="auto">
                <ModalBody>
                  <Heading size="md" mb={4}>
                    {selectedCategory.label}
                  </Heading>
                  {selectedImage !== null && (
                    <>
                      <Text>{selectedCategory.images[selectedImage].label}</Text>
                      <Text>{selectedCategory.images[selectedImage].description}</Text>
                      {selectedCategory.images[selectedImage].link && (
                        <Button
                          as="a"
                          href={selectedCategory.images[selectedImage].link}
                          download
                          variant="solid"
                          colorScheme="blue"
                          mt={4}
                        >
                          Download
                        </Button>
                      )}
                    </>
                  )}
                </ModalBody>
              </Box>


            </Flex>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
};

export default Textures