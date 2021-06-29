import { Container } from '@chakra-ui/layout';
import { Fragment } from 'react';
import Navbar from './Navbar';

const PageContainer = ({ children }) => {
  return (
    <Fragment>
      <Navbar />
      <Container maxW='3xl' padding={8}>
        {children}
      </Container>
    </Fragment>
  );
};

export default PageContainer;
