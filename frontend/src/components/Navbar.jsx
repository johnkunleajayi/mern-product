import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  IconButton,
  Box,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const bgColor = useColorModeValue("white", "gray.800"); // Light/dark background for Navbar
  const textColor = useColorModeValue("red.600", "red.300");  // Adjust text color based on mode
  const buttonBg = useColorModeValue("red.500", "red.400"); // Button background color for light/dark modes

  return (
    <Box bg={bgColor} shadow="md" py={4}>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          {/* Navbar Title */}
          <Text
            fontSize={{ base: "24px", sm: "30px" }}
            fontWeight={"bold"}
            color={textColor}
            textAlign={"center"}
          >
            <Link to={"/"}>SoftStore 🛒</Link>
          </Text>

          {/* Action Buttons */}
          <HStack spacing={4} alignItems={"center"} mt={{ base: 4, sm: 0 }}>
            {/* Add Product Button */}
            <Link to={"/create"}>
              <Button
                bg={buttonBg}
                color="white"
                _hover={{ bg: isDark ? "red.500" : "red.600" }}
                size="lg"
                px={6}
                rounded="full"
                shadow="md"
              >
                <PlusSquareIcon fontSize={20} mr={2} />
                Add To Store
              </Button>
            </Link>

            {/* Toggle Light/Dark Mode Button */}
            <IconButton
              onClick={toggleColorMode}
              icon={isDark ? <LuSun size="20" /> : <IoMoon size="20" />}
              aria-label="Toggle color mode"
              bg={isDark ? "red.400" : "red.500"}
              color="white"
              _hover={{ bg: isDark ? "red.500" : "red.600" }}
              rounded="full"
              shadow="md"
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
