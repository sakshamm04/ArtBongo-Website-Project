import { Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Profileheader from '../Profile/Profileheader'
import Profiletabs from '../Profile/Profiletabs'
import Profileposts from '../Profile/Profileposts'
import './Profilepage.css'
const Profilepage = () => {
  return (
    <Container className='pagebuxa' maxW="container.lg" py={5}>
        <Flex py={5} px={4} pl={{base:4,md:10}} w={"full"} mx={"auto"}
        flexDirection={"column"}>
            <Profileheader />
        </Flex>
        <Flex px={{base:2,sm:4}}
        maxW={"full"}
        borderTop={"1px solid"}
        borderColor={"gray"}
        direction={"column"}
        >
            <Profiletabs />
            <Profileposts />
        </Flex>
    </Container>
  )
}

export default Profilepage