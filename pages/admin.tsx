import {
  Flex,
  Text,
  MenuList,
  MenuItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Image,
  Box,
  Spacer,
} from "@chakra-ui/react";
import NextLink from "next/link";
const AdminPage = () => {
  return (
    <Flex
      flexDir="column"
      w="full"
      minH="100vh"
      align="stretch"
      alignItems="stretch"
    >
      <Flex
        position="sticky"
        top="0"
        bg="black"
        flexDir="row"
        align="center"
        w="full"
        experimental_spaceX="5"
        p="5"
        textColor="white"
      >
        <NextLink href="/">
          <Image src="favicon.png" alt="logo.png"></Image>
        </NextLink>
        <Text>Admin Home</Text>
        <Spacer></Spacer>
      </Flex>
      <Flex flexDir="row" h="full" alignItems="stretch" w="full">
        <Flex
          bgColor="teal"
          h="full"
          flexDir="column"
          p="5"
          fontSize="xl"
          textColor="white"
        >
          <HeaderText>Products</HeaderText>
          <SubHeaderText>Create</SubHeaderText>
          <SubHeaderText>Edit</SubHeaderText>
          <HeaderText>Edit</HeaderText>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
          <Text>Products</Text>
        </Flex>
        <Flex flex="1" flexDir="column"></Flex>
      </Flex>
    </Flex>
  );
};
export default AdminPage;

const HeaderText = ({ children }: any): JSX.Element => {
  return <Text>{children}</Text>;
};
const SubHeaderText = ({ children }: any): JSX.Element => {
  return <Text px="5">{children}</Text>;
};
