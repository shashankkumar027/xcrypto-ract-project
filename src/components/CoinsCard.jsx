import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const CoinsCard = ({
  name,
  id,
  image,
  symbol,
  price,
  change = "no change.",
  currencySymbol = "₹",
}) => {
  return (
    <Link to={`/coin/${id}`}>
      <VStack
        w={"52"}
        shadow={"lg"}
        p={"8"}
        borderRadius={"lg"}
        transition={"all 0.3s"}
        m={"4"}
        css={{
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Image
          src={image}
          w={"10"}
          h={"10"} 
          objectFit={"contain"}
          alt={symbol}
        />
        <Heading size={"md"} noOfLines={"1"}>
          {symbol}
        </Heading>
        <Text>{name}</Text>
        <Text noOfLines={1}>
          Price: {price ? `${currencySymbol} ${price}` : "NA"}
        </Text>
        <Text>change in 24 hrs: {Math.ceil(change)} </Text>
      </VStack>
    </Link>
  ); 
};

export default CoinsCard;
