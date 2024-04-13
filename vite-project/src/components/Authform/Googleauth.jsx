// import { Flex, Image, Text } from '@chakra-ui/react'
// import React from 'react'

// const Googleauth = ({prefix}) => {
//     return (
//         <>
//             <Flex alignContent={"center"} justifyContent={"center"} cursor={"pointer"}>
//                 <Image src='/google.png' w={4} alt='Google logo' />
//                 <Text mx={1} color={"blue.300"} fontSize={10.5}>
//                     {prefix} with Google
//                 </Text>
//             </Flex>
//         </>
//     )
// }

// export default Googleauth

import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../../firebase/firebase'
import useShowToast from '../../hooks/useShowToast'
import useAuthStore from '../../store/authStore'
import { doc, getDoc, setDoc } from 'firebase/firestore'

const Googleauth = ({ prefix }) => {
    const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore((state) => state.login);

    const handleGoogleAuth = async () => {
        try {
            const newUser = await signInWithGoogle()
            if(!newUser && error){
                showToast("Error",error.message,"error")
                return
            }
            const userRef = doc(firestore, "users", newUser.user.uid);
            const userSnap = await getDoc(userRef);

            if(userSnap.exists()){
                // Checking is there already a userid with the given details if yes then Login
                const userDoc = userSnap.data();
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc)
            } else {
                //Signup with google
                const userDoc = {
					uid: newUser.user.uid,
					email: newUser.user.email,
					username: newUser.user.email.split("@")[0],
					fullName: newUser.user.displayName,
					bio: "",
					profilePicURL: newUser.user.photoURL,
					followers: [],
					following: [],
					posts: [],
					createdAt: Date.now(),
				};
				await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
				localStorage.setItem("user-info", JSON.stringify(userDoc));
				loginUser(userDoc)
            }
        } catch (error) {
        showToast("Error",error.message,"error")
        }
    }

    return (
        <>
            <Box
                p={2}
                borderRadius="9999px" /* Use a large value to create a cylindrical shape */
                border="1px solid transparent"
                backgroundColor="white"
                transition="all 0.3s"
                _hover={{
                    backgroundColor: 'gray.300',
                    borderColor: 'gray.300',
                }}
            >
                <Flex alignContent={"center"} justifyContent={"center"}
                cursor={"pointer"}
                onClick={handleGoogleAuth}
                >
                    <Image src='/google.png' w={4} alt='Google logo' />
                    <Text mx={1} color={"black"} fontSize={10.5}>
                        {prefix} with Google
                    </Text>
                </Flex>
            </Box>
        </>
    )
}

export default Googleauth