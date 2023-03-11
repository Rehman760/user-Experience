import { Box, Heading, Text, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

function Contact() {
  return (
    <Box maxW="md" mx="auto" px={4} py={8}>
      <Heading mb={4}>Contact Us</Heading>
      <Text mb={8}>
        If you have any questions, comments or feedback, please don't hesitate to get in touch with us.
      </Text>
      <form>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="John Doe" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="johndoe@example.com" />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Input type="textarea" placeholder="Enter your message here" />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
