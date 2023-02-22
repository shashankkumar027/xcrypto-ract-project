import {
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import ErrorComponent from "./ErrorComponent";
import CoinsCard from "./CoinsCard";
import Loader from "./Loader";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);
  const currencySymbol =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };
  const btns = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (Error)
    return (
      <ErrorComponent
        message={"Sorry, Some Error occured while Fetching Coins"}
      />
    );

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Text>Currency : </Text>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => {
              return (
                <CoinsCard
                  key={i.id}
                  name={i.name}
                  image={i.image}
                  id={i.id}
                  symbol={i.symbol}
                  price={i.current_price}
                  change={i.price_change_24h}
                  currencySymbol={currencySymbol}
                />
              );
            })}
          </HStack>
          <HStack w={"full"} overflowX={"auto"} p={"8"}>
            {btns.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.700"}
                color={"white"}
                onClick={() => changePage(index + 1)}
                marginX={"2"}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
