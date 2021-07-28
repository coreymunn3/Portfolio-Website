import { createClient } from 'contentful';
import BlogPostContents from '../../components/BlogPostContents';

const BlogPost = (props) => {
  const { blogPost } = props;
  return <BlogPostContents blogPost={blogPost} />;
};

export default BlogPost;

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps({ params }) {
  let res = await client.getEntries({
    content_type: 'blogPost',
  });

  return {
    props: {
      blogPost: res.items[0],
      'fields.slug': params.slug,
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
