import { ApolloError, useQuery } from "@apollo/client";
import {
  Badge,
  Text,
  VStack,
  HStack,
  Spinner,
  Center,
  Image,
} from "@chakra-ui/react";
import { Navbar } from "components/navbar";
import { userStore } from "lib/auth";
import { ordersByUser } from "lib/queries";
import { Order } from "src/generated/graphql";
import NextLink from "next/link";
const OrdersPage = () => {
  const user = userStore((state) => state.token?.user);
  const { data, loading, error } = useQuery<{ orders: Order[] }>(ordersByUser, {
    skip: typeof user?.id === `undefined`,
    variables: { userId: user?.id },
    onError: (err: ApolloError) => {
      console.log(err);
    },
  });
  return (
    <VStack w="full">
      <Navbar showTabs={false} />
      <Text
        px="10"
        fontWeight="black"
        fontSize="2xl"
        alignSelf="start"
        textAlign="left"
      >
        Your orders
      </Text>
      ;
      {loading ? (
        <Center>
          <Spinner />
        </Center>
      ) : error ? (
        <Center>
          <Text>Could not fetch orders.</Text>
        </Center>
      ) : (
        <VStack p="5">
          {data?.orders.map((e) => (
            <NextLink href={`/product/${e.productId}`} key={e.id}>
              <a>
                <HStack
                  w="full"
                  experimental_spaceX="5"
                  p="5"
                  borderRadius="md"
                >
                  <Image
                    fit="cover"
                    borderRadius="md"
                    height="40"
                    src={e.product.mediaUrl[0]}
                    alt={`productImage${e.id}.png`}
                  />
                  <VStack
                    fontSize={{ base: "xs" }}
                    textAlign="left"
                    align="stretch"
                    fontWeight="bold"
                  >
                    <Text>{e.product.name}</Text>
                    <Text fontWeight="normal" fontSize={{ base: "xs" }}>
                      {e.product.description}
                    </Text>
                    <HStack>
                      <Text textColor="green">Price: {e.product.price}₹</Text>
                      <Badge>{e.status}</Badge>
                    </HStack>
                    <Text textColor="red">Discount: {e.product.discount}%</Text>
                    <Text>Quantity: {e.quantity}</Text>
                  </VStack>
                  <VStack></VStack>
                </HStack>
              </a>
            </NextLink>
          ))}
        </VStack>
      )}
    </VStack>
  );
};

export default OrdersPage;
