import { useRouter } from "next/router";
import { Spinner, Box, Tabs, HStack } from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import { productQuery } from "lib/queries";
import { ProductsGrid } from "components/products_grid";
import { ProductPanel } from "components/product-panel";
import { Product } from "src/types";
import { Navbar } from "components/navbar";

///
const ProductPage = () => {
  const router = useRouter();

  const { loading, error, data } = useQuery<{ product: Product }>(
    productQuery,
    {
      variables: { productId: router.query.id },
    }
  );

  return (
    <HStack flexDir="column" align="stretch" experimental_spaceY="5">
      <Tabs>
        <Navbar />
        <Box px="10" py="5" experimental_spaceY="5">
          {loading ? (
            <Spinner />
          ) : (
            <ProductPanel product={data!.product}></ProductPanel>
          )}
          <ProductsGrid />
        </Box>
      </Tabs>
    </HStack>
  );
};
export default ProductPage;
