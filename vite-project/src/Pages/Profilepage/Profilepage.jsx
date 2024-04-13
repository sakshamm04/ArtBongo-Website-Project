// import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
// import React from 'react'
// import Profileheader from '../Profile/Profileheader'
// import Profiletabs from '../Profile/Profiletabs'
// import Profileposts from '../Profile/Profileposts'
// import './Profilepage.css'
// import useGetUserProfileByUsername from '../../hooks/useGetUserProfileByUsername'
// import { useParams } from "react-router-dom"
// import { Link as RouterLink } from "react-router-dom"

// const Profilepage = () => {
//   const {username} = useParams()
//   const {isLoading, userProfile} = useGetUserProfileByUsername(username)

//   const userNotFound = !isLoading && !userProfile;
// 	if (userNotFound) return <UserNotFound />;

//   return (
//     <Container className='pagebuxa' maxW="container.lg" py={5}>
//         <Flex py={5} px={4} pl={{base:4,md:10}} w={"full"} mx={"auto"}
//         flexDirection={"column"}>
//             {!isLoading && userProfile && <Profileheader />}
// 				{isLoading && <ProfileHeaderSkeleton />}
//         </Flex>
//         <Flex px={{base:2,sm:4}}
//         maxW={"full"}
//         borderTop={"1px solid"}
//         borderColor={"gray"}
//         direction={"column"}
//         >
//             <Profiletabs />
//             <Profileposts />
//         </Flex>
//     </Container>
//   )
// }

// export default Profilepage

// const ProfileHeaderSkeleton = () => {
// 	return (
// 		<Flex
// 			gap={{ base: 4, sm: 10 }}
// 			py={10}
// 			direction={{ base: "column", sm: "row" }}
// 			justifyContent={"center"}
// 			alignItems={"center"}
// 		>
// 			<SkeletonCircle size='24' />

// 			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
// 				<Skeleton height='12px' width='150px' />
// 				<Skeleton height='12px' width='100px' />
// 			</VStack>
// 		</Flex>
// 	);
// };

// const UserNotFound = () => {
// 	return (
// 		<Flex flexDir='column' textAlign={"center"} mx={"auto"}>
// 			<Text fontSize={"2xl"}>User Not Found</Text>
// 			<Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>
// 				Go home
// 			</Link>
// 		</Flex>
// 	);
// };

import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react";
import Profileheader from '../Profile/Profileheader'
import Profiletabs from "../Profile/Profiletabs";
import Profileposts from "../Profile/Profileposts";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import useGetUserProfileByUsername from "../../hooks/useGetUserProfileByUsername";

const ProfilePage = () => {
	const { username } = useParams();
	const { isLoading, userProfile } = useGetUserProfileByUsername(username);

	const userNotFound = !isLoading && !userProfile;
	if (userNotFound) return <UserNotFound />;

	return (
		<Container maxW='container.lg' py={5}>
			<Flex py={10} px={4} pl={{ base: 4, md: 10 }} w={"full"} mx={"auto"} flexDirection={"column"}>
				{!isLoading && userProfile && <Profileheader />}
				{isLoading && <ProfileHeaderSkeleton />}
			</Flex>
			<Flex
				px={{ base: 2, sm: 4 }}
				maxW={"full"}
				mx={"auto"}
				borderTop={"1px solid"}
				borderColor={"whiteAlpha.300"}
				direction={"column"}
			>
				<Profiletabs />
				<Profileposts />
			</Flex>
		</Container>
	);
};

export default ProfilePage;

// skeleton for profile header
const ProfileHeaderSkeleton = () => {
	return (
		<Flex
			gap={{ base: 4, sm: 10 }}
			py={10}
			direction={{ base: "column", sm: "row" }}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<SkeletonCircle size='24' />

			<VStack alignItems={{ base: "center", sm: "flex-start" }} gap={2} mx={"auto"} flex={1}>
				<Skeleton height='12px' width='150px' />
				<Skeleton height='12px' width='100px' />
			</VStack>
		</Flex>
	);
};

const UserNotFound = () => {
  return (
      <Flex
          flexDir='column'
          textAlign='center'
          justifyContent='center'
          alignItems='center'
          h='100vh' // Set the height of the Flex container to 100vh to take up the full viewport height
      >
          <Text fontSize='2xl'>User Not Found</Text>
          <Link as={RouterLink} to='/' color='blue.500' mt={4}>
              Go home
          </Link>
      </Flex>
  );
};

// const UserNotFound = () => {
//   return (
//       <Flex
//           flexDir='column'
//           textAlign='center'
//           justifyContent='center'
//           alignItems='center'
//           h='100vh'
//           bg='gray.100' // Background color
//       >
//           <Text fontSize='3xl' fontWeight='bold' color='gray.800' mb={4}>
//               Oops, User Not Found!
//           </Text>
//           <Text fontSize='xl' color='gray.600' mb={8}>
//               It seems the user you are looking for does not exist.
//           </Text>
//           <Link
//               as={RouterLink}
//               to='/'
//               color='blue.500'
//               fontWeight='bold'
//               textDecoration='underline'
//               _hover={{ textDecoration: 'none', color: 'blue.600' }}
//           >
//               Go home
//           </Link>
//       </Flex>
//   );
// };