import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const overrides = {
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Roboto, sans-serif',
  },
  fontWeights: {
    normal: 300,
    medium: 500,
    bold: 700,
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props) => ({
      body: {
        color: mode('gray.800', 'white')(props),
        bg: mode('white', 'gray.700')(props),
      },
    }),
  },
};

const customTheme = extendTheme(overrides);
// console.log(customTheme);

export default customTheme;
