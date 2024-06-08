import React, { useState } from "react";
import { Box, Container, VStack, HStack, Text, Input, Button, Avatar, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "You" }]);
      setInput("");
    }
  };

  return (
    <Container maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%" height="100%">
        <Box bg="gray.100" width="100%" height="80%" borderRadius="md" overflowY="auto" p={4}>
          {messages.map((message, index) => (
            <HStack key={index} spacing={4} alignItems="flex-start" mb={4}>
              <Avatar name={message.sender} />
              <VStack alignItems="flex-start">
                <Text fontWeight="bold">{message.sender}</Text>
                <Text>{message.text}</Text>
              </VStack>
            </HStack>
          ))}
        </Box>
        <HStack width="100%">
          <Input placeholder="Type a message..." value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === "Enter" && handleSendMessage()} />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} onClick={handleSendMessage} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
