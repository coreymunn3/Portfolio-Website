import { Box, Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Box mt={[100, 250]}>
      <Flex direction={['column', 'row']} w='100%'>
        <Stack maxW={['100%', '60%']}>
          <Heading size='2xl'>About Me</Heading>
          <Text variant='muted'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            consectetur nulla. Integer sit amet odio ante. Etiam dolor metus,
            tristique dapibus dui eget, tincidunt dictum urna. Cras id ante sed
            est consectetur consectetur. Sed aliquam ornare convallis. Donec
            massa nulla, condimentum non laoreet vitae, eleifend ut urna.
            Vivamus sagittis, urna iaculis suscipit commodo, massa erat tempus
            lacus, non auctor metus leo quis neque. Sed et tincidunt nibh. Etiam
            vitae erat in elit posuere convallis eget vel ligula.
          </Text>
          <Text variant='muted'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            consectetur nulla. Integer sit amet odio ante. Etiam dolor metus,
            tristique dapibus dui eget, tincidunt dictum urna.
          </Text>
        </Stack>
        <Flex justifyContent='center' alignItems='flex-start' w='100%' mt={4}>
          <Image
            borderRadius='full'
            objectFit='cover'
            w={250}
            h={250}
            src='/images/headshot.jpg'
            alt='corey munn'
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default AboutMe;
