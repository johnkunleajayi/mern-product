import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  // Define colors based on color mode
  const bgColor = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("red.600", "red.300"); // Red for text color

  return (
    <Box minH="100vh" bg={bgColor} color={textColor}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
