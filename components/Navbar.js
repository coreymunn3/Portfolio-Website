import {
  Box,
  Flex,
  Button,
  HStack,
  VStack,
  Container,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useMediaQuery, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import ColorModeSwitch from './ColorModeSwitch';

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const hamburgerColor = useColorModeValue('gray.800', 'white');
  const dividerColor = useColorModeValue('gray.100', 'gray.600');
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <Box
      zIndex='10'
      as='nav'
      pt={4}
      pb={4}
      position='sticky'
      top='0'
      backdropFilter='blur(20px)'
    >
      <Container
        maxW='3xl'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <Box>
          <NextLink href='/'>Corey Munn</NextLink>
        </Box>

        {/* shows on big screens */}
        <HStack display={isLargerThan768 ? 'flex' : 'none'}>
          <NextLink href='/about' passHref>
            <Button as='a' variant='ghost' fontWeight='light'>
              About
            </Button>
          </NextLink>
          <NextLink href='/projects' passHref>
            <Button as='a' variant='ghost' fontWeight='light'>
              Projects
            </Button>
          </NextLink>
          <NextLink href='/blog' passHref>
            <Button as='a' variant='ghost' fontWeight='light'>
              Blog
            </Button>
          </NextLink>
          <ColorModeSwitch />
        </HStack>

        {/* shows on small screens */}
        <HStack display={isLargerThan768 ? 'none' : 'flex'}>
          <ColorModeSwitch />
          <IconButton borderRadius='md'>
            <HamburgerIcon
              fontSize='1.5rem'
              color={hamburgerColor}
              cursor='pointer'
              onClick={handleOpen}
            />
          </IconButton>
        </HStack>

        <Drawer isOpen={isOpen} placement='right' onClose={handleClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader
              fontWeight='bold'
              borderBottom='1px solid'
              borderColor={dividerColor}
            >
              Corey Munn
            </DrawerHeader>
            <DrawerBody>
              <Flex
                height='100%'
                flexDirection='column'
                justifyContent='space-between'
              >
                <VStack>
                  <NextLink href='/about' passHref>
                    <Button as='a' variant='ghost' fontWeight='light' w='100%'>
                      About
                    </Button>
                  </NextLink>
                  <NextLink href='/projects' passHref>
                    <Button as='a' variant='ghost' fontWeight='light' w='100%'>
                      Projects
                    </Button>
                  </NextLink>
                  <NextLink href='/blog' passHref>
                    <Button as='a' variant='ghost' fontWeight='light' w='100%'>
                      Blog
                    </Button>
                  </NextLink>
                </VStack>
                <Box>
                  <Button variant='link' fontWeight='light' w='100%'>
                    Get In Touch
                  </Button>
                </Box>
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Navbar;
