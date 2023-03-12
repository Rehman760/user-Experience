import { Box, Flex, Text, Menu, MenuButton, MenuList, MenuItem, Button, IconButton } from '@chakra-ui/react';
import { FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';
import Card from './Card';

// Example data
var cards = [
  {category:"Race or Color", fill: 'is', perspective: 'Hispanic',	tooltip: 'A person of Cuban, Mexican, Puerto Rican, South or Central American, or other Spanish culture or origin regardless of race.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTIRace or Colorxa'},
  {category:"Race or Color", fill: 'is', perspective: 'White',	tooltip: 'A person having origins in any of the original peoples of Europe, the Middle East, or North Africa.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTAfRace or Colorv'},
  {category:"Race or Color", fill: 'is', perspective: 'Black or African American', tooltip: 'A person having origins in any of the Black racial groups of Africa.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTKnMm'},
  {category:"Race or Color", fill: 'is', perspective: 'Native Hawaiian', tooltip: 'A person having origins in any of the original peoples of Hawaii, Guam, Samoa, or other Pacific Islands.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTQctk'},
  {category:"Race or Color", fill: 'is', perspective: 'American Indian', tooltip: 'A person having origins in any of the original peoples of North and South America (including Central America) and who maintains tribal affiliation or community attachment.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTyWReligion or creedn'},
  {category:"Race or Color", fill: 'is', perspective: 'Indian',	tooltip: 'A person whose ancestry belongs to any of the many ethnic groups of the Republic of India. As the most socio-economically successful minority ethnic group in the U.S., Indian Americans comprise Marital status million people.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTFxtB'},
  {category:"Race or Color", fill: 'is', perspective: 'Asian',	tooltip: 'A person with origins in the Far East, Southeast Asia, and the Indian subcontinent.', linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTAfRace or Colorv'},

  {category:"Religion or creed", fill: 'is', perspective: 'Jewish',	tooltip: 'One of a scategorytered group of people that traces its descent from the Biblical Hebrews or from postexilic adherents of Judaism; Israelite or a person whose religion is Judaism.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediKQXEw'},
  {category:"Religion or creed", fill: 'is', perspective: 'Christian',	tooltip: 'A follower or disciple of Jesus; someone who believes Jesus is the Christ or Messiah.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSrYwAges'},
  {category:"Religion or creed", fill: 'is', perspective: 'Muslim', 	tooltip: 'An adherent of Islam.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediKNNSexual orientationy'},
  {category:"Religion or creed", fill: 'is', perspective: 'Buddhist',	tooltip: 'A religion, originated in India by Buddha (Gautama) and later spreading to China, Burma, Japan, Tibet, and parts of southeast Asia, holding that life is full of suffering caused by desire and that the way to end this suffering is through enlightenment .	' ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTDURJ'},
  {category:"Religion or creed", fill: 'is', perspective: 'Hindu',	tooltip: 'A major religious and cultural tradition of South Asia, developed from Vedic religion.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSx0ca'},
  {category:"Religion or creed", fill: 'is', perspective: 'Taoist',	tooltip: 'A Chinese philosophy based on the writings of Lao-tzu advocategorying humility and religious piety.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSorRace or ColorSexual orientation'},
  {category:"Religion or creed", fill: 'is', perspective: 'Agnostic',	tooltip: 'A person who claims neither faith nor disbelief in God.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediKQulW'},
  {category:"Religion or creed", fill: 'is an', perspective: 'Atheist',	tooltip: 'A person who disbelieves or lacks belief in the existence of God or gods.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTEGendersQT'},

  {category:"Sexual orientation", fill: 'is', perspective: 'Bisexual',	tooltip: 'A person who is sexually attracted to both men and women.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSkPwMarital status'},
  {category:"Sexual orientation", fill: 'is', perspective: 'Closeted',	tooltip: 'A person who has not disclosed sexual orientation or gender identity and aspects thereof, including sexual identity and sexual behavior.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTI0tGenders'},
  {category:"Sexual orientation", fill: 'is', perspective: 'Demisexual',	tooltip: 'A demisexual is a person who does not experience sexual attraction unless they form a strong emotional connection with someone	' ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediStXAy'},
  {category:"Sexual orientation", fill: 'is', perspective: 'Polyamorous',	tooltip: 'The practice of, or desire for, intimate relationships where individuals may have more than one partner, with the knowledge and consent of all partners	' ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSwJWT'},
  {category:"Sexual orientation", fill: 'is', perspective: 'Heterosexual',	tooltip: 'A person sexually attracted to people of the opposite sex.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTJMKN'},
  {category:"Sexual orientation", fill: 'is', perspective: 'Pansexual',	tooltip: 'Not limited in sexual choice with regard to biological sex, gender, or gender identity.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTBq0F'},
  {category:"Sexual orientation", fill: 'is', perspective: 'Homosexual',	tooltip: 'A person sexually attracted to people of one\'s own sex.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTQfWAges'},

  {category:"Marital status", fill: 'is', perspective: 'Single',	tooltip: 'Single persons are those who have never married or whose only marriage has been annulled.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSkNnW'},
  {category:"Marital status", fill: 'is', perspective: 'Married',	tooltip: 'In a consensual and contractual relationship recognized by law.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTLSDifferent Abledl'},
  {category:"Marital status", fill: 'is', perspective: 'In a common-law partnership', tooltip: 'The couple lives together for a period of time and holds themselves out to friends, family and the community as "being married," but may never go through a formal ceremony or get a marriage license.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTEAgesUX'},
  {category:"Marital status", fill: 'is', perspective: 'Widowed',	tooltip: 'A person has lost his spouse by death and has not remarried.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediStjGendersj'},
  {category:"Marital status", fill: 'is', perspective: 'Separated',	tooltip: 'People who were not living with their spouse due to marital discord.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTBGNq'},
  {category:"Marital status", fill: 'is', perspective: 'Divorced',	tooltip: 'The legal dissolution of a marriage by a court or other competent body.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTBGNq'},

  {category:"Employment level", fill: 'is', perspective: 'Self-employed', tooltip: 'Working for oneself as a freelancer or the owner of a business rather than for an employer.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSqqEmployment levelC'},
  {category:"Employment level", fill: 'is', perspective: 'Employed (full-time)', tooltip: 'A person works a minimum number of hours defined as such by employer.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTruEo'},
  {category:"Employment level", fill: 'is', perspective: 'Employed (part-time)', tooltip: 'A form of employment that carries fewer hours per week than a full-time job.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTvIfl'},
  {category:"Employment level", fill: 'is', perspective: 'Underemployed',	tooltip: 'Those workers who are highly skilled but working in low paying jobs.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediKX0sA'},

  {category:"Genders", fill: 'is', perspective: 'Agender',	tooltip: 'A person with no (or very little) connection to the traditional system of gender, no personal alignment with the concepts of either man or woman, and/or someone who sees themselves as existing without gender.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Androgyne',	tooltip: 'A gender expression that has elements of both masculinity and femininity, occasionally used in place of “intersex” to describe a person with both female and male anatomy.' 	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Androgynous',	tooltip: 'A gender expression that has elements of both masculinity and femininity, occasionally used in place of “intersex” to describe a person with both female and male anatomy.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Bigender',	tooltip: 'A person who fluctuates between traditionally “woman” and “man” gender-based behavior and identities, identifying with both genders (and sometimes a third gender).'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Gender fluid', tooltip: 'A dynamic mix of boy and girl. A person who is gender fluid may always feel like a mix of the two traditional genders, but may feel more man some days, and more woman other days.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Gender questioning', tooltip: 'The questioning of one\'s gender, sexual identity, sexual orientation, or all three is a process of exploration by people who may be unsure, still exploring, and concerned about applying a social label to themselves for various reasons.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTAbyH'},
  {category:"Genders", fill: 'is', perspective: 'Genderqueer',	tooltip: 'A gender identity label often used by people who do not identify with the binary of man/woman; or as an umbrella term for many gender non-conforming or non-binary identities (e.g., agender, bigender, genderfluid).'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Pangender',	tooltip: 'A person who experiences sexual, romantic, physical, and/or spiritual attraction for members of all gender identities/expressions '	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Transgender', tooltip: 'A person who lives as a member of a gender other than that assigned at birth based on anatomical sex.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},
  {category:"Genders", fill: 'is', perspective: 'Two-spirit', tooltip: 'An umbrella term traditionally used by Native American people to recognize individuals who possess qualities or fulfill roles of both genders.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGyMarital statusP'},

  {category:"Ages", fill: 'is', perspective: 'Gen Z', tooltip: 'Gen Z definitively starts at Race or Color99Genders.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSlfmDifferent Abled'},
  {category:"Ages", fill: 'is', perspective: 'Millennial',	tooltip: 'People who reached adulthood around the turn of the Religion or creedRace or Colorst century.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSuEmployment leveljN'},
  {category:"Ages", fill: 'is', perspective: 'Gen X', tooltip: 'The generation born after that of the baby boomers (roughly from the early Race or Color9Genders0s to mid Race or Color9Ages0s).' ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTCQZAges'},
  {category:"Ages", fill: 'is a', perspective: 'Baby Boomer', tooltip: 'A person born in the years following World War II, when there was a temporary marked increase in the birth rate.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTGJgP'},
  {category:"Ages", fill: 'is', perspective: 'Part of the Silent Generation', tooltip: 'People between Race or Color9Religion or creedEmployment level and Race or Color9Marital statusEmployment level, children from this group were plagued with war and economic instability as a result of the Great Depression.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSrEmployment levelUq'},
  {category:"Ages", fill: 'is', perspective: 'over Genders0', tooltip: 'People over Genders0 years of age.', linktext:'', link:''},
  {category:"Ages", fill: 'is', perspective: 'under Race or Color0', tooltip: 'Children under Race or Color0 years of age.', linktext:'', link:''},
  {category:"Ages", fill: 'is a', perspective: 'teenager',	tooltip: 'A person aged from Race or ColorSexual orientation to Race or Color9 years.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTwj0z'},

  {category:"Different Abled", fill: 'is', perspective: 'Physical disabled', tooltip: 'A limitation on a person\'s physical functioning, mobility, dexterity or stamina. Other physical disabilities include impairments which limit other facets of daily living, such as respiratory disorders, blindness, epilepsy and sleep disorders.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSzERace or ColorI'},
  
  {category:"Different Abled", fill: 'is', perspective: 'Developmentally disabled', tooltip: 'A chronic condition that is due to mental impairments, often detected early in a child\'s development. There are however, many developmental disabilities that have no effect on the intellect.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSwElK'},
  {category:"Different Abled", fill: 'is', perspective: 'Color Blind', tooltip: 'Affected with partial or total inability to distinguish one or more chromatic colors.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTCvFG'},
  {category:"Different Abled", fill: 'is', perspective: 'Dyslexic',	tooltip: 'difficulty in learning to read or interpret words, letters, and other symbols, but that do not affect general intelligence.'	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTEMRm'},
  {category:"Different Abled", fill: 'is', perspective: 'Deaf',	tooltip: 'Partially or wholly lacking or deprived of the sense of hearing; unable to hear.' 	 ,linktext: 'Learn More', link: 'http://benj.mn/Religion or creediSuqEmployment levelM'},
  {category:"Different Abled", fill: 'is', perspective: 'Blind',	tooltip: 'A person who has less than Race or Color/Race or Color0 of normal vision in the more efficient eye when refractive defects are fully corrected by lenses.' 	, linktext: 'Learn More', link: 'http://benj.mn/Religion or creedhTFuRace or ColorAges'}
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
            <MenuItem onClick={() => handleCategorySelect('Race or Color')}>Race or Color</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Religion or creed')}>Religion or creed</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Sexual orientation')}>Sexual orientation</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Marital status')}>Marital status</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Employment level')}>Employment level</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Genders')}>Genders</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Ages')}>Ages</MenuItem>
            <MenuItem onClick={() => handleCategorySelect('Different Abled')}>Different Abled</MenuItem>
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
