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
          bgGradient="linear(to-r, red.400, red.500)"
          bgClip="text"
          textAlign="center"
          color={useColorModeValue("red.700", "red.300")} // Ensure text color is readable
        >
          Product Catalog
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
              No products in this Catalog.
              <br />
              <Link to="/create">
                <Text
                  as="span"
                  color={useColorModeValue("red.500", "red.400")}
                  _hover={{ color: useColorModeValue("red.600", "red.500") }}
                >
                  Showcase Your Products To The World!
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
