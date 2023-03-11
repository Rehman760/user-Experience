import {Button, Box, Flex, Link, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
function Navbar() {
  return (
    <Box bg="black" color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link href="/" mr={4}>Logo</Link>
          <Link href="/WhatIS" mr={4}>What is this</Link>
          <Menu >
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Guide
          </MenuButton>
          <MenuList>
            <MenuItem  _hover={{ bg: 'black' }}>Download</MenuItem>
            <MenuItem  _hover={{ bg: 'black' }}>Create a Copy</MenuItem>
            <MenuItem _hover={{ bg: 'black' }}>Mark as Draft</MenuItem>
            <MenuItem _hover={{ bg: 'black' }}>Delete</MenuItem>
            <MenuItem _hover={{ bg: 'black' }}>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
          <Link href="/contact">Contact</Link>
        </Box>
        <Box>
          <Link href="/signin" mr={4}>Sign In</Link>
          <Link href="/signup">
          <Button colorScheme="whiteAlpha" color="white" >
          Sign up(it's free)
         </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
