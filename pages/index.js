import Head from 'next/head';
import { Fragment } from 'react';
import PageContainer from '../components/PageContainer';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Fragment>
      <PageContainer>
        <Hero />
      </PageContainer>
    </Fragment>
  );
}
