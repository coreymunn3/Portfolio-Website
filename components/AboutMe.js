import { Box, Flex, Stack, Heading, Text, Image } from '@chakra-ui/react';
import SlideIntoView from './SlideIntoView';

const AboutMe = () => {
  return (
    <SlideIntoView direction='fromBottom'>
      <Box>
        <Flex direction={['column', 'row']} w='100%'>
          <Stack maxW={['100%', '60%']}>
            <Heading fontSize='2xl'>About Me</Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              consectetur nulla. Integer sit amet odio ante. Etiam dolor metus,
              tristique dapibus dui eget, tincidunt dictum urna. Cras id ante
              sed est consectetur consectetur. Sed aliquam ornare convallis.
              Donec massa nulla, condimentum non laoreet vitae, eleifend ut
              urna. Vivamus sagittis, urna iaculis suscipit commodo, massa erat
              tempus lacus, non auctor metus leo quis neque. Sed et tincidunt
              nibh. Etiam vitae erat in elit posuere convallis eget vel ligula.
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              consectetur nulla. Integer sit amet odio ante. Etiam dolor metus,
              tristique dapibus dui eget, tincidunt dictum urna.
            </Text>
          </Stack>
          <Flex justifyContent='center' alignItems='flex-start' w='100%' mt={4}>
            {/* <Image
              borderRadius='full'
              objectFit='cover'
              w={250}
              h={250}
              src='/images/headshot.jpg'
              alt='corey munn'
            /> */}
            <svg viewBox='25 0 193 190' xmlns='http://www.w3.org/2000/svg'>
              <defs>
                <clipPath id='user-space' clipPathUnits='userSpaceOnUse'>
                  <path
                    fill='#FF0066'
                    d='M62.1,-40.2C69.7,-22.6,57.8,2,44.2,26C30.6,50,15.3,73.4,-2.2,74.7C-19.8,76,-39.5,55.1,-53.9,30.7C-68.2,6.2,-77.2,-21.7,-67.3,-40.7C-57.4,-59.6,-28.7,-69.4,-0.8,-69C27.2,-68.5,54.4,-57.8,62.1,-40.2Z'
                    transform='translate(120 80) scale(1.1)'
                  />
                </clipPath>
              </defs>

              <image
                width='100%'
                height='100%'
                preserveAspectRatio='xMidYMid slice'
                xlinkHref='/images/headshot.jpg'
                clipPath='url(#user-space)'
              />
            </svg>
          </Flex>
        </Flex>
      </Box>
    </SlideIntoView>
  );
};

export default AboutMe;
