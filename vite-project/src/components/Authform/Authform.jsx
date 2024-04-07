import { Box, Button, Flex, Image, Input, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import './Authform.css'

const Authform = () => {
    const [islogin, setlogin] = useState(true)
    const navigate = useNavigate()
    const [inputs, setinputs] = useState({
        email:'',
        password:'',
        confirmPassword:'',
        firstname:'',
        lastname:'',
        contact:''
    })
    const handleauth = () => {
        if(!inputs.email || !inputs.password)
            alert("Please fill the fields!")
        else
            navigate("/")
    }

  return (
    <>
        <Box className='buxa' border={"1px solid gray"} borderRadius={10} padding={10}>
            <VStack spacing={4}>
                <Image src='./public/ArtBongo2.png' style={{ width: '200px', height: 'auto' }} alt='ArtBongo Logo'/>

                <Input
                placeholder='Email'
                fontSize={12}
                type='email'
                value={inputs.email}
                onChange={(e) => setinputs({...inputs,email:e.target.value})}
                />
                <Input
                placeholder='Password'
                fontSize={12}
                type='password'
                value={inputs.password}
                onChange={(e) => setinputs({...inputs,password:e.target.value})}
                />
                
                {!islogin ? (
                <Input placeholder='Confirm Password'
                fontSize={12}
                type='password'
                value={inputs.confirmPassword}
                onChange={(e) => setinputs({...inputs,confirmPassword:e.target.value})}
                /> ) : null}
                {!islogin ? (
                <Input placeholder='First Name'
                fontSize={12}
                value={inputs.firstname}
                onChange={(e) => setinputs({...inputs,firstname:e.target.value})}
                /> ) : null}
                {!islogin ? (
                <Input placeholder='Last Name'
                fontSize={12}
                value={inputs.lastname}
                onChange={(e) => setinputs({...inputs,lastname:e.target.value})}
                /> ) : null}
                {!islogin ? (
                <Input placeholder='Contact'
                fontSize={12}
                value={inputs.contact}
                onChange={(e) => setinputs({...inputs,contact:e.target.value})}
                /> ) : null}

                <Button w={"full"} colorScheme='blue' size={"sm"} fontSize={12} onClick={handleauth}>
                    {islogin? "Log In" : "Sign Up"}
                </Button>

                <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                    <Text mx={1} color={"white"}>OR</Text>
                    <Box flex={2} h={"1px"} bg={"gray.400"}/>
                </Flex>

                <Flex alignContent={"center"} justifyContent={"center"} cursor={"pointer"}>
                <Image src='/google.png' w={4} alt='Google logo' />
                <Text mx={1} color={"blue.500"} fontSize={10.5}>
                    Log in with Google
                </Text>
            </Flex>
            </VStack>
        </Box>
        <Box className='buxa2' border={"1px solid gray"} borderRadius={10} padding={4}>
            <Flex alignItems={"center"} justifyContent={"center"}>
                <Box mx={1} fontSize={10} >
                    {islogin ? "Don't have an account?" : "Already have an account?"}
                </Box>
                <Box onClick={() => setlogin(!islogin)} color={"blue.500"} cursor={"pointer"} fontSize={10}>
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
