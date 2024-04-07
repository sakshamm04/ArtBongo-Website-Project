// import { Box, Container, Flex, VStack, Image } from '@chakra-ui/react'
// import React from 'react'
// import Authform from '../../components/Authform/Authform'

// const Authpage = () => {
//   return (
//     <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
//         <Container maxW={"container.md"} padding={10}>

//             {/* LOGIN BOX */}
//             {/* VSTACK USED TO ALIGN ITEMS OVER EACH OTHER VERTICALLY */}
//             {/* AND FLEX FOR SIDE BY SIDE */}

//             <VStack spacing={4} align={"stretch"}>
//                 <Authform/>
//                 <Box textAlign={"center"}>Dive into the world of Artistic Models.</Box>
//                 <Flex gap={5} justifyContent={"center"}>
//                     <Image src='/playstore.png' h={10} alt='Playstore logo' cursor={"pointer"}/>
//                     <Image src='/microsoft.png' h={10} alt='Microsoft logo' cursor={"pointer"}/>
//                 </Flex>
//             </VStack>
//         </Container>
//     </Flex>
//   )
// }

// export default Authpage

// import { Box, Container, Flex, VStack, Image } from '@chakra-ui/react'
// import React from 'react'
// import Authform from '../../components/Authform/Authform'

// const Authpage = () => {
//   return (
//     <Box
//       bgImage="url('https://images3.alphacoders.com/104/1045596.jpg')"  // Replace with your image path
//       bgSize="cover"
//       bgPosition="center"
//       minH="100vh"
//       py={8}
//     >
//       <Flex minH="100vh" justifyContent="center" alignItems="center" px={4}>
//         <Container maxW="container.md" padding={20}>

//           {/* LOGIN BOX */}
//           {/* VSTACK USED TO ALIGN ITEMS OVER EACH OTHER VERTICALLY */}
//           {/* AND FLEX FOR SIDE BY SIDE */}

//           <VStack spacing={4} align="stretch">
//             <Authform />
//             <Box textAlign="center">Dive into the world of Artistic Models.</Box>
//             <Flex gap={5} justifyContent="center">
//               <Image src="/playstore.png" h={10} alt="Playstore logo" cursor="pointer" />
//               <Image src="/microsoft.png" h={10} alt="Microsoft logo" cursor="pointer" />
//             </Flex>
//           </VStack>
//         </Container>
//       </Flex>
//     </Box>
//   )
// }

// export default Authpage

import { Box, Container, Flex, VStack, Image } from '@chakra-ui/react'
import React from 'react'
import Authform from '../../components/Authform/Authform'

const Authpage = () => {
  return (
    <Box
      bgImage="url('https://images3.alphacoders.com/104/1045596.jpg')"  // Replace with your image path
      bgSize="cover"
      bgPosition="center"
      minH="100vh"
      py={8}
    >
      <Flex justifyContent="center" alignItems="center">
        <Container maxW="container.md" padding={20}>

          <VStack spacing={4} align="stretch">
            <Authform />
            <Box fontSize={12} textAlign="center">Dive into the world of Artistic Models.</Box>
            <Flex gap={5} justifyContent="center">
              <Image src="/playstore.png" h={8} alt="Playstore logo" cursor="pointer" />
              <Image src="/microsoft.png" h={8} alt="Microsoft logo" cursor="pointer" />
            </Flex>
          </VStack>
        </Container>
      </Flex>
    </Box>
  )
}

export default Authpage
