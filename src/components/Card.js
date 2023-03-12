import { Box, Text, Button } from "@chakra-ui/react";
import { useState } from "react";
import View from "./View";

const intros = ['Imagine your', 'What if the'];
	const users = [ 'user', 'customer'];


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
  const description = descriptions[Math.floor(Math.random() * descriptions.length)];

  return {
    intro,
    user,
    description
  };
}







const Card = ({ cards }) => {

  const {intro, user, description} = generateCardData();
  const [var1, setVar1] = useState(intro);
  const [var2, setVar2] = useState(user);
  const [var3, setVar3] = useState(description);
  const [currentCard, setCurrentCard] = useState(1);

  const handleClick = () => {
    const {intro, user, description} = generateCardData();
    setVar1(intro);
    setVar2(user);
    setVar3(description);
  };

  const nextCard = () => {
    const {intro, user, description} = generateCardData();
    setVar1(intro);
    setVar2(user);
    setVar3(description);
    setCurrentCard((currentCard + 1) % cards.length);
  };


  
  return (
    <Box 
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center">
      <View intro={var1} user={var2} description={var3} perspective={cards[currentCard].perspective} tooltip={cards[currentCard].tooltip} link={cards[currentCard].link} />
      <Button onClick={nextCard} colorScheme="black" bg="black" >Next Card</Button>
    </Box>
  );
};

export default Card;
