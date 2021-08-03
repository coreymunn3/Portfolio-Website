import Head from 'next/head';
import { createClient } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import readingTime from 'reading-time';
import { Stack, Heading, Text, Divider } from '@chakra-ui/layout';
import { Fragment } from 'react';
import BlogList from '../../components/BlogList';

const Blog = (props) => {
  const { blogPosts } = props;
  return (
    <Fragment>
      <Head>
        <title>Corey Munn | Blog</title>
        <meta
          name='description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. Read about my experiences.'
        />
        <meta
          name='keywords'
          content='corey munn, corey munn website, corey munn portfolio, corey munn projects, corey munn blog'
        />
        <meta property='og:type' content='website' />
        {/* <meta property='og:url' content='https://coreymunn.io/.projects' /> */}
        <meta property='og:title' content='Corey Munn | Blog' />
        <meta
          property='og:description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. Read about my experiences.'
        />
        <meta property='og:image' content='https://imgur.com/a/mdAGLao' />

        <meta property='twitter:card' content='summary_large_image' />
        {/* <meta property='twitter:url' content='https://coreymunn.io/' /> */}
        <meta property='twitter:title' content='Corey Munn | Blog' />
        <meta
          property='twitter:description'
          content='Corey Munn is an experienced developer building beautiful web applications with React, NextJS, and Node. Read about my experiences.'
        />
        <meta property='twitter:image' content='https://imgur.com/a/mdAGLao' />
      </Head>
      <Stack spacing={4}>
        <Heading variant='title'>Blog</Heading>
        <Text>Just some of my thoughts, experiences, and useful snippets</Text>
        {/* search bar will go here */}
        <Divider />
        <BlogList blogPosts={blogPosts} />
      </Stack>
    </Fragment>
  );
};

export default Blog;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'blogPost',
  });

  const blogPosts = res.items.map((post) => {
    const plainText = documentToPlainTextString(post.fields.richTextContent);
    post['readingTime'] = readingTime(plainText);
    return post;
  });

  return {
    props: {
      blogPosts,
    },
  };
}
