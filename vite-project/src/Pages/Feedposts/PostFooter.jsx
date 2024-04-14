import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useState } from 'react'
import { CommentLogo, NotificationsLogo, UnlikeLogo } from '../../Assests/constants'
import usePostComment from '../../hooks/usePostComment'
import useAuthStore from '../../store/authStore'
import useLikePost from '../../hooks/useLikePost'
import { timeAgo } from '../../utils/timeAgo'
import CommentsModal from '../../components/Modals/CommentsModal'

const PostFooter = ({ post, creatorProfile, isprofilepage }) => {
  const { isCommenting, handlePostComment } = usePostComment()
  const [comment, setComment] = useState("");
  const commentRef = useRef(null);
  const authUser = useAuthStore((state) => state.user);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  }
  return (
    <Box mb={10} marginTop={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0}
        mb={2} mt={3}>
        <Box onClick={handleLikePost}
          cursor={"pointer"}
          fontSize={18}>
          {!isLiked ? (<NotificationsLogo />) : (<UnlikeLogo />)}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={() => commentRef.current.focus()}>
          <CommentLogo />
        </Box>

      </Flex>
      <Text fontSize={"sm"} fontWeight={600} cursor={"pointer"}>
        {likes} likes
      </Text>
      {isprofilepage && (
        <Text fontSize={12} color={"gray"}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}
      {!isprofilepage && (
        <>
          <Text fontSize={"sm"} fontWeight={700} cursor={"pointer"} onClick={onOpen}>
            {creatorProfile?.username}{" "}
            <Text as={'span'} fontWeight={400} cursor={"text"}>
              {post.caption}
            </Text>
          </Text>
          {post.comments.length > 0 && (
            <Text fontSize={"sm"} color={"gray"} cursor={"pointer"}>
              View all {post.comments.length} comments
            </Text>
          )}
          {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post} /> : null }
        </>
      )}
      {authUser && (
        <Flex
          alignItems={"center"}
          gap={2}
          justifyContent={"space-between"}
          w={"full"}
        >
          <InputGroup>
            <Input className='colorbhai' variant={"flushed"} placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentRef}
            />
            <InputRightElement>
              <Button
                fontSize={14}
                color={"blue.500"}
                fontWeight={600}
                cursor={"pointer"}
                _hover={{ color: "white" }}
                bg={"transparent"}
                onClick={handleSubmitComment}
                isLoading={isCommenting}
              >
                Post
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  )
}

export default PostFooter