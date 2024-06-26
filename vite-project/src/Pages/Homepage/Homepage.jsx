import { Box, Container, Flex, Image, VStack, Link } from '@chakra-ui/react'
import React from 'react'
import Feedposts from '../Feedposts/Feedposts'
import Suggestedusers from '../../components/Suggestedusers/Suggestedusers'
import './Homepage.css'
import { Link as RouterLink } from 'react-router-dom'

const Homepage = () => {
  return (
    <Box>
      <Flex gap={1}>
        <Box
          flex={2} py={1}>
          <Feedposts />
        </Box>
        <Box
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          borderLeftWidth={1}
        >
          <VStack
            className='rightbuxa'
            py={5} alignContent={"center"}
            height={"100vh"}
            top={0}
            right={0}
            position={"sticky"}>
            <Suggestedusers />
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Homepage