// import { Box, Flex } from "@chakra-ui/react";
// import React from 'react'
// import { LuMessagesSquare } from "react-icons/lu";


// const Messages = () => {
//     return (
//         <>
//             <Flex gap={3} cursor={"pointer"}
//             _hover={{ bg: "whiteAlpha.400" }}
//             borderRadius={6}
//             p={2}
//             >
//             <LuMessagesSquare size={25} />
//             <Box>Messages</Box>
//             </Flex>
//         </>
//     );
// };

// export default Messages
import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Avatar,
  Divider,
  Badge,
  IconButton,
  Flex,
  Box,
} from '@chakra-ui/react';
import { LuMessagesSquare } from 'react-icons/lu';

const Messages = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    { id: 1, name: 'John Doe', text: 'Hey, how are you?', time: '10:00 AM', seen: true },
    { id: 2, name: 'Jane Smith', text: 'Meeting at 2 PM today', time: 'Yesterday', seen: false },
    // Add more messages as needed
  ];

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const randomAvatar = () => {
    const avatars = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg',
      // Add more random avatar URLs
    ];
    return avatars[Math.floor(Math.random() * avatars.length)];
  };

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
        <LuMessagesSquare size={25} />
        <Box>Messages</Box>
      </Flex>

      <Modal isOpen={isOpen} onClose={closeModal} size="3xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Messages</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {messages.map(message => (
              <Flex
                key={message.id}
                align="center"
                p={3}
                _hover={{ bg: 'gray.200' }}
                transition="background-color 0.3s"
                borderRadius={6}
              >
                <Avatar size="md" name={message.name} src={randomAvatar()} />
                <Box ml={3} flex="1">
                  <Text fontWeight={message.seen ? 'normal' : 'bold'}>{message.name}</Text>
                  <Text>{message.text}</Text>
                  <Text color="gray.500" fontSize="sm">
                    {message.time}
                  </Text>
                </Box>
                {message.unreadCount > 0 && (
                  <Badge colorScheme="blue" borderRadius="full" px={2} fontWeight="bold">
                    {message.unreadCount}
                  </Badge>
                )}
              </Flex>
            ))}
          </ModalBody>
          <Divider />
          <Box p={3} textAlign="center" color="gray.500">
            Start a new chat
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Messages;
