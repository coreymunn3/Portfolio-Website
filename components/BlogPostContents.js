import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import {
  Box,
  Stack,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Divider,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { useColorModeValue } from '@chakra-ui/color-mode';

const BlogPostContents = ({ blogPost }) => {
  const { fields, metadata, sys } = blogPost;
  const codeBlockBg = useColorModeValue('brand.50', 'brand.800');
  // custom rich text rendering using contentful packages
  // see: https://www.reddit.com/r/gatsbyjs/comments/hiwqh6/contentful_rich_text_rendering_is_it_worth/
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Text as='strong'>{text}</Text>,
      [MARKS.ITALIC]: (text) => <Text as='em'>{text}</Text>,
      [MARKS.UNDERLINE]: (text) => <Text as='u'>{text}</Text>,
      [MARKS.CODE]: (text) => <Text as='code'>{text}</Text>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as='h3' variant='subtitle1' pt={8}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as='h4' pt={8}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading as='h5' pt={8}>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (node, children) => (
        <Text as='h6' variant='lead' fontSize='lg'>
          {children}
        </Text>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <UnorderedList pl={8} as='ul' listStyleType='square'>
          {children}
        </UnorderedList>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <Box pb={8}>
          <Image
            src={node.data.target.fields.file.url}
            alt={`${node.data.target.fields.title} - ${node.data.target.fields.description}`}
            borderRadius='xl'
          />
          <Text fontSize='sm' pt={1}>
            {node.data.target.fields.description}
          </Text>
        </Box>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <ListItem as='li'>{children}</ListItem>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link href={node.data.uri} target='_blank'>
          {children}
        </Link>
      ),
    },
  };

  return (
    <Stack spacing={4}>
      <Heading variant='title'>{fields.title}</Heading>
      <Flex justifyContent='space-between'>
        <Text>
          {new Date(sys.createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </Text>
        <Text>1,000 Views &bull; 5 min read</Text>
      </Flex>
      <Divider />
      {documentToReactComponents(fields.richTextContent, options)}
    </Stack>
  );
};

export default BlogPostContents;
