import { Box, Text, Link } from '@chakra-ui/react';

function WhatIs() {
  return (
    <Box px={4} py={2} _hover={{ bg: 'gray.800' }}>
      <Link href="#" textDecoration="none">
        <Text fontWeight="bold" color="black" fontSize="sm">
          What is this?
        </Text>
      </Link>
      <Text fontSize="xs" color="gray.300" mt={1}>
        Perspective Cards are a tool to help creatives bring diversity of thought into their work.
        Each of these cards gives you a different perspective coupled with actionable steps to help you gain new insights, challenge your bias, and (hopefully) help you design products for everyone, everywhere.
        Please feel free to use them, share them, remix them.
        <br />
        <br />
        <i>
          Creative Commons License
          <br />
          This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.
        </i>
      </Text>
    </Box>
  );
}

export default WhatIs;
