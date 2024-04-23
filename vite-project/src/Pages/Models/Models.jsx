// import { Box, Grid, GridItem, Image, Heading, useMediaQuery } from "@chakra-ui/react";

// const Models = () => {
//   const photos = [
//     { id: 1, src: "https://img.cadnav.com/allimg/230630/cadnav-thumb230630211I30.jpeg", label: "Architecture" },
//     { id: 2, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Characters" },
//     { id: 3, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/10/06/552314/222221/sport_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2327361.jpg", label: "Vehicles" },
//     { id: 4, src: "https://media.cgtrader.com/variants/GwJhXmpTs13tGNLzpyUZsYqE/508c09fe26e63b93baec6d888aa2950650a509b5e04f2f03a4f2af52a04363ea/1.jpg", label: "Nature" },
//     { id: 5, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/12/08/664594/339884/modern_living_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3559872.jpg", label: "Furniture" },
//     { id: 6, src: "https://media.sketchfab.com/models/4cf7d92c8c06426287aa3694c70efb2c/thumbnails/49ec4923094a490fb0030077d0528ae6/ece2ec40ad2d49b49c28ee0e678926b3.jpeg", label: "Technology" },
//   ];

//   const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

//   return (
//     <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//       <Heading mb={8} textAlign="center">Choose Your Model Category</Heading>
//       <Box maxWidth="1200px" width="100%" px={4} overflowY="auto" display="flex" justifyContent="center">
//         <Grid templateColumns={isLargerThan768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"} gap={6}>
//           {photos.map((photo) => (
//             <GridItem
//               key={photo.id}
//               cursor="pointer"
//               borderRadius={4}
//               overflow="hidden"
//               border="1px solid"
//               borderColor="whiteAlpha.300"
//               position="relative"
//               height={"200px"}
//             >
//               <Box
//                 opacity={0}
//                 _hover={{ opacity: 1 }}
//                 position="absolute"
//                 top={0}
//                 left={0}
//                 right={0}
//                 bottom={0}
//                 bg="blackAlpha.700"
//                 transition="all 0.3s ease"
//                 zIndex={1}
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <Heading size="md" color="white">
//                   {photo.label}
//                 </Heading>
//               </Box>
//               <Image
//                 src={photo.src}
//                 alt={`Photo ${photo.id}`}
//                 w="100%"
//                 h="100%"
//                 objectFit="cover"
//               />
//             </GridItem>
//           ))}
//         </Grid>
//       </Box>
//     </Box>
//   );
// };

// export default Models;


//  2222222222222222222222222
// import { Box, Grid, GridItem, Image, Heading, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
// import { useState } from "react";

// const Models = () => {
//   const photos = [
//     { id: 1, src: "https://img.cadnav.com/allimg/230630/cadnav-thumb230630211I30.jpeg", label: "Architecture" },
//     { id: 2, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Characters" },
//     { id: 3, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/10/06/552314/222221/sport_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2327361.jpg", label: "Vehicles" },
//     { id: 4, src: "https://media.cgtrader.com/variants/GwJhXmpTs13tGNLzpyUZsYqE/508c09fe26e63b93baec6d888aa2950650a509b5e04f2f03a4f2af52a04363ea/1.jpg", label: "Nature" },
//     { id: 5, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/12/08/664594/339884/modern_living_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3559872.jpg", label: "Furniture" },
//     { id: 6, src: "https://media.sketchfab.com/models/4cf7d92c8c06426287aa3694c70efb2c/thumbnails/49ec4923094a490fb0030077d0528ae6/ece2ec40ad2d49b49c28ee0e678926b3.jpeg", label: "Technology" },
//   ];

//   const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const openModal = (photo) => {
//     setSelectedPhoto(photo);
//   };

//   const closeModal = () => {
//     setSelectedPhoto(null);
//   };

//   return (
//     <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
//       <Heading mb={8} textAlign="center">Choose Your Model Category</Heading>
//       <Box maxWidth="1200px" width="100%" px={4} overflowY="auto" display="flex" justifyContent="center">
//         <Grid templateColumns={isLargerThan768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"} gap={6}>
//           {photos.map((photo) => (
//             <GridItem
//               key={photo.id}
//               cursor="pointer"
//               borderRadius={4}
//               overflow="hidden"
//               border="1px solid"
//               borderColor="whiteAlpha.300"
//               position="relative"
//               height={"200px"}
//               onClick={() => openModal(photo)}
//             >
//               <Box
//                 opacity={0}
//                 _hover={{ opacity: 1 }}
//                 position="absolute"
//                 top={0}
//                 left={0}
//                 right={0}
//                 bottom={0}
//                 bg="blackAlpha.700"
//                 transition="all 0.3s ease"
//                 zIndex={1}
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <Heading size="md" color="white">
//                   {photo.label}
//                 </Heading>
//               </Box>
//               <Image
//                 src={photo.src}
//                 alt={`Photo ${photo.id}`}
//                 w="100%"
//                 h="100%"
//                 objectFit="cover"
//               />
//             </GridItem>
//           ))}
//         </Grid>
//       </Box>
//       <Modal isOpen={!!selectedPhoto} onClose={closeModal} size="xl">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalCloseButton />
//           <ModalBody>
//             {selectedPhoto && (
//               <Image
//                 src={selectedPhoto.src}
//                 alt={`Photo ${selectedPhoto.id}`}
//                 w="100%"
//                 h="100%"
//                 objectFit="contain"
//               />
//             )}
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// };

// export default Models;

import { Box, Grid, GridItem, Image, Heading, useMediaQuery, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";

const Models = () => {
  const categories = [
    {
      label: "Architecture",
      images: [
        { id: 1, src: "https://img.cadnav.com/allimg/230630/cadnav-thumb230630211I30.jpeg", label: "Building 1", description: "Description for Building 1" },
        { id: 2, src: "https://img.cadnav.com/allimg/230630/cadnav-thumb230630211I30.jpeg", label: "Building 2" },
        { id: 3, src: "https://img.cadnav.com/allimg/230630/cadnav-thumb230630211I30.jpeg", label: "Building 3" },
      ],
    },
    {
      label: "Characters",
      images: [
        { id: 4, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Character 1" },
        { id: 5, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Character 2" },
        { id: 6, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Character 3" },
        { id: 7, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Character 3" },
        { id: 8, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Character 3" },
        { id: 9, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Character 3" },
      ],
    },
    {
      label: "Vehicles",
      images: [
        { id: 10, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/10/06/552314/222221/sport_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2327361.jpg", label: "Vehicle 1" },
        { id: 11, src: "https://media.cgtrader.com/variants/GwJhXmpTs13tGNLzpyUZsYqE/508c09fe26e63b93baec6d888aa2950650a509b5e04f2f03a4f2af52a04363ea/1.jpg", label: "Vehicle 2" },
        { id: 12, src: "https://img.cadnav.com/allimg/210125/2101252102-8.jpg", label: "Vehicle 3" },
      ],
    },
    {
      label: "Nature",
      images: [
        { id: 10, src: "https://media.cgtrader.com/variants/GwJhXmpTs13tGNLzpyUZsYqE/508c09fe26e63b93baec6d888aa2950650a509b5e04f2f03a4f2af52a04363ea/1.jpg", label: "Nature 1" },
        { id: 11, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/10/06/552314/222221/sport_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2327361.jpg", label: "Nature 2" },
        { id: 12, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/10/06/552314/222221/sport_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2327361.jpg", label: "Nature 3" },
      ],
    },
    {
      label: "Furniture",
      images: [
        { id: 13, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/12/08/664594/339884/modern_living_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3559872.jpg", label: "Furniture 1" },
        { id: 14, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/12/08/664594/339884/modern_living_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3559872.jpg", label: "Furniture 2" },
        { id: 15, src: "https://img.cadnav.com/allimg/210521/210521144-0.jpg", label: "Furniture 3" },
      ],
    },
    {
      label: "Technology",
      images: [
        { id: 16, src: "https://media.sketchfab.com/models/4cf7d92c8c06426287aa3694c70efb2c/thumbnails/49ec4923094a490fb0030077d0528ae6/ece2ec40ad2d49b49c28ee0e678926b3.jpeg", label: "Technology 1" },
        { id: 17, src: "https://img.cadnav.com/allimg/210428/210428201-0.jpg", label: "Technology 2" },
        { id: 18, src: "https://img.cadnav.com/allimg/210109/22-210109112553-50.jpg", label: "Technology 3" },
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
        <Grid templateColumns={isLargerThan768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"} gap={6}>
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
                    <GridItem key={image.id} h="100%" position="relative" onClick={() => openImageDescription(index)}>
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
                          <Text>{image.description}</Text>
                        </Box>
                      )}
                    </GridItem>
                  ))}
                </Grid>
              </Box>

              <Box w="33%">
                <ModalBody>
                  <Heading size="md" mb={4}>{selectedCategory.label}</Heading>
                  {selectedImage !== null && (
                    <>
                      <Text>{selectedCategory.images[selectedImage].label}</Text>
                      <Text>{selectedCategory.images[selectedImage].description}</Text>
                    </>
                  )}
                  {/* Additional content for the category */}
                  <Text mt={4}>Additional content goes here...</Text>
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