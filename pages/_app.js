import { ChakraProvider } from '@chakra-ui/react';
import PageContainer from '../components/PageContainer';
import customTheme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <PageContainer>
        <Component {...pageProps} />
      </PageContainer>
    </ChakraProvider>
  );
}

export default MyApp;
