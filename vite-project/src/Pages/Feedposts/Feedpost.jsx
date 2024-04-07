import React from 'react'
import PostHeader from "./PostHeader"
import PostFooter from "./PostFooter"
import { Box, Image } from '@chakra-ui/react'

const Feedpost = ({img,username,avatar}) => {
  return (
    <>
        <PostHeader username={username} avatar={avatar}/>
        <Box my={2}
        borderRadius={4}
        overflow={"hidden"}
        >
            <Image src={img} alt={username}/>
        </Box>
        <PostFooter username={username}/>
    </>
  )
}

export default Feedpost