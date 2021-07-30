import { createClient } from 'contentful';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import readingTime from 'reading-time';
import BlogPostContents from '../../components/BlogPostContents';
import { Fragment } from 'react';

const BlogPost = (props) => {
  const { blogPost } = props;
  console.log(blogPost);
  return (
    <Fragment>
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
