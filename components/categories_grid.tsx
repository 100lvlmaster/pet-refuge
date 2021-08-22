import { useQuery } from "@apollo/client";
import { categoriesQuery } from "lib/queries";
import { Category } from "lib/types";
import { Spinner, Image, Box, Grid, Text } from "@chakra-ui/react";
export const CategoriesGrid = () => {
  const { loading, error, data } =
    useQuery<{ categories: Category[] }>(categoriesQuery);
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
      {data?.categories.map((e, i) => (
        <Box key={i} border="1px" borderRadius="5" borderColor="gray.300">
          <Image
            fit="fill"
            src={e.mediaUrl[1]}
            height="200px"
            alt={e.mediaUrl[1]}
          />
          <Text p="1" fontSize="14" fontWeight="bold">
            {e.name}
          </Text>{" "}
          <Text p="1" fontSize="12" textColor="gray.600">
            {e.description}
          </Text>
        </Box>
      ))}
    </Grid>
  );
};
