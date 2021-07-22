import {
  Stack,
  Box,
  Heading,
  Text,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import SlideIntoView from './SlideIntoView';
import ProjectCard from './ProjectCard';
import ProjectCardLarge from './ProjectCardLarge';

const FeaturedProjects = ({ projectData }) => {
  // SSR Workaround for chakra useMediaQuery bug
  // https://github.com/chakra-ui/chakra-ui/issues/3124
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (isLargerThan768 !== isLargeScreen) {
      setIsLargeScreen(isLargerThan768);
    }
  }, [isLargerThan768]);

  const featuredProjects = projectData.filter(
    (project) => project.fields.isFeaturedProject === true
  );

  return (
    <SlideIntoView pctVisibleThreshold='0.1' direction='fromBottom'>
      <Stack spacing={8}>
        <Box>
          <Heading variant='subtitle1'>Projects</Heading>
          <Text>
            Check out my best work. <Link href='/projects'>See all &rarr;</Link>
          </Text>
        </Box>

        <Stack spacing={[24, 56]}>
          {featuredProjects.map((project) => (
            <SlideIntoView key={project.sys.id} direction='fromBottom'>
              {isLargeScreen ? (
                <ProjectCardLarge project={project} />
              ) : (
                <ProjectCard project={project} />
              )}
            </SlideIntoView>
          ))}
        </Stack>
      </Stack>
    </SlideIntoView>
  );
};

export default FeaturedProjects;
