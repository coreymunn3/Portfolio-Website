import Head from 'next/head';
import { Fragment } from 'react';
import { createClient } from 'contentful';
import ProjectGrid from '../../components/ProjectGrid';

const Projects = (props) => {
  const { projects } = props;
  return (
    <Fragment>
      <Head>
        <title>Corey Munn | Projects</title>
        <meta
          name='description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. These are my projects.'
        />
        <meta
          name='keywords'
          content='corey munn, corey munn website, corey munn portfolio, corey munn projects, corey munn blog'
        />
        <meta property='og:type' content='website' />
        {/* <meta property='og:url' content='https://coreymunn.io/.projects' /> */}
        <meta property='og:title' content='Corey Munn | Projects' />
        <meta
          property='og:description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. These are my projects.'
        />
        <meta property='og:image' content='https://imgur.com/a/mdAGLao' />

        <meta property='twitter:card' content='summary_large_image' />
        {/* <meta property='twitter:url' content='https://coreymunn.io/' /> */}
        <meta property='twitter:title' content='Corey Munn | Projects' />
        <meta
          property='twitter:description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. These are my projects.'
        />
        <meta property='twitter:image' content='https://imgur.com/a/mdAGLao' />
      </Head>
      <ProjectGrid projects={projects} />
    </Fragment>
  );
};

export default Projects;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'projects',
  });

  return {
    props: {
      projects: res.items,
    },
    revalidate: 60,
  };
}
