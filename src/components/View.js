import React from 'react'
import {Link, Box, Text, Button, Tooltip } from "@chakra-ui/react";
import IconWithDescription from './IconWithDescription';


function View({intro,user,description,perspective,tooltip,link}) {
    return (
        <Box
          bg="white"
          p={8}
          boxShadow="sm"
          borderRadius="md"
          textAlign="left"
          mb={4}
          height="300px"
          width="400px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Text fontWeight="bold" fontSize="lg" mb={4} justifyItems="center" alignItems="center">
              {intro} {user} is {perspective} 
            {/* <IconWithDescription  tooltip={tooltip} link={link}/> */}
            </Text>
            <Text  fontSize="sm" mb={2} justifyItems="center" alignItems="center">
              {description} <Tooltip label={tooltip} aria-label={tooltip}><Link href={link} isExternal fontWeight="bold">Learn more.</Link></Tooltip>
            </Text>
         
          </Box>
        </Box>
      );
}

export default View