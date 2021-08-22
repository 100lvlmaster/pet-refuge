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
} from "@chakra-ui/react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export const CartDrawer = ({ isOpen, onClose }: Props) => (
  <Drawer
    isOpen={isOpen}
    placement="right"
    onClose={onClose}
    // finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Cart</DrawerHeader>

      <DrawerBody>
        <Input placeholder="Type here..." />
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
