import { Stack, Divider, Text } from '@chakra-ui/react';
import { Fragment } from 'react';
import TimelineSectionEvent from './TimelineSectionEvent';

const TimelineSection = ({ year, timelineEvents }) => {
  return (
    <Stack spacing={0}>
      <Divider></Divider>
      <Stack spacing={4}>
        <Text as='h3' fontWeight='bold' color='brand.400'>
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
    </Stack>
  );
};

export default TimelineSection;
