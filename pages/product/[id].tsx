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
import { ProductsGrid } from "components/products_grid";
import { ProductPanel } from "components/product-panel";
import { CartDrawer } from "components/cart_drawer";
import NextLink from "next/link";
import { Product } from "src/types";

///
const ProductPage = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery<{ product: Product }>(
    productQuery,
    {
      variables: { productId: router.query.id },
    }
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack flexDir="column" align="stretch" experimental_spaceY="5">
      <ProductNavbar onOpenCart={onOpen} />
      <Box px="10" py="5" experimental_spaceY="5">
        {loading ? (
          <Spinner />
        ) : (
          <ProductPanel product={data!.product}></ProductPanel>
        )}
        <ProductsGrid />
        <CartDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </HStack>
  );
};
export default ProductPage;

const ProductNavbar = ({ onOpenCart }: { onOpenCart: () => void }) => {
  return (
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
      <a onClick={onOpenCart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
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
  );
};
