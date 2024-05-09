// import { Box, Flex } from "@chakra-ui/react";
// import React from 'react'
// import { TbArrowRoundaboutRight } from "react-icons/tb";


// const Abouts = () => {
//     return (
//         <>
//             <Flex gap={3} cursor={"pointer"}
//             _hover={{ bg: "whiteAlpha.400" }}
//             borderRadius={6}
//             p={2}
//             >
//             <TbArrowRoundaboutRight size={25}/>
//             <Box>Abouts</Box>
//             </Flex>
//         </>
//     );
// };

// export default Abouts
import React, { useState } from 'react';
import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Link,
  Divider,
  Icon,
  VStack,
} from '@chakra-ui/react';
import { TbArrowRoundaboutRight } from 'react-icons/tb';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Abouts = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const projectDescription = `
    ArtBongo is an innovative platform that I've been diligently developing over the past two months. This website is designed to serve as a hub for 3D artists worldwide, offering a diverse range of features. Users can discover, upload, and share 3D models, textures, HDRIs, and more, fostering a vibrant community of creators.

    Similar to how GitHub revolutionized code collaboration, ArtBongo aims to revolutionize the way artists collaborate on 3D projects. The platform not only provides a space for sharing creations but also facilitates social interaction among artists, enabling them to connect, inspire, and collaborate.

    Currently, ArtBongo is in its developmental phase, with ongoing enhancements and refinements. The project is built using cutting-edge technologies, primarily leveraging React.js for the frontend and Firebase for storage, authentication, and database management. Additionally, I've customized Vite-React to streamline the development process, ensuring that the platform meets the highest standards of performance and user experience.

    I am excited about the progress of ArtBongo and welcome any feedback or suggestions you may have. Your input is invaluable as I strive to create a platform that truly resonates with the artistic community. Thank you for your support! 👍
  `;

  return (
    <>
      <Flex
        gap={3}
        cursor={'pointer'}
        _hover={{ bg: 'whiteAlpha.400' }}
        borderRadius={6}
        p={2}
        onClick={openModal}
      >
        <TbArrowRoundaboutRight size={25} />
        <Box>Abouts</Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={closeModal} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Abouts</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>{projectDescription}</Text>
            <Divider my={4} />
            <VStack spacing={4} align="start">
              <Box>
                <Text fontWeight="bold">Name of author:</Text>
                <Text>Saksham Pathak</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">Studying at:</Text>
                <Text>Shobhit University, Meerut</Text>
              </Box>
              <Box>
                <Text fontWeight="bold">GitHub profile:</Text>
                <Link href="https://github.com/sakshamm04" isExternal>
                  <Flex align="center">
                    <Icon as={FaGithub} />
                    <Box ml={2}>github.com/sakshamm04</Box>
                  </Flex>
                </Link>
              </Box>
              <Box>
                <Text fontWeight="bold">LinkedIn profile:</Text>
                <Link href="https://www.linkedin.com/in/saksham-pathak-34bb08291" isExternal>
                  <Flex align="center">
                    <Icon as={FaLinkedin} />
                    <Box ml={2}>linkedin.com/in/saksham-pathak-34bb08291</Box>
                  </Flex>
                </Link>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Abouts;
