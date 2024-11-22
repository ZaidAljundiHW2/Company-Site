import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { CloseButton } from "@/components/ui/close-button";

interface AboutUsCardProps {
  onClose: () => void;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ onClose }) => {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="black"
      color="white"
      width={["90%", "80%", "70%"]}
      maxHeight="90vh" 
      padding={["20px", "40px", "60px"]}
      borderRadius="12px"
      zIndex="1000"
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.8)"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      {/* Close Button */}
      <CloseButton
        position="absolute"
        top="10px"
        right="10px"
        onClick={onClose}
        size="lg"
      />

      {/* Centered Heading */}
      <Heading
        mb={6}
        fontSize={["xl", "2xl", "3xl"]}
        fontWeight="bold"
        textAlign="center"
      >
        About Vektor Tech
      </Heading>

      {/* Divider */}
      <Box bg="white" width="60%" height="2px" mb={6} />

      {/* Content Columns */}
      <Flex
        direction={["column", "row"]}
        justify="space-between"
        align={["center", "flex-start"]}
        gap={4}
        mb={6}
        width="100%"
      >
        {/* Column: Our Mission */}
        <Box
          flex="1"
          textAlign="center"
          px={[2, 4]}
          mb={[4, 0]}
        >
          <Heading mb={3} fontSize={["md", "lg", "xl"]}>
            Our Mission
          </Heading>
          <Text fontSize={["sm", "md", "lg"]} lineHeight="short">
            Vektor Tech is a young institution specializing in innovative energy
            conservation solutions. With a team of third-year computer science
            students at Heriot-Watt University, we aim to provide smart home
            management and energy optimization platforms.
          </Text>
        </Box>

        {/* Column: Our Values */}
        <Box
          flex="1"
          textAlign="center"
          px={[2, 4]}
          mb={[4, 0]}
        >
          <Heading mb={3} fontSize={["md", "lg", "xl"]}>
            Our Values
          </Heading>
          <Text fontSize={["sm", "md", "lg"]} lineHeight="short">
            At Vektor Tech, we are dedicated to renewable energy. Our team
            develops tailored solutions like "Sukoon" to meet the specific needs
            of clients and drive positive environmental impact.
          </Text>
        </Box>

        {/* Column: Our Vision */}
        <Box
          flex="1"
          textAlign="center"
          px={[2, 4]}
          mb={[4, 0]}
        >
          <Heading mb={3} fontSize={["md", "lg", "xl"]}>
            Our Vision
          </Heading>
          <Text fontSize={["sm", "md", "lg"]} lineHeight="short">
            We aim to integrate cutting-edge technology with energy-efficient
            solutions. Our vision is to create smarter homes for a sustainable
            future and empower individuals to reduce their environmental impact.
          </Text>
        </Box>
      </Flex>

      {/* Final Wide Text Section */}
      <Box textAlign="center" mt={4} px={[2, 4]}>
        <Text fontSize={["sm", "md", "lg"]} lineHeight="short">
          Our pursuit of mastering and applying functional energy management
          systems has led us to "Sukoon" as our flagship product. By combining
          strategic planning and innovative solutions, we provide boutique
          services that help customers achieve energy management goals with
          ease and precision.
        </Text>
      </Box>
    </Box>
  );
};

export default AboutUsCard;
