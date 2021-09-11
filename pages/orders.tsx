import { Text, VStack, HStack } from "@chakra-ui/react";
import { Navbar } from "components/navbar";
const OrdersPage = () => {
  return (
    <VStack w="full">
      <Navbar showTabs={false} />
      <Text>Orders Page</Text>;
    </VStack>
  );
};

export default OrdersPage;
