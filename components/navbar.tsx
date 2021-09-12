import NextLink from "next/link";
import {
  Tab,
  TabList,
  Flex,
  Box,
  Menu,
  Text,
  MenuButton,
  Avatar,
  Button,
  MenuItem,
  MenuList,
  Input,
  HStack,
} from "@chakra-ui/react";
import { userStore, ordersStore } from "lib/auth";
import { useEffect } from "react";
import { ApolloError, useQuery } from "@apollo/client";
import { Order } from "src/generated/graphql";
import { ordersByUser } from "lib/queries";
///
interface Props {
  showTabs?: boolean;
}
export const Navbar = ({ showTabs = true }: Props) => {
  const onSignOut = () => clearToken();

  ///
  const [token, clearToken, initStore] = userStore((state) => [
    state.token,
    state.clearToken,
    state.initToken,
  ]);

  const { data, loading, error } = useQuery<{ orders: Order[] }>(ordersByUser, {
    skip: typeof token?.user?.id === `undefined`,
    variables: { userId: token?.user?.id },
    onError: (err: ApolloError) => {},
  });
  useEffect(() => {
    initStore();
  }, []);
  ///
  return (
    <Flex
      // position="sticky"
      top="0"
      bg="white"
      w="full"
      flexDir="row"
      align="center"
      experimental_spaceX="5"
      p="5"
    >
      <NextLink href="/">
        <Box bgColor="black" borderRadius="full">
          <Box padding="2">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M11.954 11c3.33 0 7.057 6.123 7.632 8.716.575 2.594-.996 4.729-3.484 4.112-1.092-.271-3.252-1.307-4.102-1.291-.925.016-2.379.836-3.587 1.252-2.657.916-4.717-1.283-4.01-4.073.774-3.051 4.48-8.716 7.551-8.716zm10.793-4.39c1.188.539 1.629 2.82.894 5.27-.704 2.341-2.33 3.806-4.556 2.796-1.931-.877-2.158-3.178-.894-5.27 1.274-2.107 3.367-3.336 4.556-2.796zm-21.968.706c-1.044.729-1.06 2.996.082 5.215 1.092 2.12 2.913 3.236 4.868 1.87 1.696-1.185 1.504-3.433-.082-5.215-1.596-1.793-3.824-2.599-4.868-1.87zm15.643-7.292c1.323.251 2.321 2.428 2.182 5.062-.134 2.517-1.405 4.382-3.882 3.912-2.149-.407-2.938-2.657-2.181-5.061.761-2.421 2.559-4.164 3.881-3.913zm-10.295.058c-1.268.451-1.92 2.756-1.377 5.337.519 2.467 2.062 4.114 4.437 3.269 2.06-.732 2.494-3.077 1.377-5.336-1.125-2.276-3.169-3.721-4.437-3.27z" />
            </svg>
          </Box>
        </Box>
      </NextLink>
      <Input placeholder="Search .." />
      {showTabs ? (
        <TabList>
          <Tab>Products</Tab>
          <Tab>Stores</Tab>
        </TabList>
      ) : (
        ""
      )}
      <NextLink href="/orders">
        <a
        // onClick={onOpen}
        >
          <HStack>
            <svg
              height="30"
              widths="30"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M6.665 9.068l-3.665-1.66v14l3.665 2.592 14.335-2.155v-14.845l-14.335 2.068zm-1.665 1.441l1 .453v10.118l-1-.707v-9.864zm14 9.615l-11 1.653v-10.881l11-1.587v10.815zm-2-15.833l-.001 1.749c0 .246-.18.455-.423.492-.303.045-.576-.19-.576-.495v-1.746c.001-.691-.231-1.304-.653-1.726-.368-.37-.847-.565-1.384-.565-1.547 0-2.96 1.558-2.963 3.268v1.681c0 .247-.181.457-.425.494-.302.046-.575-.189-.575-.494l.001-1.683c.004-2.261 1.866-4.266 3.962-4.266 1.717 0 3.039 1.387 3.037 3.291zm-9.999 2.209v-2.235c.004-2.26 1.866-4.265 3.962-4.265.492 0 .944.125 1.35.332-.423.17-.822.4-1.188.683l-.162-.015c-1.547 0-2.961 1.558-2.963 3.268v2.232c0 .248-.182.458-.427.494-.3.045-.572-.187-.572-.494z" />
            </svg>
            {data ? <Text fontWeight="bold">{data.orders.length}</Text> : ""}
          </HStack>
        </a>
      </NextLink>
      {token ? (
        <Menu>
          <MenuButton>
            <Avatar
              backgroundColor="black"
              textColor="white"
              name={`${token.user?.firstname}\t${token.user?.lastname}`}
            />
          </MenuButton>
          <MenuList>
            <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
            <NextLink href="/admin">
              <a>
                <MenuItem>Admin</MenuItem>
              </a>
            </NextLink>
          </MenuList>
        </Menu>
      ) : (
        <NextLink href="/signin">
          <Button
            id="nav-bar-sign-in"
            border="1px"
            borderColor="black"
            variant="outline"
            fontSize={{ base: "xs" }}
          >
            Sign In
          </Button>
        </NextLink>
      )}
    </Flex>
  );
};
