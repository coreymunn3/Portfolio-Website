import { Stack, Flex, Box, Text, Heading } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Image } from '@chakra-ui/image';
import SkeletonLoadingImage from './SkeletonLoadingImage';
import NextLink from 'next/link';
import useViews from '../hooks/useViews';

const BlogListItem = ({ blogPost }) => {
  const { fields, sys, meta, readingTime } = blogPost;
  const { views, isLoading } = useViews(fields.slug);

  return (
    <Flex py={2} direction={['column', 'row']}>
      <Box mr={4} mb={4}>
        <SkeletonLoadingImage
          w={['100%', '200px']}
          h='150px'
          src={fields.thumbnailImage.fields.file.url}
          alt='journey'
          objectFit='cover'
          borderRadius='xl'
        />
        {/* <Skeleton isLoaded={!isLoading}>
          <Image
            w={['100%', '200px']}
            h='150px'
            src={fields.thumbnailImage.fields.file.url}
            alt='journey'
            objectFit='cover'
            onLoad={handleImageLoad}
            borderRadius='xl'
          />
        </Skeleton> */}
      </Box>
      <Box flex={1} mb={4}>
        <Stack spacing={0} h='100%'>
          <Text
            as='h3'
            variant='lead'
            fontSize='lg'
            fontWeight='bold'
            _hover={{ textDecoration: 'underline' }}
            cursor='pointer'
          >
            <NextLink href={`blog/${fields.slug}`}>{fields.title}</NextLink>
          </Text>
          <Text flex={1}>{fields.description}</Text>
          {/* just a placeholder for now */}
          <Flex justifyContent='space-between'>
            <Text fontStyle='italic'>
              {new Date(sys.createdAt).toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </Text>
            <Text fontStyle='italic'>
              {`${isLoading ? '--- ' : views} views`} &bull; {readingTime.text}
            </Text>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
};

export default BlogListItem;
