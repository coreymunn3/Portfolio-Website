import { Stack, Heading, Text, Divider } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { useState, useEffect } from 'react';
import SlideIntoView from './SlideIntoView';
import ProjectCard from './ProjectCard';
import ProjectCardLarge from './ProjectCardLarge';
import LinkHighlight from './LinkHighlight';

const FeaturedProjects = ({ projects }) => {
  // SSR Workaround for chakra useMediaQuery bug
  // https://github.com/chakra-ui/chakra-ui/issues/3124
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  useEffect(() => {
    if (isLargerThan768 !== isLargeScreen) {
      setIsLargeScreen(isLargerThan768);
    }
  }, [isLargerThan768]);

  return (
    <SlideIntoView pctVisibleThreshold='0.1' direction='fromBottom'>
      <Stack spacing={8}>
        <Stack>
          <Heading variant='subtitle1'>Projects</Heading>
          <Text>
            Check out my best work.{' '}
            <LinkHighlight href='/projects'>See all &rarr;</LinkHighlight>
          </Text>
          <Divider />
        </Stack>

        <Stack spacing={[24, 56]}>
          {projects.map((project) => (
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
