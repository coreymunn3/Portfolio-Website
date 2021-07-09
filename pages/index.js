import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '@chakra-ui/react';
import PageContainer from '../components/PageContainer';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { createClient } from 'contentful';
export default function Home(props) {
  const { timelineData, projectData } = props;
  return (
    <Fragment>
      <PageContainer>
        <Stack spacing={[24, 40]}>
          <Hero />
          <AboutMe />
          <Timeline timelineData={timelineData} />
          <Projects projectData={projectData} />
          <Contact />
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

  const timelineContent = await client.getEntries({
    content_type: 'timeline',
  });

  const projectContent = await client.getEntries({
    content_type: 'projects',
  });

  // format the response
  const formattedTimelineData = {
    2018: [],
    2019: [],
    2020: [],
    2021: [],
  };
  for (let key in formattedTimelineData) {
    formattedTimelineData[key] = timelineContent.items
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
      projectData: projectContent.items,
    },
  };
}
