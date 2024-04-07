import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feedposts from '../Feedposts/Feedposts'
import Suggestedusers from '../../components/Suggestedusers/Suggestedusers'
import './Homepage.css'
const Homepage = () => {
  return <Container maxW={"container.lg"}>
    <Flex gap={20}>
      <Box flex={2} py={10}>
        <Feedposts />
      </Box>
      <Box flex={3} mr={20}
        display={{ base: "none", lg: "block" }}
        maxW={"300px"}
      >
        <Suggestedusers />
      </Box>
    </Flex>
  </Container>
}

export default Homepage