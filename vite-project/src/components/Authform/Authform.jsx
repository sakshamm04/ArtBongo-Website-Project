import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './Authform.css'
import Login from './Login'
import Signup from './Signup'
import Googleauth from './Googleauth'

const Authform = () => {
    const [islogin, setlogin] = useState(true);

    return (
    <>
        <Box className='buxa' border={"1px solid gray"} borderRadius={10} padding={10}>
            <VStack spacing={4}>
                <Image src='./public/ArtBongo2.png' style={{ width: '200px', height: 'auto' }} alt='ArtBongo Logo'/>
                {islogin ? <Login /> : <Signup />}
                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                </Flex>
                <Googleauth />
            </VStack>
        </Box>
        <Box className='buxa2' border={"1px solid gray"} borderRadius={10} padding={4}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={1} fontSize={10} >
                    {islogin ? "Don't have an account?" : "Already have an account?"}
                </Box>
                <Box onClick={() => setlogin(!islogin)} color={"blue.300"} cursor={"pointer"} fontSize={10}>
                    {islogin ? "Sign Up" : "Log in"}
                </Box>
            </Flex>
        </Box>
    </>
  )
}

export default Authform

// import { Box, Flex, Image, Text, VStack } from '@chakra-ui/react'
// import React, { useState } from 'react'
// import './Authform.css'
// import Login from './Login'
// import Signup from './Signup'
// import Googleauth from './Googleauth'

// const Authform = () => {
//     const [islogin, setlogin] = useState(true)
    
   
//   return (
//     <>
//         <Box className='buxa' border={"1px solid gray"} borderRadius={10} padding={10}>
//             <VStack spacing={4}>
//                 <Image src='./public/ArtBongo2.png' style={{ width: '200px', height: 'auto' }} alt='ArtBongo Logo'/>
                
//                 {islogin ?<Login/> : <Signup/>}

//                 <Flex alignItems={"center"} justifyContent={"center"} my={2} gap={1} w={"full"}>
//                     <Box flex={2} h={"1px"} bg={"gray.400"}/>
//                     <Text mx={1} color={"white"}>OR</Text>
//                     <Box flex={2} h={"1px"} bg={"gray.400"}/>
//                 </Flex>

//                 <Googleauth />
                
//             </VStack>
//         </Box>
        // <Box className='buxa2' border={"1px solid gray"} borderRadius={10} padding={4}>
        //     <Flex alignItems={"center"} justifyContent={"center"}>
        //         <Box mx={1} fontSize={10} >
        //             {islogin ? "Don't have an account?" : "Already have an account?"}
        //         </Box>
        //         <Box onClick={() => setlogin(!islogin)} color={"blue.500"} cursor={"pointer"} fontSize={10}>
        //             {islogin ? "Sign Up" : "Log in"}
        //         </Box>
        //     </Flex>
        // </Box>
//     </>
//   )
// }

// export default Authform
