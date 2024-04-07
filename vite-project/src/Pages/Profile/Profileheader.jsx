import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Profileheader = () => {
  return (
    <VStack gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "x1", md: "2x1" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar name='Saksham Pathak' src='/public/3dsam.jpeg' />
      </AvatarGroup>
      <VStack
        alignItems={"center"} gap={2}
        mx={"auto"} flex={1}
      >
        <VStack gap={3} direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"} w={"full"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>
            3dsam
          </Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.600" }}
              size={{ base: "xs", md: "sm" }}>
              Edit Profile
            </Button>
          </Flex>
        </VStack>
        <Flex alignItems={"center"} gap={{base:2,sm:4}}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}
            fontSize={{base:"xs",md:"sm"}}>4</Text>
            Creations
          </Text>
          <Text>
          <Text as="span" fontWeight={"bold"} mr={1}
          fontSize={{base:"xs",md:"sm"}}>1167</Text>
            Followers
          </Text>
          <Text>
          <Text as="span" fontWeight={"bold"} mr={1}
          fontSize={{base:"xs",md:"sm"}}>149</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            Saksham Pathak
          </Text> 
        </Flex>
        <Text fontSize={"sm"}>The creator of this platform. Professional Blender 3D Artist :)</Text>
      </VStack>
    </VStack>
  )
}

export default Profileheader