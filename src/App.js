import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import CardContainer from './components/CardContainer';
import Footer from './components/Footer';
import Layout from './components/Layout';
import WhatIs from './components/WhatIs';


function App() {
  return (
    <ChakraProvider>
      <Layout>
    
        <CardContainer />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
