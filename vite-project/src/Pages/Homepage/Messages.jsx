import { Box, Flex } from "@chakra-ui/react";
import React from 'react'
import { LuMessagesSquare } from "react-icons/lu";


const Messages = () => {
    return (
        <>
            <Flex gap={3} cursor={"pointer"}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            >
            <LuMessagesSquare size={25} />
            <Box>Messages</Box>
            </Flex>
        </>
    );
};

export default Messages