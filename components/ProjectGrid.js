import { Grid, GridItem, Box, Heading, Text } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import SlideIntoView from './SlideIntoView';
import ProjectsSVG from './svg/ProjectsSVG';

const ProjectGrid = ({ projects }) => {
  return (
    <Grid templateColumns={['1fr', 'repeat(2, 1fr)']} gap={[8, 16]}>
      {/* first grid-item contains the heading area */}
      <GridItem position='relative' h={['200px', '250px']} borderRadius='xl'>
        <Box position='relative' zIndex={2} p={[8, 4]} mt={[0, 4]}>
          <Heading variant='title' textAlign='center'>
            My Projects
          </Heading>
          <Text
            color='white'
            textAlign='center'
            maxW={['200px', '100%']}
            margin='auto'
          >
            Check out what I have created.
          </Text>
        </Box>
        <Box
          position='absolute'
          top={[-10, -12]}
          left={[-10, -10]}
          zIndex={1}
          w='120%'
          h='120%'
        >
          <ProjectsSVG />
        </Box>
      </GridItem>
      {projects.map((project, idx) => (
        <GridItem key={project.sys.id} colSpan={1} rowSpan={2}>
          <SlideIntoView direction='fromBottom'>
            <ProjectCard project={project} />
          </SlideIntoView>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ProjectGrid;
