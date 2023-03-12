import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";

const intros = [
  "Welcome to Perspective Cards!",
  "Get ready to gain new perspectives!",
  "Diversity of thought leads to innovation.",
  "Design for everyone, everywhere.",
  "Challenge your biases.",
];

const users = [
  "Designer",
  "Developer",
  "Product Manager",
  "Marketer",
  "Entrepreneur",
];

const perspectives = [
  "Cultural",
  "Gender",
  "Age",
  "Language",
  "Religion",
];

const descriptions = [
  "Take a step back and think about how someone from a different culture might approach this problem.",
  "Consider how this feature might be used differently by men and women.",
  "Think about how someone with a different age might use this product.",
  "Consider how someone who speaks a different language might interpret this content.",
  "Think about how someone from a different religious background might approach this issue.",
];

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

  const {intro, user, perspective, descript} = generateCardData();
  const [var1, setVar1] = useState(intro);
  const [var2, setVar2] = useState(user);
  const [var3, setVar3] = useState(perspective);
  const [var4, setVar4] = useState(descript);

  const handleClick = () => {
    const {intro, user, perspective, descript} = generateCardData();
    setVar1(intro);
    setVar2(user);
    setVar3(perspective);
    setVar4(descript);
  
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
      width="400px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box>
        <Text fontWeight="bold" fontSize="lg" mb={2} justifyItems="center" alignItems="center">
          {var1} is {var2}, {var3}
        </Text>
        <Text mb={4}>this is description{var4}</Text>
      </Box>
      <Button colorScheme="black" bg="black " onClick={handleClick}>
        Read More
      </Button>
    </Box>
  );
};

export default Card;
