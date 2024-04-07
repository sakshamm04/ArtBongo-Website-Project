import { Text, Flex, VStack, Box, Link } from '@chakra-ui/react'
import React from 'react'
import Suggestedheader from './Suggestedheader'
import Suggesteduser from './Suggesteduser'

const Suggestedusers = () => {
  return (
    <VStack className='buxaa' py={10} px={6} gap={4}>
        <Suggestedheader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Text fontSize={12} fontWeight={"bold"} color={"white"}>
                Suggested For you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See all
            </Text>
        </Flex>
        <Suggesteduser name='Zac Farmer' followers={'39K'} avatar='https://yt3.googleusercontent.com/J-cP11p72ewomIglAkY2YqNCV2ONjTNfQV6G6bZySsFfE4_IuLe206Ma7r4DMs7A6r0PYX9YBQ=s900-c-k-c0x00ffffff-no-rj'/>
        <Suggesteduser name='Jalex Rosa' followers={'665K'} avatar='https://www.famousbirthdays.com/faces/rosa-jales-image.jpg'/>
        <Suggesteduser name='Brandon Bilyk' followers={'58.4K'} avatar='https://yt3.googleusercontent.com/DFcf1gaQuAejiyUemX5nmyMTvweRg1qi-95X0zmvIxZcofwtHHlrODISJ3p9cLLfkk737qA9j6A=s900-c-k-c0x00ffffff-no-rj'/>
        <Suggesteduser name='BlenderKit' followers={'16.4k'} avatar='https://public.blenderkit.com/images/Articles_BK_discord.2e16d0ba.fill-320x180.format-webp.webp'/>
        <Box
    fontSize={12}
    color={"white"}
    mt={5}
    >
        @2024 Built By {""}
    <Link href='https://www.youtube.com/@BlenderGuy3dSam' target='_blank' color={'blue.400'}
    fontSize={14}>
        Saksham Pathak(3dsam)
    </Link>
    </Box>
    </VStack>
  )
}

export default Suggestedusers