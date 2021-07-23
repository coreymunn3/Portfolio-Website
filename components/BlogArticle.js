import { Stack, Flex, Box, Text, Heading } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import { Image } from '@chakra-ui/image';
import { useState } from 'react';

const BlogArticle = ({ blogPost }) => {
  console.log(blogPost);
  const { fields, sys, meta } = blogPost;
  // for image load
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => setIsLoading(false);
  return (
    <Flex py={2}>
      <Box mr={4}>
        <Skeleton isLoaded={!isLoading}>
          <Image
            w='200px'
            h='150px'
            src={fields.thumbnailImage.fields.file.url}
            alt='journey'
            objectFit='cover'
            onLoad={handleImageLoad}
            borderRadius='xl'
          />
        </Skeleton>
      </Box>
      <Box flex={1} cursor='pointer'>
        <Stack spacing={0} h='100%'>
          {/* this heading will have to be a link eventually */}
          <Text
            as='h3'
            variant='lead'
            fontSize='lg'
            fontWeight='bold'
            _hover={{ textDecoration: 'underline' }}
          >
            {fields.title}
          </Text>
          <Text flex={1}>{fields.description}</Text>
          {/* just a placeholder for now */}
          <Text textAlign='left' fontStyle='italic'>
            1,000 Views &bull; 5 min read
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
};

export default BlogArticle;
