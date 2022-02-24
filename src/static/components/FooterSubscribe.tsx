import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
    Divider,
    Center, 
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaDiscord, FaInstagram, FaLink, FaLinkedin, FaTelegram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
import React from 'react';
import image2 from '../images/F&G-iso-300px.png'
import fondo from "../images/grape-bg10.jpg";
import image3 from '../images/istockphoto-612x612.jpg'
  
  const Logo = (props: any) => {
    const bgColor = useColorModeValue("whiteAlpha.100", "whiteAlpha.400");
    return (        
    <Box maxW='120px' alignContent={'flex-start'} textColor={"whiteAlpha.700"}>
    {/* <Link target="_blank" href={"https://figandgrape.io"}> */}
      <img alt="logoACG" src={image2}></img>
    {/* </Link> */}
  </Box>
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function FooterSubscribe() {
    return (
      
      <Box
        bgImage={fondo}
        bg={image2}
        alignItems={'center'}
        color={useColorModeValue('gray.700', 'gray.200')}
        >
          <Divider color={'blackAlpha.900'}></Divider>
        <Container as={Stack} maxW={'6xl'} py={6}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={24}>
            <Stack spacing={6}>
              <Center justifyContent={'center'}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              </Center>
              {/* <Text fontSize={'sm'}> */}
                {/* Powered by Fig &amp; Grape ® */}
                {/* ©  */}
              {/* </Text> */}
              <Stack direction={'row'} spacing={6} justifyContent={'center'}>
                <SocialButton label={'Twitter'} href={'https://twitter.com/figandgrapeio'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/fig-and-grape'}>
                  <FaLinkedin />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'https://www.instagram.com/figandgrape.io/'}>
                  <FaInstagram />
                </SocialButton>
                <SocialButton label={'Discord'} href={'https://discord.gg/Reqg2mceSW'}>
                  <FaDiscord />
                </SocialButton>
                <SocialButton label={'Telegram'} href={'https://t.me/figandgrapeio'}>
                  <FaTelegram />
                </SocialButton>
                <SocialButton label={'Website'} href={'https://figandgrape.io'}>
                  <FaLink />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'} justify={'center'} alignItems={'center'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Blog</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Pricing</Link>
              
            </Stack>
            <Stack align={'flex-start'} justify={'center'} alignItems={'center'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Legal</Link>
              <Link href={'#'}>Privacy Policy</Link>
              
            </Stack>
            <Stack align={'flex-start'} justify={'flex-start'}>
              <ListHeader>Stay up to date!</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('purple.400', 'blue.500')}
                  color={useColorModeValue('white', 'gray.800')}
                  fontSize={'xl'}
                  _hover={{
                    bg: 'blue.300',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }