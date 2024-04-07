import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Googleauth = () => {
    return (
        <>
            <Flex alignContent={"center"} justifyContent={"center"} cursor={"pointer"}>
                <Image src='/google.png' w={4} alt='Google logo' />
                <Text mx={1} color={"blue.500"} fontSize={10.5}>
                    Log in with Google
                </Text>
            </Flex>
        </>
    )
}

export default Googleauth