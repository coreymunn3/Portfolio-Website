import { Container } from '@chakra-ui/layout';
import { Fragment } from 'react';
import Navbar from './Navbar';
import Contact from './Contact';

const PageContainer = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Container maxW='3xl' padding={8}>
        {children}
        <Contact />
      </Container>
    </Fragment>
  );
};

export default PageContainer;
