import { Flex, Text, Box } from "@chakra-ui/react";

const AuthPageContainer = ({ children }: any) => {
  return (
    <Flex flexDir="row" align="stretch" h="100vh" w="100vw">
      <Flex flex="1" align="center" placeContent="center">
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
        <Text fontSize="30" fontWeight="bold">
          Supplies for your pets
        </Text>
      </Flex>
    </Flex>
  );
};
export default AuthPageContainer;
