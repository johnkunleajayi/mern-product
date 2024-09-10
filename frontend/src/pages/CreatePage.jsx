import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  const bgColor = useColorModeValue("white", "gray.800");
  const inputBg = useColorModeValue("gray.50", "gray.700");
  const buttonBg = useColorModeValue("blue.500", "orange.400");
  const buttonHoverBg = useColorModeValue("blue.600", "orange.500");

  return (
    <Container maxW="container.sm" py={8}>
      <VStack spacing={8}>
        {/* Page Heading */}
        <Heading
          as="h1"
          size="2xl"
          textAlign="center"
          mb={8}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          Create New Product
        </Heading>

        {/* Product Creation Form */}
        <Box
          w="full"
          bg={bgColor}
          p={8}
          rounded="lg"
          shadow="lg"
          transition="all 0.3s"
          _hover={{ shadow: "xl" }}
        >
          <VStack spacing={6}>
            {/* Product Name Input */}
            <Input
              bg={inputBg}
              placeholder="Product Name"
              size="lg"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }}
            />

            {/* Price Input */}
            <Input
              bg={inputBg}
              placeholder="Price"
              size="lg"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }}
            />

            {/* Image URL Input */}
            <Input
              bg={inputBg}
              placeholder="Image URL"
              size="lg"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              _placeholder={{ color: useColorModeValue("gray.500", "gray.300") }}
            />

            {/* Submit Button */}
            <Button
              w="full"
              bg={buttonBg}
              color="white"
              size="lg"
              shadow="md"
              _hover={{ bg: buttonHoverBg }}
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
