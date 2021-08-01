import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '@chakra-ui/react';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Timeline from '../components/Timeline';
import FeaturedProjects from '../components/FeaturedProjects';
import { createClient } from 'contentful';
export default function Home(props) {
  const { timelineData, projectData } = props;

  const featuredProjects = projectData.filter(
    (project) => project.fields.isFeaturedProject === true
  );

  return (
    <Fragment>
      <Head>
        <title>Corey Munn | React Developer</title>
        <meta
          name='description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. View my Resume, Project repositories, and Blog.'
        />
      </Head>
      <Stack spacing={[24, 40]}>
        <Hero />
        <AboutMe />
        <FeaturedProjects projects={featuredProjects} />
        <Timeline timelineData={timelineData} />
      </Stack>
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

  // format the response like:
  // '2018': [ {event}, {event} ]
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
