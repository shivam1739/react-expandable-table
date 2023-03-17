import { Th } from "@chakra-ui/react";

export default function TableHead({ props }) {
  return (
    <Th
      // minW="6rem"
      minW="5rem"
      maxW="5rem"
      textAlign="center"
    >
      {props}
    </Th>
  );
}
