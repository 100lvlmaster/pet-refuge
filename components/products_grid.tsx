import { useQuery } from "@apollo/client";
import { productsQuery } from "lib/queries";
import { Product } from "lib/types";
import { Spinner, Image, Box, Grid, Text } from "@chakra-ui/react";
import NextLink from "next/link";
export const ProductsGrid = () => {
  const { loading, error, data } =
    useQuery<{ products: Product[] }>(productsQuery);
  if (loading && !data) {
    return <Spinner />;
  }
  return (
    <Grid
      w="full"
      h="full"
      templateColumns="repeat(5, 1fr)"
      gap="5"
      alignContent="center"
      placeContent="center"
    >
      {data?.products.map((e, i) => (
        <NextLink key={i} href={`product/${e.id}`} replace passHref>
          <a>
            <Box border="1px" borderRadius="5" borderColor="gray.300">
              <Image
                fit="fill"
                src={e.mediaUrl[0]}
                height="200px"
                alt={e.mediaUrl[0]}
              />
              <Text p="1" fontSize="10" fontWeight="bold">
                {e.price.toString().concat("\t₹")}
              </Text>
              <Text p="1" fontSize="12">
                {e.name}
              </Text>
            </Box>
          </a>
        </NextLink>
      ))}
    </Grid>
  );
};
