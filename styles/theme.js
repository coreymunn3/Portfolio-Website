import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';
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
  breakpoints: createBreakpoints({
    sm: '48em',
    md: '62em',
    lg: '80em',
    xl: '80em',
  }),
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
  components: {
    Heading: {
      baseStyle: {
        fontWeight: 'medium',
      },
      variants: {
        title: {
          fontWeight: 'bold',
          fontSize: '5xl',
        },
        subtitle1: {
          fontSize: '3xl',
        },
        subtitle2: {
          fontSize: 'xl',
        },
      },
    },
    Text: {
      baseStyle: (props) => ({
        fontWeight: 'normal',
        color: mode('gray.500', 'gray.300')(props),
      }),
      variants: {
        lead: (props) => ({
          color: mode('gray.800', 'white')(props),
        }),
      },
    },
  },
};

const customTheme = extendTheme(overrides);
// console.log(customTheme);

export default customTheme;
