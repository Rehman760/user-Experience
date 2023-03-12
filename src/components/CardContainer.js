import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, IconButton } from '@chakra-ui/react';
import { FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';
import Card from './Card';

// Example data
const cards = [
  { id: 1, title: 'Card 1', category: 'Age' },
  { id: 2, title: 'Card 2', category: 'Ability' },
  { id: 3, title: 'Card 3', category: 'Appearance' },
  { id: 4, title: 'Card 4', category: 'Gender' },
  { id: 5, title: 'Card 5', category: 'Language' },
  { id: 6, title: 'Card 6', category: 'Religion' },
];

// function Card({ card }) {
//   return (
//     <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
//       <Text fontWeight="bold" mb={2}>{card.title}</Text>
//       <Text>{card.category}</Text>
//     </Box>
//   );
// }

function CardContainer() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleCategorySelect(category) {
    setSelectedCategory(category);
  }

  const filteredCards = selectedCategory ? cards.filter(card => card.category === selectedCategory) : cards;

  
  return (
    <Box  borderRadius="md" p={4}>
      <Flex justify="row" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Show me:
        </Text>
        <Menu>
          <MenuButton as={Button}>
            {selectedCategory ? selectedCategory : 'All cards'}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => handleCategorySelect('Age')}>Age</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Ability')}>Ability</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Appearance')}>Appearance</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Gender')}>Gender</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Language')}>Language</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Religion')}>Religion</MenuItem>
          </MenuList>
        </Menu>
        <IconButton aria-label="Share" icon={<FaShareAlt />} variant="outline" colorScheme="gray" />
      </Flex>
      {/* Your card components here */}

      <Box display="flex" justifyContent="center" alignItems="center" height="400px">
        {filteredCards.map(card => (
          <Box key={card.id} mr={4}>
            <Card title={card.title} catagory={card.category} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CardContainer;
