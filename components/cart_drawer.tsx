import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  useToast,
  Text,
} from "@chakra-ui/react";

import { useQuery } from "@apollo/client";
import { userCartQuery } from "lib/queries";
import { userStore } from "lib/auth";
import { Cart } from "src/generated/graphql";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const CartDrawer = ({ isOpen, onClose }: Props) => {
  const token = userStore((state) => state.token);
  const toast = useToast();
  ///
  const { data }: { data?: { userCart: Cart[] } } = useQuery(userCartQuery, {
    skip: typeof token === "undefined",
    variables: {
      userId: token?.user?.id,
    },
    onCompleted: async (data) => {
      console.log(data.userCart);
    },
    onError: (err) => {
      console.log(err);
      if (`${err.message}`.toLowerCase().includes("bad request")) {
        err.message = `Could not get cart items`;
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
  ///
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Cart</DrawerHeader>

        <DrawerBody>
          {data?.userCart ? (
            <Text>Cart is empty</Text>
          ) : (
            data?.userCart.map((e) => <Text key={e.id}>{e.product.name}</Text>)
          )}
        </DrawerBody>

        <DrawerFooter>
          <Button colorScheme="blue" textColor="white">
            Checkout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            </svg>
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
