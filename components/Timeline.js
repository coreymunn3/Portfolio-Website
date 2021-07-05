import { Heading, Text, Link, Stack } from '@chakra-ui/react';
import TimelineSection from './TimelineSection';
import SlideIntoView from './SlideIntoView';

const Timeline = ({ timelineData }) => {
  const formattedTimelineData = {
    2021: timelineData.filter(
      (event) => new Date(event.fields.eventDate).getFullYear() === 2021
    ),
    2020: timelineData.filter(
      (event) => new Date(event.fields.eventDate).getFullYear() === 2020
    ),
    2019: timelineData.filter(
      (event) => new Date(event.fields.eventDate).getFullYear() === 2019
    ),
    2018: timelineData.filter(
      (event) => new Date(event.fields.eventDate).getFullYear() === 2018
    ),
  };
  console.log(timelineData);
  console.log(formattedTimelineData['2020']);
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

        <TimelineSection
          year='2021'
          timelineEvents={formattedTimelineData['2021']}
        />
        <TimelineSection
          year='2020'
          timelineEvents={formattedTimelineData['2020']}
        />
        <TimelineSection
          year='2019'
          timelineEvents={formattedTimelineData['2019']}
        />
        <TimelineSection
          year='2018'
          timelineEvents={formattedTimelineData['2018']}
        />
        {/* <Divider></Divider>
        <Text as='h3'>2021</Text>
        {formattedTimelineData?.['2021'].map((event, idx) => (
          <SlideIntoView
            direction={idx % 2 === 0 ? 'fromLeft' : 'fromRight'}
            pctVisibleThreshold={1}
          >
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
        ))} */}
      </Stack>
    </SlideIntoView>
  );
};

export default Timeline;
