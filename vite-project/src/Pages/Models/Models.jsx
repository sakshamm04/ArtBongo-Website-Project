import { Box, Grid, GridItem, Image, Heading, useMediaQuery } from "@chakra-ui/react";

const Models = () => {
  const photos = [
    { id: 1, src: "https://img.cadnav.com/allimg/230630/cadnav-thumb230630211I30.jpeg", label: "Architecture" },
    { id: 2, src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ebccb3136544533.61fb69ef3f23a.png", label: "Characters" },
    { id: 3, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2018/10/06/552314/222221/sport_car_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_2327361.jpg", label: "Vehicles" },
    { id: 4, src: "https://media.cgtrader.com/variants/GwJhXmpTs13tGNLzpyUZsYqE/508c09fe26e63b93baec6d888aa2950650a509b5e04f2f03a4f2af52a04363ea/1.jpg", label: "Nature" },
    { id: 5, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2019/12/08/664594/339884/modern_living_room_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_3559872.jpg", label: "Furniture" },
    { id: 6, src: "https://netrinoimages.s3.eu-west-2.amazonaws.com/2021/04/12/825259/484613/hightech_future_exhibition_hall_3d_model_c4d_max_obj_fbx_ma_lwo_3ds_3dm_stl_4959457_m.jpg", label: "Technology" },
  ];

  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box height="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Heading mb={8} textAlign="center">Choose Your Model Category</Heading>
      <Box maxWidth="1200px" width="100%" px={4} overflowY="auto" display="flex" justifyContent="center">
        <Grid templateColumns={isLargerThan768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)"} gap={6}>
          {photos.map((photo) => (
            <GridItem
              key={photo.id}
              cursor="pointer"
              borderRadius={4}
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.300"
              position="relative"
              height={"200px"}
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
                  {photo.label}
                </Heading>
              </Box>
              <Image
                src={photo.src}
                alt={`Photo ${photo.id}`}
                w="100%"
                h="100%"
                objectFit="cover"
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Models;