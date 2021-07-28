import { createClient } from 'contentful';
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

  return {
    props: {
      blogPost: res.items[0],
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
