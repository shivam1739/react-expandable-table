import { useEffect, useState } from "react";

import { Td } from "@chakra-ui/react";

export default function TableRow({
  props,
  data,
  setInputData,
  items,
  setQtr,
  qtrToggle,
}) {
  const [edit, setEdit] = useState(() => false);
  const [val, setValue] = useState(props.value);

  // console.log(monthlyData);
  // console.log(data);
  // console.log(items);

  function handleEdit() {
    let val = window.prompt();
    if (!val) {
      window.alert("data should not be empty");
      return;
    }
    let editData = data;
    editData.forEach((element, idx) => {
      if (idx == props.idx) {
        element.indicators.forEach((ele) => {
          // console.log(ele);
          if (ele.name === items) {
            ele.value = +val;
          }
        });
      }
    });

    setValue(val);
    setInputData(editData);
    if (qtrToggle) {
      setQtr(!qtrToggle);
    }
    setEdit(!edit);
  }

  return (
    <Td
      _hover={{ background: "black", color: "white" }}
      p="0"
      minW="6rem"
      maxW="6rem"
      textAlign="center"
      onClick={() => handleEdit()}
    >
      {val}
    </Td>
  );
}
