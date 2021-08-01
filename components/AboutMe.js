import { Box, Flex, Stack, Heading, Text, Link } from '@chakra-ui/react';
import SlideIntoView from './SlideIntoView';
import NextLink from 'next/link';
import LinkHighlight from './LinkHighlight';

const AboutMe = () => {
  return (
    <SlideIntoView direction='fromBottom'>
      <Box>
        <Flex direction={['column', 'row']} w='100%'>
          <Stack maxW={['100%', '50%']} spacing={4}>
            <Heading variant='subtitle1'>About Me</Heading>
            <Text as='span'>
              I am a 29 year-old Data Visualization Consultant and{' '}
              <NextLink
                href='/blog/my-two-year-journey-learning-web-development-while-working-full-time'
                passHref
              >
                <LinkHighlight>I have spent the last two years</LinkHighlight>
              </NextLink>{' '}
              developing my passion for building beautiful web applications with
              React, Node, and Next. What started as just a side-interest has
              become a serious hobby that I consistently spend 10-15 hours per
              week practicing.
            </Text>
            <Text as='span'>
              In the near-future, I hope to take this hobby full time by joining
              an agile team as a React developer where I can combine my 3 years
              of designing and developing data-intensive business intelligence
              applications with my passion for front end development. As a
              self-taught developer with a couple years of personal study (
              <NextLink href='/projects' passHref>
                <LinkHighlight>check out my projects</LinkHighlight>
              </NextLink>
              ) I'm eager to embark on the next stage in my career as a front
              end developer!
            </Text>
          </Stack>
          <Flex justifyContent='center' alignItems='flex-start' w='100%' mt={4}>
            {/* https://isotropic.co/making-blob-images/ */}
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
