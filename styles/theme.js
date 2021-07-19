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
  colors: {
    brand: {
      50: '#ddf6ff',
      100: '#b0deff',
      200: '#82c6fb',
      300: '#53aff7',
      400: '#2196F3',
      500: '#0c7fda',
      600: '#0062aa',
      700: '#00467b',
      800: '#002a4d',
      900: '#000f1f',
    },
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
          fontSize: ['3xl', '5xl', '5xl'],
        },
        subtitle1: {
          fontSize: ['2xl', '3xl', '3xl'],
        },
        subtitle2: {
          fontSize: ['lg', 'xl', 'xl'],
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
          color: mode('brand.800', 'brand.00')(props),
        }),
      },
    },
  },
};

const customTheme = extendTheme(overrides);
// console.log(customTheme);

export default customTheme;
