import { Grid, GridItem, Box, Heading, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import SlideIntoView from './SlideIntoView';

const ProjectGrid = ({ projects }) => {
  console.log(projects);
  return (
    <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={16}>
      {/* first grid-item contains the heading area */}
      <GridItem position='relative' h='250px' borderRadius='xl'>
        <Box position='relative' zIndex={2} p={4} mr={8}>
          <Heading variant='title'>My Projects</Heading>
          <Text>
            Just a short description of these projects and why they're here
          </Text>
        </Box>
        <Box
          position='absolute'
          top={-5}
          left={[-5, -10]}
          zIndex={1}
          w='120%'
          h='120%'
        >
          <svg
            viewBox='0 0 200 210'
            xmlns='http://www.w3.org/2000/svg'
            position='absolute'
            top={0}
            left={0}
            width='100%'
            height='100%'
          >
            <path
              fill='#FF0066'
              d='M42,-35.7C45.3,-29.4,32.5,-12.5,29.5,9.3C26.6,31,33.5,57.5,26.1,65.4C18.6,73.4,-3.3,62.7,-25.5,52.3C-47.8,41.8,-70.5,31.6,-76.6,14.6C-82.8,-2.3,-72.4,-25.8,-56.8,-34.9C-41.3,-44,-20.6,-38.7,-0.6,-38.2C19.4,-37.7,38.7,-42,42,-35.7Z'
              transform='translate(120 80) scale(1.85)'
            />
          </svg>
        </Box>
      </GridItem>
      {projects.map((project, idx) => (
        <GridItem colSpan={1} rowSpan={2}>
          <SlideIntoView direction='fromBottom'>
            <ProjectCard key={project.sys.id} project={project} />
          </SlideIntoView>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
