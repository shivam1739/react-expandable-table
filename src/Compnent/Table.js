import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableRow from "./TableRow";
import { Table, TableContainer, Tbody, Tr, Thead, Th } from "@chakra-ui/react";
import Total from "./Total";

const Tables = ({ data, setInputData, qtrToggle, setQtr }) => {
  const [tableHead, setTableHead] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [total, setTotal] = useState({});
  useEffect(() => {
    setTableHead(data.map((items) => items.month));
    console.log("============");
    let indicators = {};
    let sum = {};
    data.forEach((element, idx) => {
      element.indicators.forEach((ele) => {
        const { name, value } = ele;
        if (indicators[name]) {
          indicators[name].push({ idx, value });
          sum[name] += value;
        } else {
          indicators[name] = [{ idx, value }];
          sum[name] = value;
        }
      });
    });

    setTotal(sum);
    setMonthlyData(indicators);
  }, []);

  // console.log(monthlyData, "mmm");
  return (
    <TableContainer m="1rem 0" border="2px" borderColor="gray.200">
      <Table variant="striped" colorScheme="teal">
        <Thead>
          <Tr>
            <Th minW="5rem" maxW="5rem" color="Dark">
              Month
            </Th>
            {tableHead.map((item) => (
              <TableHead props={item} />
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {Object.keys(monthlyData).map((items, idx) => {
            return (
              <Tr key={idx}>
                <Th minW="6rem" maxW="6rem">
                  {items}
                </Th>
                {monthlyData[items].map((item, idx) => (
                  <TableRow
                    props={item}
                    items={items}
                    data={data}
                    setInputData={setInputData}
                    key={idx}
                    setQtr={setQtr}
                    qtrToggle={qtrToggle}
                  />
                ))}
              </Tr>
            );
          })}
          {Object.keys(total).map((item, idx) => {
            return (
              <Tr key={idx}>
                <Th minW="6rem" maxW="6rem">
                  {`Σ ${item}`}
                </Th>
                {<Total prop={total[item]} />}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Tables;
