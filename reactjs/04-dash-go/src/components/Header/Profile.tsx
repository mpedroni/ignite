import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Matheus Pedroni</Text>
        <Text color="gray.300" fontSize="small">
          mpedroni77@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Matheus Pedroni" src="https://github.com/mpedroni.png" />
    </Flex>
  );
}