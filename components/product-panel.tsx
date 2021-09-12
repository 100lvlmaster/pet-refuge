import {
  Spinner,
  Text,
  Image,
  VStack,
  Button,
  HStack,
  useToast,
  ButtonGroup,
  IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Product } from "src/types";
import { useMutation } from "@apollo/client";
import { createOrderMutation } from "lib/mutations";
import { CreateOrderInput, Order } from "src/generated/graphql";
import { userStore } from "lib/auth";
export const ProductPanel = ({ product }: { product: Product }) => {
  const toast = useToast();
  const user = userStore((state) => state.token?.user);
  AddIcon;
  const [imageIndex, setImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  ///
  const [addOrder, { data, loading }] = useMutation<{ order: Order }>(
    createOrderMutation,
    {
      onCompleted: async (data) => {
        toast({
          title: "Order was created successfully.",
          description: "",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
      },
      onError: (err) => {
        if (`${err.message}`.toLowerCase().includes("bad request")) {
          err.message = `Could not place order.`;
        }
        toast({
          title: "Something went wrong",
          description: err.message,
          status: "error",
          duration: 6000,
          isClosable: true,
        });
      },
    }
  );
  const handleImageClick = (i: number) => setImageIndex(i);
  const onChangeQuantity = (value: number) => {
    setQuantity(value);
  };
  const onClickHandler = () => {
    const orderInput: CreateOrderInput = {
      productId: product.id,
      userId: user?.id!,
      quantity: quantity,
    };
    addOrder({ variables: { orderInput } });
  };
  return (
    <VStack>
      <HStack flexDirection="row" experimental_spaceX="10">
        <VStack w={"36"}>
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
        <VStack fontSize="xs" align="start">
          <HStack fontSize="lg" fontWeight="bold">
            <HStack>
              <Text>Price: </Text>
              <Text textColor="green" fontWeight="bold">
                {product.price} ₹
              </Text>
            </HStack>
            <HStack>
              <Text>Discount: </Text>
              <Text textColor="red" fontWeight="bold">
                {product.discount}%
              </Text>
            </HStack>
          </HStack>
          <Text fontSize="md" fontWeight="bold">
            {product.name}
          </Text>
          <Text fontSize="xs">{product.description}.</Text>
          <HStack experimental_spaceX="10">
            <Button
              spinner={<Spinner />}
              isLoading={loading}
              onClick={onClickHandler}
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
            <ButtonGroup size="sm" isAttached variant="outline">
              <IconButton
                onClick={() =>
                  quantity > 1 ? onChangeQuantity(quantity - 1) : null
                }
                aria-label="Minus quantity"
                icon={<AddIcon />}
              />
              <Button mr="-px">{quantity}</Button>
              <IconButton
                onClick={() =>
                  quantity < 5 ? onChangeQuantity(quantity + 1) : null
                }
                aria-label="Add quantity"
                icon={<AddIcon />}
              />
            </ButtonGroup>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};
