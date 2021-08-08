import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  Divider,
  Link,
} from '@chakra-ui/layout';
import { Tag } from '@chakra-ui/tag';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import NextImage from 'next/image';

const ProjectCard = ({ project }) => {
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
      <Flex direction='column' position='relative' transition='all 0.5s ease'>
        <Box flex={1} position='relative' m='auto'>
          <NextImage
            src={'http:' + previewImage.fields.file.url}
            alt={title}
            height={220}
            width={350}
            objectFit='contain'
          />
        </Box>
        <Box position='relative'>
          <Stack p={2}>
            <Flex direction='row' alignItems='center'>
              <Heading flex={1} textAlign='left' variant='subtitle2'>
                <Link
                  textDecor='underline'
                  href={siteLink}
                  isExternal
                  rel='noreferrer'
                  target='_blank'
                  aria-label='link to live project website'
                >
                  {title}
                </Link>
              </Heading>
              <Flex justifyContent='flex-start'>
                {githubLink && (
                  <Link
                    aria-label='link to project Github'
                    href={githubLink}
                    variant='icon'
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
                    href={siteLink}
                    variant='icon'
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
            <Stack>
              <Flex flexWrap='wrap'>{Tags}</Flex>
              <Divider />
              <Text>{description}</Text>
            </Stack>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
