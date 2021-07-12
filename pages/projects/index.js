import { Heading, Stack } from '@chakra-ui/react';
import { Fragment } from 'react';
import { createClient } from 'contentful';
import ProjectGrid from '../../components/ProjectGrid';

const index = (props) => {
  const { projects } = props;
  return (
    <Fragment>
      <ProjectGrid projects={projects} />
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
    content_type: 'projects',
  });

  return {
    props: {
      projects: res.items,
    },
  };
}
