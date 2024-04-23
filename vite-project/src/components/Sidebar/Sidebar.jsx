import { Box, Button, Flex, Image, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { BiLogOut } from "react-icons/bi"
import './Sidebar.css'
import useLogout from '../../hooks/useLogOut'
import SidebarItems from './SidebarItems'

const Sidebar = () => {
  
  const { handleLogout, isLoggingOut } = useLogout()
  return <Box
    className='sidebarbuxa'
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{ base: 2, md: 4 }}
  >

    <Flex direction={"column"} gap={10} w="full" height={"full"}>
      <Link to={"/"} as={RouterLink} pl={0.5} display={{ base: "none", md: "block" }}
        borderRadius={6}
        _hover={{
          bg: "whiteAlpha.200"
        }}
        cursor={"pointer"}>
        <Image src='/public/ArtBongo2.png' h={10} />
      </Link>
      <Link to={"/"} as={RouterLink} p={2} display={{ base: "block", md: "none" }} cursor={"pointer"}>
        <Image src='/public/ArtBongoMobileLogo.png' />
      </Link>
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        <SidebarItems/>
      </Flex>
      {/* LogOut */}
      <Tooltip
        hasArrow
        label={"Logout"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: 'block', md: 'none' }}
      >
        <Flex
          onClick={handleLogout}
          alignItems={"center"}
          _hover={{ bg: "whiteAlpha.200" }}
          gap={4}
          borderRadius={6}
          p={2}
          w={{ base: "10", md: "full" }}
          mt={"auto"}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <BiLogOut size={25} />
          <Button display={{ base: "none", md: "block" }}
            variant={"ghost"}
            _hover={{ bg: "transparent" }}
            isLoading={isLoggingOut}
          >Logout</Button>
        </Flex>
      </Tooltip>
    </Flex>

  </Box>
}

export default Sidebar;