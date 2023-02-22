import { Container, HStack } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "..";
import ErrorComponent from "./ErrorComponent";
import ExchangeCard from "./ExchangeCard";
import Loader from "./Loader";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Error, setError] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        //console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError = true;
        //alert(error);
      }
    };
    fetchExchanges();
  }, []);

  if (Error) return <ErrorComponent />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => {
              return (
                <ExchangeCard
                  key={i.id}
                  name={i.name}
                  image={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                />
              );
            })}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Exchanges;
