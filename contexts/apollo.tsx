import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { ReactNode } from "react";

export const createHasuraClient = () => {
  const httpLink = new HttpLink({
    uri: "/api/graphql",
  });

  const link = ApolloLink.from([httpLink]);

  const cache = new InMemoryCache();
  return new ApolloClient({ link, cache });
};

export const client = createHasuraClient();

type ApolloClientProviderProps = {
  children: ReactNode;
};

export function ApolloClientProvider({ children }: ApolloClientProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
