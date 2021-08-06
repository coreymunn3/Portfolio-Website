import { Box } from '@chakra-ui/layout';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const QuoteBlock = ({ children }) => {
  return (
    <Box p={8} position='relative'>
      <Box position='absolute' top={0} left={-6} zIndex={1}>
        <FaQuoteLeft size='3rem' color='#2196F3' />
      </Box>
      {children}
      <Box position='absolute' bottom={0} right={-6} zIndex={1}>
        <FaQuoteRight size='3rem' color='#2196F3' />
      </Box>
    </Box>
  );
};

export default QuoteBlock;
