import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://axixa.stepzen.net/api/measly-ibis/__graphql",
  headers: {
    Authorization: `Apikey ${process.env.NEXT_PUBLIC_STEPZEN_APIKEY}`,
  },
  cache: new InMemoryCache(),
});

export default client;
