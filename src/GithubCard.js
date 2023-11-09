import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Heading
} from '@chakra-ui/react';

const GithubCard = ({ user }) => {
    return (
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={4}
      >
        <Image src={user.avatar_url} alt={user.login} borderRadius="full" boxSize="100px" />
        <Flex mt={2} alignItems="center">
          <Heading as="h3" size="md">
            {user.login}
          </Heading>
        </Flex>
        <Text mt={2}>{user.name}</Text>
        <Text mt={2}>Public Repos: {user.public_repos}</Text>
        <Text mt={2}>Public Gists: {user.public_gists}</Text>
        <Text mt={2}>Profile Created: {user.created_at.substring(0, 10)}</Text>
      </Box>
    );
  };
  
  export default GithubCard;
  