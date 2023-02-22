import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import img from "../assets/linkedin_profile_Pic.jfif";

const footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.800"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the Asia's leading crypto trader and ranked 1st in India's
            trade market, we provide our guidance and market update's at very
            reasonable price.
          </Text>
        </VStack>
        <VStack>
          <a
            href="https://www.linkedin.com/in/shashankkumar27/"
            target={"blank"}
          >
            <Avatar boxSize={"28"} mt={["4", "0"]} src={img} />
          </a>

          <Text>
            <a
              href="https://www.linkedin.com/in/shashankkumar27/"
              target={"blank"}
            >
              Shashank
            </a>
          </Text>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default footer;
