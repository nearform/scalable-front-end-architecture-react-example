"use client";

import { Container, Flex } from "@chakra-ui/react";
import { TOrCollection } from "../types/or-collection.type";

type TProps = {
  children: TOrCollection<React.ReactNode>;
};

export const AppLayout: React.FC<TProps> = ({ children }) => (
  <Flex bg="black" minH="100svh">
    <Container py={16}>{children}</Container>
  </Flex>
);
