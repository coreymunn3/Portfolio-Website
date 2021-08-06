import { Stack, Flex, Text, Box } from '@chakra-ui/layout';
import SlideIntoView from './SlideIntoView';
import { IoBriefcase, IoSchool } from 'react-icons/io5';
import { FaCode } from 'react-icons/fa';

const TimelineSectionEvent = ({ event, direction }) => {
  const determineTimelineIcon = (category) => {
    switch (category) {
      case 'work':
        return <IoBriefcase size='1rem' />;
      case 'school':
        return <IoSchool size='1rem' />;
      case 'project':
        return <FaCode size='1rem' />;
    }
  };
  return (
    <SlideIntoView direction={direction} pctVisibleThreshold={1}>
      <Flex>
        <Box pl={2} pr={2} pt={1}>
          {determineTimelineIcon(event.fields.category)}
        </Box>
        <Stack spacing={0}>
          <Text variant='lead'>{event.fields.title}</Text>
          <Text>{event.fields.description}</Text>
        </Stack>
      </Flex>
    </SlideIntoView>
  );
};

export default TimelineSectionEvent;
