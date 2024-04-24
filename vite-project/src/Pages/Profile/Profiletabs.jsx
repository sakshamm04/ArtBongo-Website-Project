import { Box, Flex, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsGrid3X3 } from 'react-icons/bs'
import { SiMaterialdesignicons } from "react-icons/si"

const Profiletabs = () => {
  const [selectedTab, setSelectedTab] = useState("creations");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <Flex
      w="full"
      justifyContent="center"
      gap={{ base: 4, sm: 10 }}
      textTransform="uppercase"
      fontWeight="bold"
    >
      <Flex
        alignItems="center"
        p="3"
        gap={1}
        cursor="pointer"
        borderBottom={selectedTab === "creations" ? "2px solid white" : "none"}
        onClick={() => handleTabClick("creations")}
      >
        <Box fontSize={20}>
          <BsGrid3X3 />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>Creations</Text>
      </Flex>
      <Flex
        alignItems="center"
        p="3"
        gap={1}
        cursor="pointer"
        borderBottom={selectedTab === "models" ? "2px solid white" : "none"}
        onClick={() => handleTabClick("models")}
      >
        <Box fontSize={20}>
          <SiMaterialdesignicons />
        </Box>
        <Text fontSize={12} display={{ base: "none", sm: "block" }}>Models</Text>
      </Flex>
    </Flex>
  )
}

export default Profiletabs