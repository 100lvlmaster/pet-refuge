import { useQuery } from "@apollo/client";
import { storesQuery } from "lib/queries";
import { Store } from "lib/types";
import { Spinner, Box, SimpleGrid, Text } from "@chakra-ui/react";

export const StoresGrid = () => {
  const { loading, error, data } = useQuery<{ stores: Store[] }>(storesQuery);
  if (loading && !data) {
    return <Spinner />;
  }
  return (
    <SimpleGrid
      w="full"
      h="full"
      columns={{ base: 2, md: 3, lg: 5 }}
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
          <Box>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15 4.902l-.939-4.902h1.943l2.994 5.002v1.098c0 1.067-.932 1.9-1.998 1.9s-2-.933-2-2v-1.098zm-3 3.098c1.066 0 2-.936 2-2.002v-1.098l-1.047-4.9h-1.906l-1.047 4.902v1.098c0 1.067.934 2 2 2zm8-2c0 1.067.934 2 2 2s2-.865 2-1.932v-1.097l-4.873-4.971h-2.014l2.887 4.902v1.098zm-7 13.5l.025-.5h-10.025v-7h18v1.181c.721.171 1.395.459 2 .848v-4.029h-22v14h13.816c-1.123-1.168-1.816-2.752-1.816-4.5zm-9-13.432v-1.097l2.887-4.971h-2.014l-4.873 4.971v1.098c0 1.066.934 1.931 2 1.931s2-.865 2-1.932zm1 0c0 1.067.934 1.932 2 1.932s2-.865 2-1.932v-1.097l.939-4.971h-1.943l-2.996 4.971v1.097zm19 13.432c0 2.485-2.016 4.5-4.5 4.5-2.486 0-4.5-2.015-4.5-4.5s2.014-4.5 4.5-4.5c2.484 0 4.5 2.015 4.5 4.5zm-2.156-.882l-.697-.696-2.115 2.169-.992-.94-.695.697 1.688 1.637 2.811-2.867z" />
            </svg>
          </Box>
          <Text fontSize="15" fontWeight="bold">
            {e.name}
          </Text>
          <Text fontSize="12">{e.description}</Text>
          <Text fontSize="10" fontWeight="bold">
            {e.address}
          </Text>
        </Box>
      ))}
    </SimpleGrid>
  );
};
