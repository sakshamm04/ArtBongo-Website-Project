import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { FaComment } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'
import Comment from '../../components/Comment/Comment'
import PostFooter from '../Feedposts/PostFooter'

const Profilepost = ({ img }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <GridItem
        cursor={"pointer"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        position={"relative"}
        aspectRatio={1 / 1}
        onClick={onOpen}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex>
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image src={img} alt='Profile Creation' w={"100%"} objectFit={"cover"} />
      </GridItem>

      <Modal onClose={onClose} isOpen={isOpen}
        isCentered={true}
        size={{ base: "3xl", md: "4xl" }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody className='postbuxa' bgColor={"blackAlpha.800"} pb={1.5}>
            <Flex gap={4}
              w={{ base: "98%", sm: "78%", md: "full" }}
              mx={"auto"}
            >
              <Box
                borderRadius={5}
                overflow={"hidden"}
                border={"1px solid"}
                borderColor={"whiteAlpha.300"}
                flex={1.5}
              >
                <Image src={img} alt='Profile Creation' />
              </Box>
              <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={3}>
                    <Avatar src='/3dsam.jpeg' size={"sm"} name='Saksham Pathak' />
                    <Text fontWeight={"bold"} fontSize={12}>
                      3dsam
                    </Text>
                  </Flex>
                  <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }}
                    borderRadius={4} p={1}>
                    <MdDelete size={20} cursor={"pointer"} />
                  </Box>
                </Flex>
                <Divider my={4} bg={"gray.500"}/>
                <VStack w={"full"} alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                  <Comment
                  createAt="1d ago"
                  username="3dsam"
                  profilePic="/3dsam.jpeg"
                  text={"Perfume bottle!"}
                  />
                  <Comment
                  createAt={"12h ago"}
                  username={"zacfarmerart"}
                  profilePic={"/zacfarmerart.jpeg"}
                  text={"Excellent Man!"}
                  />
                  <Comment
                  createAt={"47min ago"}
                  username={"kennyphases"}
                  profilePic={"/kenn.jpeg"}
                  text={"Great Sam!"}
                  />

                </VStack>
                <Divider my={4} bg={"gray.0000"} />
                <PostFooter isprofilepage={true}/>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Profilepost