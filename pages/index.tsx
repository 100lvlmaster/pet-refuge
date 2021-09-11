import type { NextPage } from "next";
import Head from "next/head";
import { Tabs, TabPanel, TabPanels, useDisclosure } from "@chakra-ui/react";
import { ProductsGrid } from "components/products_grid";
import { CategoriesGrid } from "components/categories_grid";
import { StoresGrid } from "components/stores_grid";
import { userStore } from "lib/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Navbar } from "components/navbar";
///
const Home: NextPage = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [initStore, token, clearToken] = userStore((state) => [
    state.initToken,
    state.token,
    state.clearToken,
  ]);
  useEffect(() => {
    initStore();
  }, []);

  return (
    <main>
      <Head>
        <title>Home - Products</title>
      </Head>
      <Tabs flexDir="row" w="ful">
        <Navbar />
        <TabPanels>
          <TabPanel>
            <ProductsGrid />
          </TabPanel>
          <TabPanel>
            <CategoriesGrid />
          </TabPanel>
          <TabPanel>
            <StoresGrid />
          </TabPanel>
        </TabPanels>
      </Tabs>
      {/* <CartDrawer isOpen={isOpen} onClose={onClose} /> */}
    </main>
  );
  1;
};

export default Home;
