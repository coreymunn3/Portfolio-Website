import {
  Stack,
  HStack,
  Text,
  Heading,
  Button,
  Box,
  Flex,
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
import HeroSVG from './svg/HeroSVG';
import StaggeredGroup from './StaggeredGroup';
import Typewriter from 'typewriter-effect';
import SlideIntoView from './SlideIntoView';

const Hero = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const techSkills = [
    {
      text: <Text variant='lead'>React</Text>,
      icon: <SiReact size='2rem' color='#2196F3' />,
    },
    {
      text: <Text variant='lead'>Node.js</Text>,
      icon: <SiNodeDotJs size='2rem' color='#2196F3' />,
    },
    {
      text: <Text variant='lead'>NextJS</Text>,
      icon: <SiNextDotJs size='2rem' color='#2196F3' />,
    },
    {
      text: <Text variant='lead'>Learning Typescript</Text>,
      icon: <SiTypescript size='2rem' color='#2196F3' />,
    },
    {
      text: <Text variant='lead'>Exploring Serverless with AWS</Text>,
      icon: <SiAmazonaws size='2rem' color='#2196F3' />,
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
      <Stack position='relative' zIndex={2} spacing={12}>
        <Stack spacing={6}>
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
              <Text
                as='span'
                fontSize={['lg', '2xl']}
                variant='primary'
                fontWeight='bold'
              >
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
          spacing={[2, 4]}
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
        <HeroSVG />
      </Box>
    </Box>
  );
};

export default Hero;
