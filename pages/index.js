import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '@chakra-ui/react';
import PageContainer from '../components/PageContainer';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';
import { createClient } from 'contentful';
export default function Home(props) {
  const { timelineData } = props;
  return (
    <Fragment>
      <PageContainer>
        <Stack spacing={[24, 40]}>
          <Hero />
          <AboutMe />
          <Timeline timelineData={timelineData} />
        </Stack>
      </PageContainer>
    </Fragment>
  );
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'timeline',
  });

  // format the response
  const formattedTimelineData = {
    2018: [],
    2019: [],
    2020: [],
    2021: [],
  };
  for (let key in formattedTimelineData) {
    formattedTimelineData[key] = res.items
      .filter(
        (event) =>
          new Date(event.fields.eventDate).getFullYear() === parseInt(key)
      )
      .sort((a, b) => {
        return new Date(b.fields.eventDate) - new Date(a.fields.eventDate);
      });
  }

  return {
    props: {
      timelineData: formattedTimelineData,
    },
  };
}
