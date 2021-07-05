import { Stack, Flex, Text, Box } from '@chakra-ui/react';
import SlideIntoView from './SlideIntoView';
import { IoBriefcase, IoSchool } from 'react-icons/io5';

const TimelineSectionEvent = ({ event, direction }) => {
  return (
    <SlideIntoView direction={direction} pctVisibleThreshold={1}>
      <Flex>
        <Box pl={2} pr={2} pt={1}>
          {event.fields.category === 'work' ? (
            <IoBriefcase color='green.200' />
          ) : (
            <IoSchool color='green.200' />
          )}
        </Box>
        <Stack>
          <Text variant='lead'>{event.fields.title}</Text>
          <Text>{event.fields.description}</Text>
        </Stack>
      </Flex>
    </SlideIntoView>
  );
};

export default TimelineSectionEvent;
