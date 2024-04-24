import { Box, Flex } from "@chakra-ui/react";
import React from 'react'
import { TbArrowRoundaboutRight } from "react-icons/tb";


const Abouts = () => {
    return (
        <>
            <Flex gap={3} cursor={"pointer"}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            >
            <TbArrowRoundaboutRight size={25}/>
            <Box>Abouts</Box>
            </Flex>
        </>
    );
};

export default Abouts