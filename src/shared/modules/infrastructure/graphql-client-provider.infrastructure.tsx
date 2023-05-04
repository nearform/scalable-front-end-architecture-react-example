"use client";

import { createClient, fetchExchange, Provider } from "urql";
import { env } from "../env";
import { AuthUtils } from "../utils/auth.utils";

type TProps = {
  children: React.ReactNode;
};

export const GraphQLClientProvider: React.FC<TProps> = ({ children }) => (
  <Provider
    value={createClient({
      exchanges: [fetchExchange],
      fetchOptions: () => ({
        headers: {
          ...AuthUtils.createHeaders(),
        },
      }),
      url: env.api.url,
    })}
  >
    {children}
  </Provider>
);
