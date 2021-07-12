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
    <Box>
      <Flex direction='row' position='relative' transition='all 0.5s ease'>
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
                    href={githubLink}
                    isExternal
                    target='_blank'
                    p={2}
                    _hover={{ color: 'red.500' }}
                  >
                    <FaGithub size={'1.3rem'} />
                  </Link>
                )}
                {siteLink && (
                  <Link
                    href={siteLink}
                    isExternal
                    target='_blank'
                    p={2}
                    _hover={{ color: 'red.500' }}
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
                <Text>{description}</Text>
                <Flex flexWrap='wrap'>{Tags}</Flex>
              </Stack>
            </Box>

            <svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
              <path
                fill='#333'
                d='M42.9,-59.9C47.6,-55.7,37.8,-32.4,40.9,-15.1C44.1,2.2,60.3,13.5,58.8,19.4C57.3,25.3,38.1,25.7,25.4,24.7C12.6,23.7,6.3,21.2,-4.3,27.1C-14.8,33,-29.7,47.1,-37.4,46.5C-45.1,45.9,-45.7,30.5,-44.4,18.3C-43.1,6.1,-39.9,-2.9,-40.2,-16.6C-40.6,-30.2,-44.6,-48.5,-38.5,-52.2C-32.4,-55.9,-16.2,-44.9,1.5,-46.9C19.1,-49,38.3,-64,42.9,-59.9Z'
                transform='translate(135 170) scale(2.8)'
              />
            </svg>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectCardLarge;
