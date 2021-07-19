import {
  Stack,
  HStack,
  Text,
  Heading,
  Button,
  Box,
  Flex,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {
  SiNextDotJs,
  SiTypescript,
  SiReact,
  SiAmazonaws,
  SiNodeDotJs,
} from 'react-icons/si';
import StaggeredGroup from './StaggeredGroup';
import Typewriter from 'typewriter-effect';
import SlideIntoView from './SlideIntoView';

const Hero = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const svgColor = useColorModeValue('#F56565', '#ED8936');

  const techSkills = [
    {
      text: 'React',
      icon: <SiReact />,
    },
    {
      text: 'Node.js',
      icon: <SiNodeDotJs />,
    },
    {
      text: 'Next JS',
      icon: <SiNextDotJs />,
    },
    {
      text: 'Learning Typescript',
      icon: <SiTypescript />,
    },
    {
      text: 'Exploring Serverless with AWS',
      icon: <SiAmazonaws />,
    },
  ];
  const techSkillsGroupItems = techSkills.map((skill) => (
    <HStack key={skill.text}>
      {skill.icon}
      <Text>{skill.text}</Text>
    </HStack>
  ));

  const contactButtonGroupItems = [
    <Button
      as='a'
      href='mailto:coreymunn3@gmail.com'
      target='_blank'
      leftIcon={<EmailIcon />}
      variant='solid'
      size={isLargerThan768 ? 'md' : 'sm'}
    >
      Email
    </Button>,
    <Button
      as='a'
      href='https://github.com/coreymunn3'
      target='_blank'
      leftIcon={<FaGithub />}
      variant='solid'
      size={isLargerThan768 ? 'md' : 'sm'}
    >
      Github
    </Button>,
    <Button
      as='a'
      href='https://www.linkedin.com/in/michael-munn-73228958/'
      target='_blank'
      leftIcon={<FaLinkedin />}
      variant='solid'
      size={isLargerThan768 ? 'md' : 'sm'}
    >
      LinkedIn
    </Button>,
  ];

  // order of appearance for items in Hero
  const introAppearDelay = 1;
  const nameAppearDelay = introAppearDelay + 0.1;
  const typewriterAppearDelay = nameAppearDelay + 0.1;
  const buttonsAppearDelay = typewriterAppearDelay + 0.1;
  const skillsAppearDelay = buttonsAppearDelay + 0.5;
  const appearanceDuration = 0.4;

  return (
    <Box position='relative' mt={[0, 150]} mb={[0, 50]}>
      <Stack position='relative' zIndex={2} spacing={16}>
        <Stack spacing={4}>
          <SlideIntoView
            direction='fromBottom'
            delay={introAppearDelay}
            duration={appearanceDuration}
          >
            <Text fontSize={['lg', '2xl']} textAlign='right'>
              Hello, my name is
            </Text>
          </SlideIntoView>

          <SlideIntoView
            direction='fromBottom'
            delay={nameAppearDelay}
            duration={appearanceDuration}
          >
            <Box mb={8}>
              <Heading as='h1' fontSize={['5xl', '8xl']} mb={8} variant='title'>
                Corey Munn.
              </Heading>
            </Box>
          </SlideIntoView>

          <SlideIntoView
            direction='fromBottom'
            delay={typewriterAppearDelay}
            duration={appearanceDuration}
          >
            <Flex direction='row'>
              <Text fontSize={['lg', '2xl']}>I am a &nbsp;</Text>
              <Text as='span' fontSize={['lg', '2xl']} variant='lead'>
                <Typewriter
                  options={{
                    delay: 50,
                    skipAddStyles: true,
                    loop: true,
                    deleteSpeed: 20,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(2000)
                      .typeString('React Developer.')
                      .pauseFor(2000)
                      .deleteChars(16)
                      .typeString('Tableau Developer.')
                      .pauseFor(2000)
                      .deleteChars(28)
                      .typeString('Data Viz Enthusiast.')
                      .pauseFor(2000)
                      .deleteChars(26)
                      .start();
                  }}
                />
              </Text>
            </Flex>
          </SlideIntoView>
        </Stack>

        <StaggeredGroup
          direction='row'
          staggerInterval={0.2}
          delay={buttonsAppearDelay}
          childAnimationDuration={0.5}
          items={contactButtonGroupItems}
        />

        <StaggeredGroup
          as='ul'
          fontSize={['md', 'lg']}
          staggerInterval={0.2}
          delay={skillsAppearDelay}
          childAnimationDuration={1}
          items={techSkillsGroupItems}
        />
      </Stack>
      <Box
        position='absolute'
        top={[-55, -125]}
        left={[-75, -125]}
        w={[240, 400]}
        h={[240, 400]}
        zIndex={1}
      >
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#FF0066'
            d='M22.8,-26.5C36.6,-21.4,59.7,-24.1,70.1,-16.9C80.5,-9.7,78.3,7.5,69.7,19.1C61.1,30.7,46.1,36.7,33.4,47.8C20.7,58.8,10.3,74.8,-3.4,79.6C-17.2,84.3,-34.4,77.6,-38.9,63.9C-43.4,50.2,-35.3,29.5,-39.6,13.5C-44,-2.6,-60.9,-13.9,-66.1,-28.7C-71.3,-43.6,-64.7,-61.9,-51.8,-67.3C-38.8,-72.7,-19.4,-65.2,-7.4,-54.9C4.5,-44.7,9,-31.7,22.8,-26.5Z'
            transform='translate(100 100)'
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Hero;
