import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  Image,
  Tag,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import FeaturedProjectSVG from './svg/FeaturedProjectSVG';

const ProjectCardLarge = ({ project }) => {
  const {
    githubLink,
    siteLink,
    isFeaturedProject,
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
        ></Box>

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
              {title}
            </Heading>
            <Flex justifyContent='flex-end'>
              {githubLink && (
                <Link
                  variant='icon'
                  href={githubLink}
                  isExternal
                  target='_blank'
                  p={2}
                >
                  <FaGithub size={'1.3rem'} />
                </Link>
              )}
              {siteLink && (
                <Link
                  variant='icon'
                  href={siteLink}
                  isExternal
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
