import Head from 'next/head';
import { Stack, Heading, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Image } from '@chakra-ui/image';
import { Fragment } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { createClient } from 'contentful';

const Resume = (props) => {
  const resume = props.resume[0];
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const downloadFile = () => {
    window.open(resume.fields.resumePdf.fields.file.url, '_blank');
  };

  return (
    <Fragment>
      <Head>
        <title>Corey Munn | React Developer</title>
        <meta
          name='description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. View my Resume, Project repositories, and Blog.'
        />
        <meta
          name='keywords'
          content='corey munn, corey munn website, corey munn portfolio, corey munn projects, corey munn blog'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://coreymunn.dev' />
        <meta property='og:title' content='Corey Munn | React Developer' />
        <meta
          property='og:description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. View my Resume, Project repositories, and Blog.'
        />
        <meta property='og:image' content='https://i.imgur.com/MfuCQqf.png' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://coreymunn.dev/' />
        <meta property='twitter:title' content='Corey Munn | React Developer' />
        <meta
          property='twitter:description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. View my Resume, Project repositories, and Blog.'
        />
        <meta
          property='twitter:image'
          content='https://i.imgur.com/MfuCQqf.png'
        />
      </Head>
      <Stack>
        <Heading variant='title'>My Resume</Heading>

        <Button aria-label='download pdf resume' onClick={downloadFile}>
          <FaFilePdf />
          &nbsp; Download Resume
        </Button>
        <Image
          src={resume.fields.resumeImage.fields.file.url}
          borderRadius='md'
        />
        {!isLargerThan768 && <Text>Pinch and expand to zoom in.</Text>}
      </Stack>
    </Fragment>
  );
};

export default Resume;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'resumeAsset',
  });

  return {
    props: {
      resume: res.items,
    },
    revalidate: 60,
  };
}
