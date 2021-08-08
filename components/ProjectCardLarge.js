import {
  Flex,
  Stack,
  Box,
  Center,
  Heading,
  Text,
  Link,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Tag } from '@chakra-ui/tag';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import FeaturedProjectSVG from './svg/FeaturedProjectSVG';
import { useState } from 'react';

const ProjectCardLarge = ({ project }) => {
  const {
    githubLink,
    siteLink,
    isFeaturedProject,
    coldStartWarning,
    title,
    description,
    previewImage,
    techStack,
  } = project.fields;

  // const svgColor = useColorModeValue('#F56565', '#ED8936');
  const Tags = techStack.map((item) => (
    <Tag key={item} size='sm' p={2} mr={1} mb={1}>
      {item}
    </Tag>
  ));

  const [showWarning, setShowWarning] = useState(true);

  const toggleShowWarning = () => {
    setShowWarning(!showWarning);
  };

  return (
    <Flex transition='all 0.5s ease'>
      <Box flex={1} position='relative'>
        <Box
          position='absolute'
          top={0}
          left={0}
          width='100%'
          height='100%'
          bgColor='rgba(0,0,0,0.5)'
          borderRadius='xl'
          transition='background 0.3s ease-in-out'
          _hover={{ bgColor: 'rgba(0,0,0,0)' }}
          onMouseEnter={toggleShowWarning}
          onMouseLeave={toggleShowWarning}
        >
          {coldStartWarning && showWarning && (
            <Center w='full' h='full' p={8} pr={24}>
              <Text align='center' color='white'>
                This project is hosted on a Server that has to cold start.
                Please allow up to 30 seconds to allow the server to boot up.
              </Text>
            </Center>
          )}
        </Box>

        <Image
          src={previewImage.fields.file.url}
          alt={title}
          borderRadius='xl'
          objectFit='cover'
        />
      </Box>
      <Box w='30%' position='relative'>
        <Stack p={2}>
          <Flex direction='column' alignItems='flex-end'>
            <Heading flex={1} textAlign='right' variant='subtitle2'>
              <Link
                href={siteLink}
                isExternal
                rel='noreferrer'
                target='_blank'
                aria-label='link to live project website'
              >
                {title}
              </Link>
            </Heading>
            <Flex justifyContent='flex-end'>
              {githubLink && (
                <Link
                  aria-label='link to project Github'
                  variant='icon'
                  href={githubLink}
                  isExternal
                  rel='noreferrer'
                  target='_blank'
                  p={2}
                >
                  <FaGithub size={'1.3rem'} />
                </Link>
              )}
              {siteLink && (
                <Link
                  aria-label='link to live project website'
                  variant='icon'
                  href={siteLink}
                  isExternal
                  rel='noreferrer'
                  target='_blank'
                  p={2}
                >
                  <FaExternalLinkAlt size={'1.2rem'} />
                </Link>
              )}
            </Flex>
          </Flex>
        </Stack>

        <Box position='absolute' top={20} right={-10} w={350}>
          <Box position='absolute' top={0} left={-3} p={14} mr={4}>
            <Stack>
              <Text color='white'>{description}</Text>
              <Flex flexWrap='wrap'>{Tags}</Flex>
            </Stack>
          </Box>

          <FeaturedProjectSVG />
        </Box>
      </Box>
    </Flex>
  );
};

export default ProjectCardLarge;
