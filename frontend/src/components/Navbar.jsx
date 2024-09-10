import { Button, Container, Flex, HStack, Text, useColorMode, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
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
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          color={isDark ? "white" : "black"}  // Text color changes based on light/dark mode
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        {/* Action Buttons */}
        <HStack spacing={2} alignItems={"center"}>
          {/* Add Product Button */}
          <Link to={"/create"}>
            <Button
              bg="orange.400"  // Orange background
              color="white"
              _hover={{ bg: "orange.500" }}  // Darker orange on hover
            >
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>

          {/* Toggle Light/Dark Mode Button */}
          <IconButton
            onClick={toggleColorMode}
            icon={colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
            aria-label="Toggle color mode"
            bg="blue.500"  // Blue background for toggle button
            color="white"
            _hover={{ bg: "blue.600" }}  // Darker blue on hover
          />
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
