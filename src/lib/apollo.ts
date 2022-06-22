import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pp1pyh21cc01xx3z5gbyaa/master',
  cache: new InMemoryCache()
})