import { useColorModeValue } from '@chakra-ui/color-mode';
import { lightColor, darkColor } from './colorValues';

const FeaturedProjectSVG = () => {
  const pathFill = useColorModeValue(lightColor, darkColor);
  return (
    <svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={pathFill}
        d='M42.9,-59.9C47.6,-55.7,37.8,-32.4,40.9,-15.1C44.1,2.2,60.3,13.5,58.8,19.4C57.3,25.3,38.1,25.7,25.4,24.7C12.6,23.7,6.3,21.2,-4.3,27.1C-14.8,33,-29.7,47.1,-37.4,46.5C-45.1,45.9,-45.7,30.5,-44.4,18.3C-43.1,6.1,-39.9,-2.9,-40.2,-16.6C-40.6,-30.2,-44.6,-48.5,-38.5,-52.2C-32.4,-55.9,-16.2,-44.9,1.5,-46.9C19.1,-49,38.3,-64,42.9,-59.9Z'
        transform='translate(135 170) scale(2.8)'
      />
    </svg>
  );
};

export default FeaturedProjectSVG;
