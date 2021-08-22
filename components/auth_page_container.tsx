import { Flex, Text, Box } from "@chakra-ui/react";

const AuthPageContainer = ({ children }: any) => {
  return (
    <Flex flexDir="row" align="stretch" h="100vh" w="100vw">
      <Flex flex="1" align="center" placeContent="center" flexDir="column">
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
        <img
          height="50px"
          width="50px"
          src="http://localhost:3000/paw_print.png"
        />
        <Text fontSize="15" fontWeight="bold">
          Supplies for your pets.
        </Text>
      </Flex>
    </Flex>
  );
};
export default AuthPageContainer;
