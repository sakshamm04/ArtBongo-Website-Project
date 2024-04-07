import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Profilepost from './Profilepost'

const Profileposts = () => {
  const [isloading, setloading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setloading(false)
    },2000)
  },[])
  return (
    <Grid className='postkabuxa'
      templateColumns={{
        sm:"repeat(1, 1fr)",
        md:"repeat(3, 1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {isloading && [0,1,2,3,4,5].map((_,idx) => (
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h="300px">contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
      {!isloading && (
        <>
          <Profilepost img="/public/creation1.jpeg" />
          <Profilepost img="/public/creation2.jpeg" />
          <Profilepost img="/public/creation3.jpeg" />
          <Profilepost img="/public/creation4.jpeg" />
        </>
      )}
    </Grid>
  )
}

export default Profileposts