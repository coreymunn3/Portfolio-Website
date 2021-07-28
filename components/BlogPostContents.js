import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Fragment } from 'react';

const BlogPostContents = ({ blogPost }) => {
  const { fields, metadata, sys } = blogPost;
  const document = fields.textContent.content;
  // console.log(fields.textContent.content);
  return <div>My Blog Post</div>;
};

export default BlogPostContents;
