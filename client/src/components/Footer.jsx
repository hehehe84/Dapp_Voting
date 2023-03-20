import {
    Text,
    Box,
    useColorModeValue,
  } from '@chakra-ui/react';

  
  function Footer() {
    return (
      
      <Box id='Footer'
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        bgPosition="bottom"
        position='absolute'
        bottom={'0px'}
        textAlign={'center'}
        width={"100%"}
        fontSize={14}
        marginTop={"30px"}>
          <Text>&copy; Alyra (Xavier & Antoine Work) {new Date().getFullYear()}</Text>
      </Box>
    );
}



export default Footer;