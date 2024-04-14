import { Avatar, AvatarGroup, Button, Flex, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import useAuthStore from '../../store/authStore';
import useUserProfileStore from '../../store/userProfileStore';
import EditProfile from './EditProfile';
import useFollowUser from '../../hooks/useFollowUser';

const Profileheader = () => {

  const { userProfile } = useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(userProfile?.uid);
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
  const visitingAnotherProfileAndAuth = authUser && authUser.username !== userProfile.username;

  return (
    <VStack gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", sm: "2xl" }} // Adjust the sizes as needed
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar src={userProfile.profilePicURL} alt="Profile Picture" />
      </AvatarGroup>

      <VStack
        alignItems={"center"} gap={2}
        mx={"auto"} flex={1}
      >
        <VStack gap={3} direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"} w={"full"}>
          <Text fontSize={{ base: "sm", md: "lg" }}>
            {userProfile.username}
          </Text>

          {visitingOwnProfileAndAuth && <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.600" }}
              size={{ base: "xs", md: "sm" }}
              onClick={onOpen}
            >
              Edit Profile
            </Button>
          </Flex>}
          {visitingAnotherProfileAndAuth && (<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.600" }}
              size={{ base: "xs", md: "sm" }}
              onClick={handleFollowUser}
              isLoading={isUpdating}
              >
              {isFollowing ? "Unfollow" : "Follow"}
            </Button>
          </Flex>)}

        </VStack>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}
              fontSize={{ base: "xs", md: "sm" }}>{userProfile.posts.length}</Text>
            Creations
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}
              fontSize={{ base: "xs", md: "sm" }}>{userProfile.followers.length}</Text>
            Followers
          </Text>
          <Text>
            <Text as="span" fontWeight={"bold"} mr={1}
              fontSize={{ base: "xs", md: "sm" }}>{userProfile.following.length}</Text>
            Following
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            {userProfile.fullname}
          </Text>
        </Flex>
        <Text fontSize={"sm"}> {userProfile.bio} </Text>
      </VStack>
      {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
    </VStack>
  )
}

export default Profileheader