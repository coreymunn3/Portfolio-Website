import { Box } from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';

const CodeBlock = ({ children }) => {
  const codeBlockBg = useColorModeValue('brand.50', 'brand.800');

  return (
    <Box
      p={4}
      bgColor={codeBlockBg}
      borderLeft='5px solid'
      borderColor='brand.400'
    >
      {children}
    </Box>
  );
};

export default CodeBlock;
