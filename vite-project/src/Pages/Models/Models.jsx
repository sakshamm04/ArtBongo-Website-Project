import { Box, Grid, GridItem, Image, Heading, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Flex, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const Models = () => {
  const categories = [
    {
      label: "Architecture",
      images: [
        { id: 1, src: "https://media.sketchfab.com/models/b0035b8713b048bb8ddf311ee67c28c8/thumbnails/a19e1d19ac684868b6d45ae8c1ee84c4/826cb92d2a574140bf8d6c36034d17d5.jpeg", label: "SkyScrappers", description: "This is a 3d model of Sky Scrapper Buildings", link: "https://drive.google.com/file/d/1RnO41UpvHZKTazRDnwmYT2JaVGyv_fxf/view?usp=drive_link" },
        { id: 2, src: "https://media.sketchfab.com/models/52772448c62348e0a4951b51758d5587/thumbnails/167e0dc787314ccdb027fe9136b42848/466b290c63ec438e97b25209f74581b7.jpeg", label: "A House", description: "An old classic house 3d model with a car", link: "https://drive.google.com/file/d/1x38l6iPnuELHb0QOTKvkpGzPKIugAona/view?usp=sharing"},
        { id: 3, src: "https://media.sketchfab.com/models/372e3c847ee74c0bb3942e22a3d0a6b8/thumbnails/8f529b5211424a7b8843497f9ded9477/1024x576.jpeg", label: "Warehouse", description: "A Warehouse 3d model", link: "https://drive.google.com/file/d/1fJh9lD0XQfm9h-L5O2Nv8NO4jp_fAG-L/view?usp=drive_link"},
        { id: 4, src: "https://media.sketchfab.com/models/f99b2d49bdda4d14956c5d6c4395ae4c/thumbnails/bc09a09bd06d4b74be3bbe9cf09ebdb5/e25080b3feab466cb1ccef93040a9b0b.jpeg", label: "Abandoned Factory", description: "A Model of an Abandoned Factory", link: "https://drive.google.com/file/d/1C50A2Zk9CMBgCs7aFLN82APselZ1u4WF/view?usp=sharing"},
      ],
    },
    {
      label: "Characters",
      images: [
        { id: 5, src: "https://media.sketchfab.com/models/038ac3f3c0f64ccf96426f669c0c5afd/thumbnails/bf395ea907564fe691f487998c1a395d/7b83e32fcb6b41bfa15b86fd58cf3112.jpeg", label: "Alice Detroit", description: "A 3d Realistic model of a girl", link: "https://drive.google.com/file/d/1Kpiy8amApPeQ_7TTXju21eLs2NktXPSr/view?usp=sharing" },
        { id: 6, src: "https://media.sketchfab.com/models/8c4d6c0d491744fb85bb20e3f680bdab/thumbnails/ace8195d8d1142e9a8c10e3debeccb19/a9036ee4c11b4f1c9dc04a552b804e60.jpeg", label: "Carl Manfred", description: "An Old man 3d model", link: "https://drive.google.com/file/d/1EzbH0ZYdcsmNxYG4v7EnPkUkW0zUJJ3J/view?usp=sharing" },
        { id: 7, src: "https://media.sketchfab.com/models/f05a87806cad49feb75ac7659d55c368/thumbnails/0cafd0e6eb1341f0a909eb324b50944e/0213e689026947be9659c7914e9e2a24.jpeg", label: "A Baby", description: "A New Born baby model", link: "https://drive.google.com/file/d/1xyltFkAjygDdubo61dDl5mWeXfXDmjDd/view?usp=sharing" },
        { id: 8, src: "https://media.sketchfab.com/models/0161bd8ecbaa44cb9da40ba4f2f80aaf/thumbnails/666f02284ef64f08b09502b74a77a6e6/0c8dfc5bfcf54211a45c85d7bb9961ce.jpeg", label: "Gavin Reed", description: "A 3d Realistic Model of a boy", link: "https://drive.google.com/file/d/1LSzQ-12DW33-L6otYi3bsGVNPNMuvdSl/view?usp=drive_link" },
      ],
    },
    {
      label: "Vehicles",
      images: [
        { id: 9, src: "https://media.sketchfab.com/models/669d08892c9048e0897b053ab3f8e251/thumbnails/4d2499b815ec44a08a30995cfc3a7511/91f53f3312544172ae01f62433662689.jpeg", label: "Revuelto 3.0", description: "A Supersonic 3d render of Revuelto", link: "https://drive.google.com/file/d/1Y1s1Sj5ezpo2KDzB0VFtjEYJeclOA9-K/view?usp=sharing" },
        { id: 10, src: "https://media.sketchfab.com/models/8e87379f40fd40dcac0a751e22c1a188/thumbnails/e81893348fb54ab992feb10576276179/d0618f3f5dc049e39b3a6e269c260ed4.jpeg", label: "BMW M4 F82", description: "Nothing feels better than a BMW M4 F82 on track, A 3d model of it", link: "https://drive.google.com/file/d/1LqrnQPB96s_jZSrKTG2R45PqbyfiMhiu/view?usp=sharing" },
        { id: 11, src: "https://media.sketchfab.com/models/23a81cec59b24849bcc96027fd2871a7/thumbnails/cb975a744d9944168a42e183f34d9758/eff107d326734e668a6339b13beee4dd.jpeg", label: "Suzuki GSX 750", description: "Hyper 3d render of Suzuki monster bike", link: "https://drive.google.com/file/d/1GMBtVyXZuvJ18PFacquTAVlwLMWQHis5/view?usp=sharing" },
        { id: 12, src: "https://media.sketchfab.com/models/5604234eee6a453b83634dc4cad9aba4/thumbnails/836ad0a2304b450ea0e8083fb801783e/e889c9b3f11146f484d044dae62c5294.jpeg", label: "PAZ-652", description: "An Old passenger bus model", link: "https://drive.google.com/file/d/1DWBUkx5_9y0k9YGaGcKMpO5ltilOd_k-/view?usp=sharing" },
      ],
    },
    {
      label: "Nature",
      images: [
        { id: 13, src: "https://media.sketchfab.com/models/f61d84c6534d4007accdeac35f433119/thumbnails/206b5ec056b84ceab6d91b801df58097/abb8e63822654d3e8339dfc8866eb063.jpeg", label: "Cloudy Mountain", description: "A cloudy mountain cinematic model", link: "https://drive.google.com/file/d/1sh29IZ2ximxHf5d1_xSS8CsY6pub1xOY/view?usp=drive_link" },
        { id: 14, src: "https://media.sketchfab.com/models/e0050374e75347929017942fe761670f/thumbnails/1ff1d820eb344d6cb09883e09c0a4fa1/8ba4bf1a5a5e4a318519e8f9d1b65252.jpeg", label: "Green Landscape", description: "3D nature landscape", link: "https://drive.google.com/file/d/1Iq0vSrQQJ2bhpAYGzizSMdmHVDY5QCrS/view?usp=sharing" },
        { id: 15, src: "https://media.sketchfab.com/models/9a7a018ae30842349ba1449f6cc0e9b7/thumbnails/5717aefd0bb04eb49ba015f6d06a64f7/6ddcc85ef5994342ba46d12f0a0155de.jpeg", label: "SeaShore", description: "Experience the tranquility of the seaside with this model", link: "https://drive.google.com/file/d/1G9X2UmMpxYV_bJLLAGPq1SSvqg3p4ZdA/view?usp=sharing" },
        { id: 16, src: "https://media.sketchfab.com/models/40da979cb23f492583ec89c4196cff4e/thumbnails/850105d91068406d8124914463e44ad2/3f0c1017caee488db0056e0d2cf0d4fd.jpeg", label: "Tree", description: "A giant tree model", link: "https://drive.google.com/file/d/1OP4dN6Gt3GvcL0tcGB33C3rLZX5TJMpM/view?usp=sharing" },
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
      <Heading mb={8} textAlign="center">Choose Your Model Category</Heading>
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

export default Models;