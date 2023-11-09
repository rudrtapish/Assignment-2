import React, { useState } from 'react';
import { Box, Input, Button, FormControl, FormLabel, Flex } from '@chakra-ui/react';
import GithubCard from './GithubCard';

const App = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    setUser(data);
  };

  return (
    <Box p={8}>
      <FormControl>
        <FormLabel>GitHub Username</FormLabel>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button mt={4} onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      {user && <GithubCard user={user} />}
    </Box>
  );
};

export default App;
