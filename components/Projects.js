import { Stack, Box, Heading, Text, Link } from '@chakra-ui/react';
import SlideIntoView from './SlideIntoView';
import ProjectCard from './ProjectCard';

const Projects = ({ projectData }) => {
  console.log(projectData);
  const featuredProjects = projectData.filter(
    (project) => project.fields.isFeaturedProject === true
  );
  return (
    <SlideIntoView pctVisibleThreshold='0.1' direction='fromBottom'>
      <Stack spacing={8}>
        <Box>
          <Heading variant='subtitle1'>Projects</Heading>
          <Text>
            Check out my best work. <Link color='red.500'>See all &rarr;</Link>
          </Text>
        </Box>

        <Stack spacing={28}>
          {featuredProjects.map((project) => (
            <SlideIntoView key={project.sys.id} direction='fromBottom'>
              <ProjectCard project={project} />
            </SlideIntoView>
          ))}
        </Stack>
      </Stack>
    </SlideIntoView>
  );
};

export default Projects;
