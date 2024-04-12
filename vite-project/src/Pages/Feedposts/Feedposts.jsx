import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react'
import React from 'react'
import Feedpost from './Feedpost'
import { useState } from 'react'
import { useEffect } from 'react'
import './Feedposts.css'
const Feedposts = () => {
  const [isloading,setisloading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setisloading(false)
    },2000)
  },[])
  return (
    <Container className='feedbuxa' maxW={"container.sm"} py={10} px={3}>
      {isloading && [0,1,2,3].map((_,idx) =>
        <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
          <Flex gap="2">
            <SkeletonCircle size='10'/>
            <VStack gap={2} alignItems={"flex-start"}>
              <Skeleton height='10px' w={"200px"}/>
              <Skeleton height='10px' w={"200px"}/>
            </VStack>
          </Flex>
          <Skeleton w={"full"}>
            <Box h={"500px"}>contents wrapped</Box>
          </Skeleton>
        </VStack>
      )}
        {!isloading && (
          <>
            <Feedpost img='/Setting.jpeg' username='kennyphases' avatar='/kenn.jpeg'/>
            <Feedpost img='/duck.jpeg' username='ducky3d' avatar='/ducky.jpeg'/>
            <Feedpost img='/andeww.jpeg' username='andrewpprice' avatar='/andrew.jpeg'/>
            <Feedpost img='/efee.jpeg' username='efeislekel' avatar='/efe.jpeg'/>
            <Feedpost img='/cgg.jpeg' username='cg_geeks' avatar='/cg.jpeg'/>
          </>
        )}
    </Container>
  )
}

export default Feedposts