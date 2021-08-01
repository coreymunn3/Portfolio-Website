import { Heading, Text, Link, Stack } from '@chakra-ui/react';
import TimelineSection from './TimelineSection';
import SlideIntoView from './SlideIntoView';
import LinkHighlight from './LinkHighlight';

const Timeline = ({ timelineData }) => {
  return (
    <SlideIntoView direction='fromBottom' pctVisibleThreshold={0.1}>
      <Stack>
        <Heading as='h2' variant='subtitle1'>
          Timeline
        </Heading>
        <Text>
          A quick overview of my recent activities. See{' '}
          <LinkHighlight>my resume</LinkHighlight> for more depth.
        </Text>

        {/* create timeline sections for every relevant year */}
        {Object.keys(timelineData)
          .reverse()
          .map((year) => (
            <SlideIntoView
              direction='fromRight'
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
