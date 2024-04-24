import { Box, Flex } from "@chakra-ui/react";
import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";


const Notifications = () => {
    return (
        <>
            <Flex gap={3} cursor={"pointer"}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            >
            <IoNotificationsOutline size={25}/>
            <Box>Notifications</Box>
            </Flex>
        </>
    );
};

export default Notifications