import { Avatar,  Flex, Link, Text, textDecoration } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from "react-router-dom"
const Suggestedheader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar name='As a Programmer' size={"md"} src='/3dsam.jpeg' border={'2px'}/>
            <Text fontSize={12} fontWeight={"bold"}>
                3dsam
            </Text>
        </Flex>
        <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{textDecoration:"none"}}
        cursor={"pointer"}
        >
            Log Out
        </Link>
    </Flex>
  )
}

export default Suggestedheader