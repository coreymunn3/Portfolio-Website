import Head from 'next/head';
import { createClient } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import readingTime from 'reading-time';
import BlogPostContents from '../../components/BlogPostContents';
import { Fragment } from 'react';

const BlogPost = (props) => {
  const { blogPost } = props;

  return (
    <Fragment>
      <Head>
        <title>{blogPost.fields.title}</title>
        <meta name='description' content={blogPost.fields.desription} />
        <meta property='og:type' content='website' />
        {/* <meta
            property="og:url"
            content={``}
          /> */}
        <meta property='og:title' content={blogPost.fields.title} />
        <meta property='og:description' content={blogPost.fields.desription} />
        <meta
          property='og:image'
          content={`http:${blogPost.fields.thumbnailImage.fields.file.url}`}
        />

        <meta property='twitter:card' content='summary_large_image' />
        {/* <meta
          property='twitter:url'
          content={``}
        /> */}
        <meta property='twitter:title' content={blogPost.fields.title} />
        <meta
          property='twitter:description'
          content={blogPost.fields.desription}
        />
        <meta
          property='twitter:image'
          content={`http:${blogPost.fields.thumbnailImage.fields.file.url}`}
        />
      </Head>
      <BlogPostContents blogPost={blogPost} />
    </Fragment>
  );
};

export default BlogPost;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps({ params }) {
  let res = await client.getEntries({
    content_type: 'blogPost',
    'fields.slug': params.slug,
  });
  const blogPost = res.items[0];

  // calculate reading time
  const plainText = documentToPlainTextString(blogPost.fields.richTextContent);
  blogPost['readingTime'] = readingTime(plainText);

  return {
    props: {
      blogPost,
    },
  };
}

export async function getStaticPaths() {
  let res = await client.getEntries({
    content_type: 'blogPost',
  });

  return {
    paths: res.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  };
}
