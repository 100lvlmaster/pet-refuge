import { Flex, Text, Box, Image } from "@chakra-ui/react";
import NextLink from "next/link";
const AuthPageContainer = ({ children }: any) => {
  return (
    <Flex flexDir="row" align="stretch" h="100vh" w="100vw">
      <Flex flex="1" align="center" placeContent="center" flexDir="column">
        <NextLink href="/">
          <a>
            <Image src="favicon.png" alt="paw_print.png" />
          </a>
        </NextLink>
        {children}
      </Flex>
      <Flex
        flex="1"
        bg="black"
        align="center"
        placeContent="center"
        textColor="white"
        flexDir="column"
        experimental_spaceY="20"
      >
        <Image
          height="50px"
          width="50px"
          src="paw_print.png"
          alt="paw_print.png"
        />
        <Text fontSize="15" fontStyle="italic" fontWeight="bold">
          Supplies for your pets.
        </Text>
      </Flex>
    </Flex>
  );
};
export default AuthPageContainer;
