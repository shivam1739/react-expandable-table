import { useEffect, useState } from "react";

import { Td } from "@chakra-ui/react";

export default function TableRow({ props }) {
  return (
    <Td p="0" minW="6rem" maxW="6rem" textAlign="center">
      {props.value}
    </Td>
  );
}
