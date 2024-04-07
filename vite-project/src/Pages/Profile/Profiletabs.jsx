import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BsBookmark, BsGrid3X3, BsMagnet } from 'react-icons/bs'
import { SiMaterialdesignicons } from "react-icons/si"
const Profiletabs = () => {
  return (
    <Flex
    w={"full"}
    justifyContent={"center"}
    gap={{base:4,sm:10}}
    textTransform={"uppercase"}
    fontWeight={"bold"}>
      <Flex borderTop={"1px solid white"} alignItems={"center"}
      p="3" gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{base:"none",sm:"block"}}>Creations</Text>
      </Flex>
      <Flex alignItems={"center"}
      p="3" gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BsBookmark />
        </Box>
        <Text fontSize={12} display={{base:"none",sm:"block"}}>Saved</Text>
      </Flex>
      <Flex alignItems={"center"}
      p="3" gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
        <SiMaterialdesignicons />
        </Box>
        <Text fontSize={12} display={{base:"none",sm:"block"}}>Materials</Text>
      </Flex>
    </Flex>
  )
}

export default Profiletabs