import type { NextPage } from "next";
import Head from "next/head";
import {
  Flex,
  Spacer,
  Image,
  Tabs,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Button,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ProductsGrid } from "components/products_grid";
import { CategoriesGrid } from "components/categories_grid";
import { StoresGrid } from "components/stores_grid";
import { CartDrawer } from "components/cart_drawer";
///
const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <main>
      <Head>
        <title>Home - Products</title>
      </Head>
      <Tabs flexDir="row" w="ful">
        <Flex
          position="sticky"
          top="0"
          bg="white"
          flexDir="row"
          align="center"
          experimental_spaceX="5"
          p="5"
        >
          <NextLink href="/">
            <Image src="favicon.png" alt="logo.png"></Image>
          </NextLink>
          <Input placeholder="Search .." />
          <TabList>
            <Tab id="tab-products">Products</Tab>
            <Tab id="tab-categories">Categories</Tab>
            <Tab id="tab-stores">Stores</Tab>
          </TabList>
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
        <TabPanels id="panels">
          <TabPanel id="products">
            <ProductsGrid />
          </TabPanel>
          <TabPanel id="categories">
            <CategoriesGrid />
          </TabPanel>
          <TabPanel id="stores">
            <StoresGrid />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <CartDrawer isOpen={isOpen} onClose={onClose} />
    </main>
  );
  1;
};

export default Home;
