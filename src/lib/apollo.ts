import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ptcyag26zt01xxg7zmd29z/master',
  cache: new InMemoryCache()
})