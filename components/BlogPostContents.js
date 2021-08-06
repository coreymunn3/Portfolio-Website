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
  Divider,
} from '@chakra-ui/layout';
// import { Image } from '@chakra-ui/image';
import NextImage from 'next/image';
import CodeBlock from './CodeBlock';
import QuoteBlock from './QuoteBlock';
import LinkHighlight from './LinkHighlight';
import { useEffect, useState } from 'react';

const BlogPostContents = ({ blogPost }) => {
  const { fields, metadata, sys, readingTime } = blogPost;
  const [views, setViews] = useState('---');

  useEffect(() => {
    const incrimentViews = async () => {
      const res = await fetch(`/api/views/${blogPost.fields.slug}`, {
        method: 'POST',
      });
      const data = await res.json();
      setViews(data.views);
    };
    incrimentViews();
  }, []);

  // custom rich text rendering using contentful packages
  // see: https://www.reddit.com/r/gatsbyjs/comments/hiwqh6/contentful_rich_text_rendering_is_it_worth/
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <Text as='strong' fontWeight='bold'>
          {text}
        </Text>
      ),
      [MARKS.ITALIC]: (text) => <Text as='em'>{text}</Text>,
      [MARKS.UNDERLINE]: (text) => <Text as='u'>{text}</Text>,
      [MARKS.CODE]: (text) => (
        <CodeBlock>
          <Text as='pre' whiteSpace='pre-wrap'>
            {text}
          </Text>
        </CodeBlock>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text as='span'>{children}</Text>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <Heading as='h3' variant='subtitle1'>
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <Heading as='h4'>{children}</Heading>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <Heading as='h5'>{children}</Heading>
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
        <Box pt={8} w='100%' h='400px' position='relative'>
          <NextImage
            src={'https:' + node.data.target.fields.file.url}
            alt={`${node.data.target.fields.title} - ${node.data.target.fields.description}`}
            layout='fill'
            objectFit='cover'
          />
          <style jsx global>{`
            img {
              border-radius: 5px;
            }
          `}</style>
          <Text fontSize='xs' pt={1} textAlign='right'>
            {node.data.target.fields.description}
          </Text>
        </Box>
      ),
      [BLOCKS.LIST_ITEM]: (node, children) => (
        <ListItem as='li'>{children}</ListItem>
      ),
      [BLOCKS.QUOTE]: (node, children) => (
        // assumes only 1 paragraph of quote content and nothing else
        <QuoteBlock>
          <Text fontSize='lg' variant='lead'>
            {node.content[0].content[0].value}
          </Text>
        </QuoteBlock>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <LinkHighlight href={node.data.uri} target='_blank'>
          {children}
        </LinkHighlight>
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
        <Text>
          {`${views} views `}
          &bull; {readingTime.text}
        </Text>
      </Flex>
      <Divider />
      {documentToReactComponents(fields.richTextContent, options)}
    </Stack>
  );
};

export default BlogPostContents;
