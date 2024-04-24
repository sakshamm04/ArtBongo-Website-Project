import React from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { FiFolder, FiFileText, FiDownload } from 'react-icons/fi';

const BongoRepo = () => {
  return (
    <Box p="4" bg="gray.800" color="white" borderRadius="md" boxShadow="md">
      {/* Top section for basic functionalities */}
      <Flex justify="space-between" alignItems="center" mb="4">
        <Box>
          <Text fontSize="2xl" fontWeight="bold">BongoRepo</Text>
          <Text fontSize="lg">Collaborate on 3D models with artists</Text>
        </Box>
        <Flex>
          <Icon as={FiDownload} boxSize="6" mr="2" />
          <Text fontSize="lg">Clone</Text>
        </Flex>
      </Flex>

      {/* Left section for repository files */}
      <Flex flexDirection="column" mr="4">
        <Box mb="4">
          <Text fontSize="xl" fontWeight="bold">Files</Text>
          <Flex alignItems="center" mt="2">
            <Icon as={FiFolder} mr="2" />
            <Text>Folder1</Text>
          </Flex>
          <Flex alignItems="center" mt="2">
            <Icon as={FiFileText} mr="2" />
            <Text>File1.txt</Text>
          </Flex>
        </Box>
        {/* Add more files as needed */}
      </Flex>

      {/* Right section for other stuff */}
      <Box flex="1">
        <Box mb="4">
          <Text fontSize="xl" fontWeight="bold">Branches</Text>
          <Text mt="2">main</Text>
        </Box>
        <Box>
          <Text fontSize="xl" fontWeight="bold">Size</Text>
          <Text mt="2">10 MB</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default BongoRepo;