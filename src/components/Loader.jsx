import { Box, Heading, Spinner, VStack } from '@chakra-ui/react';
import React from 'react'

const Loader = ({message="LOADING..."}) => {
  return (
    <VStack h={"90vh"} justifyContent={"center"} gap={'8'}>
      <Box transform={"scale(3)"}>
        <Spinner size={"xl"} />
      </Box>
      <Heading>{message}</Heading>
    </VStack>
  );
}

export default Loader