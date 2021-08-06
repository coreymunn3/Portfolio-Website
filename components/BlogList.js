import { Stack } from '@chakra-ui/layout';
import BlogListItem from './BlogListItem';

const BlogList = ({ blogPosts }) => {
  return (
    <Stack>
      {blogPosts.map((blogPost) => (
        <BlogListItem blogPost={blogPost} key={blogPost.sys.id} />
      ))}
    </Stack>
  );
};

export default BlogList;
