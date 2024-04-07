import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Suggesteduser = ({followers,name,avatar}) => {
    const [isfollowed, setisfollowed] = useState(false)
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={avatar} name={name} size={"md"} />
            <VStack spacing={2} alignItems={"flex-start"}>
                <Box fontSize={12} fontWeight={"bold"}>
                    {name}
                </Box>
                <Box fontSize={11} color={"whiet"}>
                    {followers} followers
                </Box>
            </VStack>
        </Flex>
        <Button fontSize={13}
        backdropBlur={"transparent"}
        p={2}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{color:"white"}}
        onClick={() => setisfollowed(!isfollowed)}
        >
            {isfollowed ? "Unfollow" : "Follow"}
        </Button>
    </Flex>
  )
}

export default Suggesteduser