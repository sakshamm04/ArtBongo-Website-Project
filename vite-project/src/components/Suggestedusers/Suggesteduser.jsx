import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import useFollowUser from '../../hooks/useFollowUser'
import useAuthStore from '../../store/authStore';

const Suggesteduser = ({ user, setUser }) => {
    const {isFollowing, isUpdating, handleFollowUser} = useFollowUser(user.uid);
    const authUser = useAuthStore(state => state.user);

    const onFollowUser = async () => {
		await handleFollowUser();
		setUser({
			...user,
			followers: isFollowing
				? user.followers.filter((follower) => follower.uid !== authUser.uid)
				: [...user.followers, authUser],
		});
	};

    
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex alignItems={"center"} gap={2}>
            <Avatar src={user.profilePicURL} size={"md"} />
            <VStack spacing={2} alignItems={"flex-start"}>
                <Box fontSize={12} fontWeight={"bold"}>
                    {user.fullName}
                </Box>
                <Box fontSize={11} color={"whiet"}>
                    {user.followers.length} followers
                </Box>
            </VStack>
        </Flex>
        {authUser.uid !== user.uid && (
            <Button fontSize={13}
            backdropBlur={"transparent"}
            p={2}
            h={"max-content"}
            fontWeight={"medium"}
            color={"blue.400"}
            cursor={"pointer"}
            _hover={{color:"white"}}
            onClick={onFollowUser}
            isLoading={isUpdating}
            >
                {isFollowing ? "Unfollow" : "Follow"}
            </Button>
        )}
    </Flex>
  )
}

export default Suggesteduser