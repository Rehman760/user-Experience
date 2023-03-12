import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const intros = ['Imagine your', 'What if the'];
	const users = [ 'user', 'customer'];
const perspectives = [
  "Cultural",
  "Gender",
  "Age",
  "Language",
  "Religion",
];

const descriptions = [
  'Does the user experience offer the same outcome/equitable experience for this group?',
  'Is your user experience straightforward and the message clear for this group?',
  'What would the sensory experience be like for the user in this group?',
  'What is the value your product provides for this group?',
  'Is it effortless for this group to access your product?',
  'Is your product accessible to this group?',
  'Is there anything in your product that\'s potentially offensive to this group?',
  'Are there any ways to make the product more accessible to this group?',
  'How is the user experience different for this group than the experience of the target user?',
  'Are there any changes that can be made to the product to cater/be more inclusive for this group?',
  'How is this user most likely to engage with your product?'
]

function generateCardData() {
  const intro = intros[Math.floor(Math.random() * intros.length)];
  const user = users[Math.floor(Math.random() * users.length)];
  const perspective = perspectives[Math.floor(Math.random() * perspectives.length)];
  const description = descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    intro,
    user,
    perspective,
    description
  };
}







const Card = ({ title, catagory }) => {

  const {intro, user, perspective, description} = generateCardData();
  const [var1, setVar1] = useState(intro);
  const [var2, setVar2] = useState(user);
  const [var3, setVar3] = useState(perspective);
  const [var4, setVar4] = useState(description);

  const handleClick = () => {
    const {intro, user, perspective, description} = generateCardData();
    setVar1(intro);
    setVar2(user);
    setVar3(perspective);
    setVar4(description);
  
  };



  
  return (
    <Box
      bg="white"
      p={8}
      boxShadow="sm"
      borderRadius="md"
      textAlign="left"
      mb={4}
      height="400px"
      width="700px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2} justifyItems="center" alignItems="center">
          {var1} <br/>{var2} is {var3}
        </Text>
        <Text  fontSize="sm" mb={2} justifyItems="center" alignItems="center">
          {var4}
        </Text>
     
      </Box>
      <Button colorScheme="black" bg="black " onClick={handleClick}>
        Read More
      </Button>
    </Box>
  );
};

export default Card;
