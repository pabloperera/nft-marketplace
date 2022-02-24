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
  IconButton,
} from "@chakra-ui/react";
import React from "react";

import logofig from "../images/logo_fig.jpg";
import backscreen from "../images/grape-bg.jpg";
import backscreen2 from "../images/grape-bg2.jpg";
import {
  BsCheck2All,
  BsCheck2Circle,
  BsCheckCircleFill,
  BsFillCartCheckFill,
  BsLinkedin,
  BsPatchCheckFill,
  BsPersonCheckFill,
} from "react-icons/bs";

export default function SocialProfileWithImage() {
  return (
    <Center py={24}>
      <Box
        maxW={"480px"}
        w={"full"}
        maxH={"530px"}
        h={"full"}
        bg={useColorModeValue("gray.800", "whiteAlpha.700")}
        boxShadow={"2xl"}
        rounded={"xl"}
        overflow={"hidden"}
      >
        <Image h={"240px"} w={"full"} src={backscreen} objectFit={"cover"} />
        <Flex justify={"center"} mt={-12}>
          <Avatar size={"xl"} src={logofig} />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Heading
              fontSize={"2xl"}
              textColor={useColorModeValue("cyan.700", "gray.800")}
              fontWeight={500}
              fontFamily={"body"}
              _hover={{
                textTransform: "UPPERCASE",
                variant: "ghost",
                textColor: "white",
              }}
            >
              NFT Marketplace
            </Heading>
            <Text
              color={useColorModeValue("cyan.700", "gray.800")}
              as="a"
              href="https://figandgrape.io"
              _hover={{
                textTransform: "UPPERCASE",
                variant: "ghost",
                textColor: useColorModeValue("blue.700", "gray.800"),
              }}
            >
              Powered by Fig &amp; Grape
              <Button as='a' href='https://twitter.com/figandgrapeio' target='_blank' px={2} size={'2xl'} color={useColorModeValue("blue.300", "gray.800")}  variant={'link'}><BsPatchCheckFill /></Button>
            </Text>
          </Stack>

          <Stack direction={"row"} justify={"center"} spacing={6}>
            <Stack spacing={0} align={"center"}>
              <Text
                color={useColorModeValue("cyan.700", "gray.800")}
                fontWeight={600}
              >
                23k
              </Text>
              <Text
                color={useColorModeValue("cyan.700", "gray.800")}
                fontSize={"sm"}
              >
                Followers
              </Text>
            </Stack>
            <Stack spacing={0} align={"center"}>
              <Text
                color={useColorModeValue("cyan.700", "gray.800")}
                fontWeight={600}
              >
                23k
              </Text>
              <Text
                fontSize={"sm"}
                color={useColorModeValue("cyan.700", "gray.800")}
              >
                Followers
              </Text>
            </Stack>
          </Stack>

          <Button
            as="a"
            w={"full"}
            mt={8}
            bg={useColorModeValue("#151f21", "gray.900")}
            color={"white"}
            rounded={"md"}
            href="https://www.linkedin.com/company/fig-and-grape"
            target='_blank'
            _hover={{
              // transform: 'translateY(-2px)',
              variant: "ghost",
              textColor: "white",
              bgColor: "purple.800",
            }}
          >
            Follow us &nbsp;
            <BsLinkedin />
          </Button>
        </Box>
      </Box>
    </Center>
  );
}
