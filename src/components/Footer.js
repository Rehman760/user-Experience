import { Box, Heading } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" bg="black" color="white" px={4} py={8}>
      <Box textAlign="center">
        <Heading as="h1" fontSize="3xl" mb={4}>This is a website for cards</Heading>
        <Heading as="h3" fontSize="md">Version 1.0</Heading>
      </Box>
    </Box>
  );
}

export default Footer;
