import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  Image,
  Tag,
  IconButton,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { IoLogoGithub } from 'react-icons/io5';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ProjectCard = ({ project }) => {
  const svgColor = useColorModeValue('#F56565', '#ED8936');
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <Box>
      <Flex
        direction={['column', 'row']}
        transition='all 0.5s ease'
        position='relative'
      >
        <Box flex={1} position='relative' zIndex={1} _hover={{ zIndex: 3 }}>
          <Box
            position='absolute'
            top={0}
            left={0}
            bgColor='rgba(0,0,0,0.4)'
            h={'100%'}
            w={'100%'}
            borderRadius='xl'
            _hover={{ bgColor: 'rgba(0,0,0,0)' }}
            transition='all 0.3s ease'
          ></Box>
          <Image
            src={project.fields.previewImage.fields.file.url}
            alt={project.fields.title}
            borderRadius='xl'
            objectFit='cover'
          />
        </Box>
        <Box w={['100%', '30%']} position='relative' zIndex={2} h={100}>
          <Box position='absolute' top={0} right={0} w='100%'>
            <Box position='relative' zIndex={2} p={2} h={100}>
              <Stack>
                <Heading textAlign={['left', 'right']} variant='subtitle2'>
                  {project.fields.title}
                </Heading>
                <Flex justifyContent={['flex-start', 'flex-end']}>
                  <IconButton variant='ghost' mr={2} icon={<IoLogoGithub />} />
                  <IconButton variant='ghost' icon={<ExternalLinkIcon />} />
                </Flex>
              </Stack>
            </Box>

            <Box
              position='absolute'
              top={[-55, 20]}
              right={['43%', -10]}
              w={[200, 350]}
            >
              {isLargerThan768 && (
                <Box position='absolute' top={0} left={-3} p={14} mr={4}>
                  <Stack>
                    <Text>{project.fields.projectDescription}</Text>
                    <Flex flexWrap='wrap'>
                      {project.fields.techStack.map((item) => (
                        <Tag key={item} size='sm' p={2} mr={1} mb={1}>
                          {item}
                        </Tag>
                      ))}
                    </Flex>
                  </Stack>
                </Box>
              )}

              <svg viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'>
                <path
                  fill='#333'
                  d='M42.9,-59.9C47.6,-55.7,37.8,-32.4,40.9,-15.1C44.1,2.2,60.3,13.5,58.8,19.4C57.3,25.3,38.1,25.7,25.4,24.7C12.6,23.7,6.3,21.2,-4.3,27.1C-14.8,33,-29.7,47.1,-37.4,46.5C-45.1,45.9,-45.7,30.5,-44.4,18.3C-43.1,6.1,-39.9,-2.9,-40.2,-16.6C-40.6,-30.2,-44.6,-48.5,-38.5,-52.2C-32.4,-55.9,-16.2,-44.9,1.5,-46.9C19.1,-49,38.3,-64,42.9,-59.9Z'
                  transform='translate(135 170) scale(2.8)'
                />
              </svg>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ProjectCard;
