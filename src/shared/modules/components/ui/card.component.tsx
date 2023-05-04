import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/react";

type TProps = {
  description: string;
  id: string;
  onClick: () => void;
  stars: number;
  title: string;
};

export const Card: React.FC<TProps> = ({
  description,
  id,
  onClick,
  stars,
  title,
}) => (
  <Box
    bg="gray.700"
    borderRadius={4}
    onClick={onClick}
    px={8}
    py={4}
    _hover={{ cursor: "pointer" }}
  >
    <Stack>
      <Flex>
        <Text color="twitter.500">#&nbsp;</Text>
        <Text color="whiteAlpha.300">{id}</Text>
      </Flex>
      <Flex>
        <Text color="white">{title}</Text>
      </Flex>
    </Stack>
    <Text color="whiteAlpha.500">{description}</Text>
    <Divider my={2} />
    <Flex>
      <Text color="whiteAlpha.400" textTransform="lowercase">
        Stars: {stars}
      </Text>
    </Flex>
  </Box>
);
