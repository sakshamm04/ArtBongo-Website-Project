import { Avatar, Box, Flex, Image, Link, Tooltip } from '@chakra-ui/react'
import React from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { RiHomeSmileFill, RiSearchEyeFill, RiNotificationFill } from "react-icons/ri"
import { BiLogOut } from "react-icons/bi"
import { IoLogoModelS } from "react-icons/io"
import { MdOutlineTexture } from "react-icons/md"
import { FaMountainSun } from "react-icons/fa6"
import './Sidebar.css'

const Sidebar = () => {
  const sidebarItems = [
  //   {
  //     icons: <RiHomeSmileFill size={25} />,
  //     text: "Home",
  //     link: "/",
  // },
  {
    icons: <RiSearchEyeFill size={25}/>,
    text: "Search",
  },
  {
    icons: <RiNotificationFill size={25}/>,
    text: "Notification",
  },
  {
    icons: <IoLogoModelS size={25}/>,
    text: "Models",
  },
  {
    icons: <MdOutlineTexture size={25}/>,
    text: "Textures",
  },
  {
    icons: <FaMountainSun size={25}/>,
    text: "HDRIs",
  },
  {
    icons: <Avatar size={"sm"} name='Saksham Pathak' src='/3dsam.jpeg'/>,
    text: "Profile",
    link: "/3dsam",
  }]
  return <Box
    className='sidebarbuxa'
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2,md:4}}
  >

    <Flex direction={"column"} gap={10} w="full" height={"full"}>
      <Link to={"/"} as={RouterLink} pl={0.5} display={{base:"none",md:"block"}}
      borderRadius={6}
      _hover={{
        bg:"whiteAlpha.200"
      }}
      cursor={"pointer"}>
        <Image src='/public/ArtBongo2.png' h={10} />
      </Link>
      <Link to={"/"} as={RouterLink} p={2} display={{base:"block",md:"none"}} cursor={"pointer"}>
        <Image src='/public/ArtBongoMobileLogo.png' />
      </Link>
      <Flex direction={"column"} gap={5} cursor={"pointer"}>
        {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{base:'block',md:'none'}}
            >
              <Link
              display={"flex"}
              to={item.link || null}
              as={RouterLink}
              alignItems={"center"}
              _hover={{bg:"whiteAlpha.200"}}
              gap={4}
              borderRadius={6}
              p={2}
              w={{base: "10", md: "full"}}
              justifyContent={{base:"center",md:"flex-start"}}
              >
                {item.icons}
                <Box display={{base:"none",md:"block"}}>
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
        ))}
      </Flex>
      <Tooltip
              hasArrow
              label={"Logout"}
              placement="right"
              ml={1}
              openDelay={500}
              display={{base:'block',md:'none'}}
            >
              <Link
              display={"flex"}
              to={"/auth"}
              as={RouterLink}
              alignItems={"center"}
              _hover={{bg:"whiteAlpha.200"}}
              gap={4}
              borderRadius={6}
              p={2}
              w={{base: "10", md: "full"}}
              mt={"auto"}
              justifyContent={{base:"center",md:"flex-start"}}
              >
                <BiLogOut size={25} />
                <Box display={{base:"none",md:"block"}}>Logout</Box>
              </Link>
            </Tooltip>
    </Flex>

  </Box>
}

export default Sidebar;