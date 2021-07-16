import { Heading, Text, Link, Stack } from '@chakra-ui/react';
import TimelineSection from './TimelineSection';
import SlideIntoView from './SlideIntoView';

const Timeline = ({ timelineData }) => {
  return (
    <SlideIntoView direction='fromBottom' pctVisibleThreshold={0.1}>
      <Stack>
        <Heading as='h2' variant='subtitle1'>
          Timeline
        </Heading>
        <Text>
          A quick overview of my recent activities. See{' '}
          <Link color='red.500'>my resume</Link> for more depth.
        </Text>

        {/* create timeline sections for every relevant year */}
        {Object.keys(timelineData)
          .reverse()
          .map((year) => (
            <SlideIntoView
              direction='fromBottom'
              pctVisibleThreshold={0.1}
              key={year}
            >
              <TimelineSection
                year={year}
                timelineEvents={timelineData[year]}
              />
            </SlideIntoView>
          ))}
      </Stack>
    </SlideIntoView>
  );
};

export default Timeline;
