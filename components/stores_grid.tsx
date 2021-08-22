import { useQuery } from "@apollo/client";
import { storesQuery } from "lib/queries";
import { Store } from "lib/types";
import { Spinner, Image, Box, Grid, Text } from "@chakra-ui/react";

export const StoresGrid = () => {
  const { loading, error, data } = useQuery<{ stores: Store[] }>(storesQuery);
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
      px="10"
    >
      {data?.stores.map((e, i) => (
        <Box
          key={i}
          border="1px"
          borderRadius="5"
          borderColor="gray.300"
          experimental_spaceY="2"
          px="5"
          py="2"
        >
          <Text fontSize="15" fontWeight="bold">
            {e.name}
          </Text>
          <Text fontSize="12">{e.description}</Text>
          <Text fontSize="10" fontWeight="bold">
            {e.address}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};
