import {
  Spinner,
  Text,
  Image,
  VStack,
  Button,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { Product } from "src/types";
import { useMutation } from "@apollo/client";
import { createCartMutation, signInMutation } from "lib/mutations";
export const ProductPanel = ({ product }: { product: Product }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const handleImageClick = (i: number) => setImageIndex(i);
  const toast = useToast();
  const [addToCart] = useMutation(createCartMutation, {
    onCompleted: async (data) => {
      toast({
        title: "Product added to cart successfully",
        description: "",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
    },
    onError: (err) => {
      if (`${err.message}`.toLowerCase().includes("bad request")) {
        err.message = `Invalid input, please check input and try again`;
      }
      toast({
        title: "Something went wrong",
        description: err.message,
        status: "error",
        duration: 6000,
        isClosable: true,
      });
    },
  });
  return (
    <VStack>
      <HStack flexDirection="row" experimental_spaceX="10">
        <VStack w="36">
          {product.mediaUrl.map((e, i) => (
            <Image
              borderRadius="sm"
              onClick={() => handleImageClick(i)}
              key={i}
              src={e}
              alt={e}
            ></Image>
          ))}
        </VStack>
        <Image
          borderRadius="md"
          height="10rem"
          src={product.mediaUrl[imageIndex]}
          alt={product.mediaUrl[imageIndex]}
        />
        <VStack align="start">
          <Text fontSize="lg" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="xs">{product.description}.</Text>
          <HStack>
            <Text>Price: </Text>
            <Text textColor="green" fontWeight="bold">
              {product.price} ₹
            </Text>
            <Button
              spinner={<Spinner />}
              bgColor="black"
              textColor="white"
              borderWidth={1}
              _hover={{
                bg: "white",
                textColor: "black",
                borderColor: "black",
              }}
            >
              Buy
            </Button>
          </HStack>
          <HStack>
            <Text>Discount: </Text>
            <Text textColor="red" fontWeight="bold">
              {product.discount}%
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
