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
      text: 'Front End React',
      icon: <SiReact />,
    },
    {
      text: 'NodeJS',
      icon: <SiNodeDotJs />,
    },
    {
      text: 'Next JS for Production',
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
  const nameAppearDelay = introAppearDelay + 0.2;
  const typewriterAppearDelay = nameAppearDelay + 0.2;
  const buttonsAppearDelay = typewriterAppearDelay + 0.2;
  const skillsAppearDelay = buttonsAppearDelay + 0.5;
  const appearanceDuration = 0.5;

  return (
    <Box position='relative' mt={[0, 150]} mb={[0, 50]}>
      <Stack position='relative' zIndex={2} spacing={10}>
        <Stack spacing={0}>
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
        top={[-65, -125]}
        left={[-65, -115]}
        w={[240, 400]}
        h={[240, 400]}
        zIndex={1}
      >
        <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill={svgColor}
            d='M39.5,-32C54.2,-24.7,71.3,-12.4,70.8,-0.5C70.3,11.4,52.2,22.7,37.5,32.3C22.7,41.8,11.4,49.5,-3.7,53.2C-18.8,56.9,-37.6,56.7,-46.7,47.2C-55.9,37.6,-55.2,18.8,-56.5,-1.3C-57.8,-21.4,-61,-42.8,-51.9,-50.1C-42.8,-57.4,-21.4,-50.6,-4.5,-46.1C12.4,-41.6,24.7,-39.3,39.5,-32Z'
            transform='translate(100 100)'
          />
        </svg>
      </Box>
    </Box>
  );
};

export default Hero;
