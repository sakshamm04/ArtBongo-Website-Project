import { Box, Grid, GridItem, Image, Heading, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Hdri = () => {
  const categories = [
    {
      label: "Night",
      images: [
        { id: 1, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/faa73a5d-c332-477b-3adf-3a5ad98b0b00/900px", label: "Hdr Outdoor Beach Fire Pit Night Clear 001", description: "Hdr Outdoor Beach Fire Pit Night Clear 001", link: "https://drive.google.com/file/d/1RnO41UpvHZKTazRDnwmYT2JaVGyv_fxf/view?usp=drive_link" },
        { id: 2, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/26ff8bf5-7f12-4169-4a31-066631feec00/900px", label: "Hdr Outdoor Open Amphitheater Night Clear 001", description: "Hdr Outdoor Open Amphitheater Night Clear 001", link: "https://drive.google.com/file/d/1x38l6iPnuELHb0QOTKvkpGzPKIugAona/view?usp=sharing"},
        { id: 3, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/f7865c5a-f7be-4f6d-4896-fd1c05b33a00/900px", label: "City Condo Courtyard Night Outdoor Sky HDRI", description: "City Condo Courtyard Night Outdoor Sky HDRI", link: "https://drive.google.com/file/d/1fJh9lD0XQfm9h-L5O2Nv8NO4jp_fAG-L/view?usp=drive_link"},
        { id: 4, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/7bda1dc0-95fc-426a-d847-36b9e873dd00/900px", label: "Clear Night Alanya Docks Right Shadow Outdoor Sky HDRI", description: "Clear Night Alanya Docks Right Shadow Outdoor Sky HDRI", link: "https://drive.google.com/file/d/1C50A2Zk9CMBgCs7aFLN82APselZ1u4WF/view?usp=sharing"},
      ],
    },
    {
      label: "Day",
      images: [
        { id: 5, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/23a9b479-67bd-43f2-55e0-fd90f791e800/900px", label: "Hdr Outdoor Beach Blue Hour Clear 002", description: "Hdr Outdoor Beach Blue Hour Clear 002", link: "https://drive.google.com/file/d/1Kpiy8amApPeQ_7TTXju21eLs2NktXPSr/view?usp=sharing" },
        { id: 6, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/952b7d2b-d94f-45df-67d1-90fc43f35000/900px", label: "Hdr Outdoor City Path Day Clear 001", description: "Hdr Outdoor City Path Day Clear 001", link: "https://drive.google.com/file/d/1EzbH0ZYdcsmNxYG4v7EnPkUkW0zUJJ3J/view?usp=sharing" },
        { id: 7, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/db5ce749-2e4b-4574-9298-21cf7dcef300/900px", label: "Hdr Outdoor Epping Forest Field Day Cloudy 001", description: "Hdr Outdoor Epping Forest Field Day Cloudy 001", link: "https://drive.google.com/file/d/1xyltFkAjygDdubo61dDl5mWeXfXDmjDd/view?usp=sharing" },
        { id: 8, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/2f25d16d-60f4-4f63-7381-39c2cf731200/900px", label: "Hdr Outdoor Field Winter Day Clear 002", description: "Hdr Outdoor Field Winter Day Clear 002", link: "https://drive.google.com/file/d/1LSzQ-12DW33-L6otYi3bsGVNPNMuvdSl/view?usp=drive_link" },
      ],
    },
    {
      label: "Indoors",
      images: [
        { id: 9, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/c20cefb3-9146-4048-a842-ffd0f10e9b00/900px", label: "Hdr Interior Greenwich Foot Tunnel 001", description: "Hdr Interior Greenwich Foot Tunnel 001", link: "https://drive.google.com/file/d/1Y1s1Sj5ezpo2KDzB0VFtjEYJeclOA9-K/view?usp=sharing" },
        { id: 10, src: "https://imagedelivery.net/6Q4HLLMjcXxpmSYfQ3vMaw/3fb90e88-d1b9-4762-a9b6-5eb283ad1500/900px", label: "Hdr Outdoor Amphitheater Day Overcast 001", description: "Hdr Outdoor Amphitheater Day Overcast 001", link: "https://drive.google.com/file/d/1LqrnQPB96s_jZSrKTG2R45PqbyfiMhiu/view?usp=sharing" },
        { id: 11, src: "https://cdn.polyhaven.com/asset_img/primary/metro_noord.png?height=760", label: "Metro: Noord", description: "Metro: Noord", link: "https://drive.google.com/file/d/1GMBtVyXZuvJ18PFacquTAVlwLMWQHis5/view?usp=sharing" },
        { id: 12, src: "https://cdn.polyhaven.com/asset_img/primary/poly_haven_studio.png?height=760", label: "Poly Haven Studio", description: "Poly Haven Studio", link: "https://drive.google.com/file/d/1DWBUkx5_9y0k9YGaGcKMpO5ltilOd_k-/view?usp=sharing" },
      ],
    },
    {
      label: "Nature",
      images: [
        { id: 13, src: "https://cdn.polyhaven.com/asset_img/primary/symmetrical_garden_02.png?height=760", label: "Symmetrical Garden 02", description: "Symmetrical Garden 02", link: "https://drive.google.com/file/d/1sh29IZ2ximxHf5d1_xSS8CsY6pub1xOY/view?usp=drive_link" },
        { id: 14, src: "https://cdn.polyhaven.com/asset_img/primary/tief_etz.png?height=760", label: "Forest", description: "Forest", link: "https://drive.google.com/file/d/1Iq0vSrQQJ2bhpAYGzizSMdmHVDY5QCrS/view?usp=sharing" },
        { id: 15, src: "https://cdn.polyhaven.com/asset_img/primary/meadow.png?height=760", label: "Meadow", description: "Meadow", link: "https://drive.google.com/file/d/1G9X2UmMpxYV_bJLLAGPq1SSvqg3p4ZdA/view?usp=sharing" },
        { id: 16, src: "https://cdn.polyhaven.com/asset_img/primary/rosendal_park_sunset.png?height=760", label: "Rosendal Park Sunset", description: "Rosendal Park Sunset", link: "https://drive.google.com/file/d/1OP4dN6Gt3GvcL0tcGB33C3rLZX5TJMpM/view?usp=sharing" },
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
      <Heading mb={8} textAlign="center">Choose Your HDRI Category</Heading>
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

export default Hdri