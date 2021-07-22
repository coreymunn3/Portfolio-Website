import { useColorModeValue } from '@chakra-ui/color-mode';
import { lightColor, darkColor } from './colorValues';

const ProjectsSVG = () => {
  const pathFill = useColorModeValue(lightColor, darkColor);
  return (
    <svg
      viewBox='0 0 200 210'
      xmlns='http://www.w3.org/2000/svg'
      position='absolute'
      top={0}
      left={0}
      width='100%'
      height='100%'
    >
      <path
        fill={pathFill}
        d='M54,-53.3C70.3,-50.7,83.9,-34,85.1,-16.6C86.3,0.8,75.1,18.8,62,30.4C48.9,42,34,47.2,21.7,45.5C9.5,43.8,-0.1,35.3,-15.4,33.5C-30.7,31.8,-51.8,36.9,-65.9,29.7C-80,22.5,-87.2,2.9,-81.9,-12.2C-76.6,-27.4,-58.9,-38.2,-43.1,-40.9C-27.4,-43.6,-13.7,-38.3,2.6,-41.4C18.9,-44.5,37.7,-56,54,-53.3Z'
        transform='translate(100 100) scale(1.5)'
      />
    </svg>
  );
};

export default ProjectsSVG;
