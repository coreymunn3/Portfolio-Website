import { useColorModeValue } from '@chakra-ui/color-mode';
import { lightColor, darkColor } from './colorValues';

const HeroSVG = () => {
  const pathFill = useColorModeValue(lightColor, darkColor);
  return (
    <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
      <path
        fill={pathFill}
        d='M22.8,-26.5C36.6,-21.4,59.7,-24.1,70.1,-16.9C80.5,-9.7,78.3,7.5,69.7,19.1C61.1,30.7,46.1,36.7,33.4,47.8C20.7,58.8,10.3,74.8,-3.4,79.6C-17.2,84.3,-34.4,77.6,-38.9,63.9C-43.4,50.2,-35.3,29.5,-39.6,13.5C-44,-2.6,-60.9,-13.9,-66.1,-28.7C-71.3,-43.6,-64.7,-61.9,-51.8,-67.3C-38.8,-72.7,-19.4,-65.2,-7.4,-54.9C4.5,-44.7,9,-31.7,22.8,-26.5Z'
        transform='translate(100 100)'
      />
    </svg>
  );
};

export default HeroSVG;
