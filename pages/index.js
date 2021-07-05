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

  return {
    props: {
      timelineData: res.items,
    },
  };
}
