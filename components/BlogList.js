import { Stack } from '@chakra-ui/layout';
import BlogArticle from './BlogArticle';
import StaggeredGroup from './StaggeredGroup';

const BlogList = ({ blogPosts }) => {
  return (
    <Stack>
      {blogPosts.map((blogPost) => (
        <BlogArticle blogPost={blogPost} key={blogPost.sys.id} />
      ))}
      {/* <StaggeredGroup staggerInterval={0.2}
          childAnimationDuration={1}
          items={make posts into list of items... TODO}/> */}
    </Stack>
  );
};

export default BlogList;
