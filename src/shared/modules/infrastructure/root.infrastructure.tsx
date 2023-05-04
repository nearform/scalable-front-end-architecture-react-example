import { TOrCollection } from "../types/or-collection.type";
import { GraphQLClientProvider } from "./graphql-client-provider.infrastructure";

import { ThemeProvider } from "./theme-provider.infrastructure";

type TProps = {
  children: TOrCollection<React.ReactNode>;
};

export const Root: React.FC<TProps> = ({ children }) => (
  <GraphQLClientProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </GraphQLClientProvider>
);
