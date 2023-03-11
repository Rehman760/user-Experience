import { Box, Container } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';


function Layout({ children }) {
  return (
    
    <Box bg="black">
      
        
       

         <Navbar />
        
      <Container maxW="container.xl"  bg="white" boxShadow="md" borderRadius="md" minH="80vh">
        <Box as="header" mb={8}>
         <header>
         <title>Perspective Cards - an easy way to be a more inclusive designer</title>
        <meta name="description" content="Perspective Cards - an easy way to be a more inclusive designer" />
         </header>
        </Box>
       
        <Box as="main" >
          {children}
        </Box>
      
      </Container>
      <Footer />
    </Box>
  
  );
}

export default Layout;
