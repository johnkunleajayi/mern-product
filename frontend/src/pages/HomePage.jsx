import {
  Container,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        {/* Page Title */}
        <Text
          fontSize={{ base: "28px", md: "36px" }}
          fontWeight="bold"
          bgGradient="linear(to-r, orange.400, blue.500)"
          bgClip="text"
          textAlign="center"
        >
          Current Products 🚀
        </Text>

        {/* Product Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={10}
          w="full"
          minH="300px"
        >
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <Text
              fontSize="xl"
              textAlign="center"
              fontWeight="bold"
              color={useColorModeValue("gray.500", "gray.300")}
            >
              No products found 😢{" "}
              <Link to="/create">
                <Text
                  as="span"
                  color={useColorModeValue("blue.500", "orange.400")}
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a product
                </Text>
              </Link>
            </Text>
          )}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage;
