import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Feedpost from './Feedpost'
import './Feedposts.css'
import useGetFeedPosts from '../../hooks/useGetFeedPosts'

const FeedPosts = () => {
	const { isLoading, posts } = useGetFeedPosts();

	return (
		<Container maxW={"container.sm"} py={10} px={2}>
			{isLoading &&
				[0, 1, 2].map((_, idx) => (
					<VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
						<Flex gap='2'>
							<SkeletonCircle size='10' />
							<VStack gap={2} alignItems={"flex-start"}>
								<Skeleton height='10px' w={"200px"} />
								<Skeleton height='10px' w={"200px"} />
							</VStack>
						</Flex>
						<Skeleton w={"full"}>
							<Box h={"400px"}>contents wrapped</Box>
						</Skeleton>
					</VStack>
				))}

			{!isLoading && posts.length > 0 && posts.map((post) => <Feedpost key={post.id} post={post} />)}
			{!isLoading && posts.length === 0 && (
				<>
					<Text fontSize={"md"} color={"red.400"}>
						Dayuum. Looks like you don&apos;t have any friends.
					</Text>
					<Text color={"red.400"}>Stop sculpting and go make some!!</Text>
				</>
			)}
		</Container>
	);
};

export default FeedPosts;