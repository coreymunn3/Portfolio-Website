import Head from 'next/head';
import {
  Stack,
  Heading,
  Text,
  Image,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import { Fragment } from 'react';
import { FaFilePdf } from 'react-icons/fa';
import { createClient } from 'contentful';

const index = (props) => {
  const resume = props.resume[0];
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const downloadFile = () => {
    window.open(resume.fields.resumePdf.fields.file.url, '_blank');
  };

  return (
    <Fragment>
      <Stack>
        <Heading variant='title'>My Resume</Heading>

        <Button aria-label='download pdf resume' onClick={downloadFile}>
          <FaFilePdf />
          &nbsp; Download Resume
        </Button>
        <Image
          src={resume.fields.resumeImage.fields.file.url}
          borderRadius='md'
        />
        {!isLargerThan768 && <Text>Pinch and expand to zoom in.</Text>}
      </Stack>
    </Fragment>
  );
};

export default index;

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({
    content_type: 'resumeAsset',
  });

  return {
    props: {
      resume: res.items,
    },
  };
}
