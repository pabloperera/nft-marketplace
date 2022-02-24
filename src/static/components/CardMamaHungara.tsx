import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
import React from 'react';

import logofig from '../images/logo_fig.jpg'
import backscreen from '../images/grape-bg.jpg'
import backscreen2 from '../images/grape-bg2.jpg'
  
  export default function SocialProfileWithImage() {
    return (
      <Center py={6}>
        <Box
          maxW={'370px'}
          w={'full'}
          bg={useColorModeValue('gray.800', 'whiteAlpha.200')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'240px'}
            w={'full'}
            src={
              backscreen
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                logofig
              }
            //   alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                NFT Marketplace 
              </Heading>
              <Text color={'gray.500'} as='a' href='https://figandgrape.io'
              _hover={
                  {
                      variant: 'ghost',
                      textColor: 'white'
                  }
              }>Fig &amp; Grape </Text>
            </Stack>
  
            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Followers
                </Text>
              </Stack>
            </Stack>
  
            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }