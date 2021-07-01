import Head from 'next/head';
import { Fragment } from 'react';
import { Stack } from '@chakra-ui/react';
import PageContainer from '../components/PageContainer';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';

export default function Home() {
  return (
    <Fragment>
      <PageContainer>
        <Stack spacing={[24, 96]}>
          <Hero />
          <AboutMe />
        </Stack>
      </PageContainer>
    </Fragment>
  );
}
