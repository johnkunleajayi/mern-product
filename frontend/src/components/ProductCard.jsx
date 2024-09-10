import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  IconButton,
  VStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { useState } from "react";

const PostCard = ({ post }) => {
  const [updatedPost, setUpdatedPost] = useState(post);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");
  const headingColor = useColorModeValue("black", "white");
  const priceColor = useColorModeValue("red.500", "red.300");
  const buttonBg = useColorModeValue("red.500", "red.400");
  const buttonHoverBg = useColorModeValue("red.600", "red.500");

  const handleUpdatePost = () => {
    // Here, you would typically call a function to update the post in the backend.
    // For now, we're just showing a success message.
    toast({
      title: "Post updated.",
      description: "The post was updated successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    onClose();
  };

  const handleDeletePost = () => {
    // Here, you would typically call a function to delete the post from the backend.
    // For now, we're just showing a success message.
    toast({
      title: "Post deleted.",
      description: "The post was deleted successfully.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box
      bg={cardBg}
      shadow="md"
      rounded="lg"
      overflow="hidden"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-8px)", shadow: "lg" }}
    >
      <Image
        src={post.image}
        alt={post.title}
        h={56}
        w="full"
        objectFit="cover"
        transition="all 0.3s"
        _hover={{ opacity: 0.9 }}
      />

      <Box p={5}>
        <Heading
          as="h3"
          size="lg"
          color={headingColor}
          mb={2}
          fontWeight="bold"
        >
          {post.title}
        </Heading>

        <Text fontSize="lg" color={priceColor} fontWeight="bold" mb={4}>
          ${post.price}
        </Text>

        <Text color={textColor} mb={4}>
          {post.description}
        </Text>

        <HStack spacing={4} justify="end">
          {/* Edit Button */}
          <IconButton
            aria-label="Edit Post"
            icon={<EditIcon />}
            onClick={onOpen}
            colorScheme="blue"
          />
          {/* Delete Button */}
          <IconButton
            aria-label="Delete Post"
            icon={<DeleteIcon />}
            onClick={handleDeletePost}
            colorScheme="red"
          />
        </HStack>
      </Box>

      {/* Modal for Editing Post */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text fontSize="lg">Title</Text>
              <Input
                placeholder="Post Title"
                value={updatedPost.title}
                onChange={(e) =>
                  setUpdatedPost({ ...updatedPost, title: e.target.value })
                }
              />
              <Text fontSize="lg">Price</Text>
              <Input
                placeholder="Price"
                type="number"
                value={updatedPost.price}
                onChange={(e) =>
                  setUpdatedPost({ ...updatedPost, price: e.target.value })
                }
              />
              <Text fontSize="lg">Description</Text>
              <Input
                placeholder="Description"
                value={updatedPost.description}
                onChange={(e) =>
                  setUpdatedPost({ ...updatedPost, description: e.target.value })
                }
              />
              <Text fontSize="lg">Image URL</Text>
              <Input
                placeholder="Image URL"
                value={updatedPost.image}
                onChange={(e) =>
                  setUpdatedPost({ ...updatedPost, image: e.target.value })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleUpdatePost}
              bg={buttonBg}
              _hover={{ bg: buttonHoverBg }}
            >
              Save
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PostCard;
