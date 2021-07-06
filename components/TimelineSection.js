import { Stack, Divider, Text } from '@chakra-ui/react';
import TimelineSectionEvent from './TimelineSectionEvent';

const TimelineSection = ({ year, timelineEvents }) => {
  return (
    <Stack>
      <Divider></Divider>
      <Text as='h3' fontWeight='bold'>
        {year}
      </Text>
      {timelineEvents.map((event, idx) => (
        <TimelineSectionEvent
          event={event}
          key={idx}
          // direction={idx % 2 === 0 ? 'fromLeft' : 'fromRight'}
          direction={'fromRight'}
        />
      ))}
    </Stack>
  );
};

export default TimelineSection;
