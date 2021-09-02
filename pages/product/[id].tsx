import { useRouter } from "next/router";
import {
  Spinner,
  Flex,
  Box,
  Text,
  Image,
  VStack,
  useDisclosure,
  Spacer,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { productQuery } from "lib/queries";
import { Product } from "lib/types";
import { ProductsGrid } from "components/products_grid";
import { useState } from "react";
import { CartDrawer } from "components/cart_drawer";
import NextLink from "next/link";
///
const ProductPage = () => {
  const router = useRouter();
  const [imageIndex, setImageIndex] = useState(0);
  const { loading, error, data } = useQuery<{ product: Product }>(
    productQuery,
    {
      variables: { productId: router.query.id },
    }
  );

  const handleImageClick = (i: number) => setImageIndex(i);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDir="column" align="stretch" experimental_spaceY="5">
      <Flex
        position="sticky"
        top="0"
        bg="black"
        flexDir="row"
        align="center"
        w="full"
        textColor="white"
        experimental_spaceX="5"
        p="3"
      >
        <NextLink href="/">
          <Image src="/favicon.png" alt="logo.png"></Image>
        </NextLink>
        <Input placeholder="Search .." />
        {/* <TabList>
          <Tab id="tab-products">Products</Tab>
          <Tab id="tab-categories">Categories</Tab>
          <Tab id="tab-stores">Stores</Tab>
        </TabList> */}
        <Spacer />
        <a onClick={onOpen}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
        </a>

        <NextLink href="/signin">
          <Button border="1px" borderColor="black" variant="outline">
            Sign In
          </Button>
        </NextLink>
      </Flex>
      <Box px="10" py="5" experimental_spaceY="5">
        {loading ? (
          <Spinner />
        ) : (
          <Flex flexDirection="row" experimental_spaceX="10">
            <VStack w="36">
              {data?.product.mediaUrl.map((e, i) => (
                <Image
                  onClick={() => handleImageClick(i)}
                  key={i}
                  src={e}
                  alt={e}
                ></Image>
              ))}
            </VStack>
            <Image
              height="10rem"
              src={data?.product.mediaUrl[imageIndex]}
              alt={data?.product.mediaUrl[imageIndex]}
            />
            <VStack align="start">
              <Text fontSize="lg" fontWeight="bold">
                {data?.product.name}
              </Text>
              <Text>{data?.product.description}.</Text>
              <HStack>
                <Text>Price: </Text>
                <Text textColor="green" fontWeight="bold">
                  {data?.product.price} ₹
                </Text>
              </HStack>
              <HStack>
                <Text>Discount: </Text>
                <Text textColor="red" fontWeight="bold">
                  {data?.product.discount}%
                </Text>
              </HStack>
            </VStack>
          </Flex>
        )}
        <ProductsGrid />
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </Flex>
  );
};
export default ProductPage;
