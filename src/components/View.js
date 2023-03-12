import React from 'react'

function View({data}) {
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
              {data}
            </Text>
            <Text  fontSize="sm" mb={2} justifyItems="center" alignItems="center">
              this is description
            </Text>
         
          </Box>
          <Button colorScheme="black" bg="black " onClick={handleClick}>
            Read More
          </Button>
        </Box>
      );
}

export default View