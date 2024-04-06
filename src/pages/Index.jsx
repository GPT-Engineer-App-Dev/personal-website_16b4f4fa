import React from "react";
import { Box, Container, VStack, Heading, Text, Button, Image, Flex, Link, Icon, Spacer } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

const Index = () => {
  const socialLinks = {
    twitter: "https://twitter.com/famous_person",
    linkedin: "https://linkedin.com/in/famous_person",
    email: "mailto:famous_person@example.com",
    github: "https://github.com/famous_person",
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8} alignItems="flex-start">
        <Flex w="full" alignItems="center">
          <Box>
            <Heading as="h1" size="2xl" mb={2}>
              Famous Person
            </Heading>
            <Text fontSize="xl" color="gray.500">
              Innovator, Thought Leader, Tech Enthusiast
            </Text>
          </Box>
          <Spacer />
          <Image borderRadius="full" boxSize="100px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYW1vdXMlMjBwZXJzb24lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzODM4MDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Famous Person Portrait" />
        </Flex>

        <Text fontSize="lg">With a career spanning over two decades, Famous Person has left an indelible mark on the world of technology and innovation. This website is a glimpse into the work, thoughts, and life of an influential figure who continues to inspire many.</Text>

        <Flex gap={4}>
          <Link href={socialLinks.twitter} isExternal>
            <Button leftIcon={<Icon as={FaTwitter} />} colorScheme="twitter">
              Twitter
            </Button>
          </Link>
          <Link href={socialLinks.linkedin} isExternal>
            <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="linkedin">
              LinkedIn
            </Button>
          </Link>
          <Link href={socialLinks.email}>
            <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="teal">
              Email
            </Button>
          </Link>
          <Link href={socialLinks.github} isExternal>
            <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray">
              GitHub
            </Button>
          </Link>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
