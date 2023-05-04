"use client";

import { ChakraProvider } from "@chakra-ui/react";

import { TOrCollection } from "../types/or-collection.type";

type TProps = {
  children: TOrCollection<React.ReactNode>;
};

export const ThemeProvider: React.FC<TProps> = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);
