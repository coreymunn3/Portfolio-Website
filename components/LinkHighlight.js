import { Link } from '@chakra-ui/layout';
import customTheme from '../styles/theme';

const LinkHighlight = ({ children, ...otherProps }) => {
  return (
    <Link
      {...otherProps}
      position='relative'
      zIndex={1}
      padding='2px'
      background={`linear-gradient(to right, ${customTheme.colors.brand['400']}, ${customTheme.colors.brand['400']}) no-repeat right`}
      backgroundSize='0% auto'
      transition='background-size 0.3s, backgroundPosition 0s, color 0.3s'
      _hover={{
        backgroundSize: '100% auto',
        backgroundPosition: 'left',
        color: 'white',
      }}
      _focus={{
        outline: 'none',
      }}
    >
      <span style={{ mixBlendMode: 'lighten', outline: '0', border: 'none' }}>
        {children}
      </span>
    </Link>
  );
};

export default LinkHighlight;
