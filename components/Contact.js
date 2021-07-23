import {
  Stack,
  Box,
  HStack,
  Heading,
  Text,
  Button,
  useMediaQuery,
} from '@chakra-ui/react';
import SlideIntoView from './SlideIntoView';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { EmailIcon } from '@chakra-ui/icons';

const Contact = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  return (
    <SlideIntoView direction='fromBottom'>
      <Stack spacing={8} mt={48}>
        <Heading variant='subtitle1' textAlign='center'>
          Get In Touch
        </Heading>

        <HStack justifyContent='center'>
          <Button
            as='a'
            href='mailto:coreymunn3@gmail.com'
            target='_blank'
            leftIcon={<EmailIcon />}
            variant='solid'
            size={isLargerThan768 ? 'md' : 'sm'}
          >
            Email
          </Button>
          <Button
            as='a'
            href='https://github.com/coreymunn3'
            target='_blank'
            leftIcon={<FaGithub />}
            variant='solid'
            size={isLargerThan768 ? 'md' : 'sm'}
          >
            Github
          </Button>
          <Button
            as='a'
            href='https://www.linkedin.com/in/michael-munn-73228958/'
            target='_blank'
            leftIcon={<FaLinkedin />}
            variant='solid'
            size={isLargerThan768 ? 'md' : 'sm'}
          >
            LinkedIn
          </Button>
        </HStack>
      </Stack>

      {/* bottom of page */}
      <Box my={12} textAlign='center'>
        <Text>Designed & Created by Michael Corey Munn, 2021</Text>
        <Text>Built with Next & Chakra.</Text>
      </Box>
    </SlideIntoView>
  );
};

export default Contact;
