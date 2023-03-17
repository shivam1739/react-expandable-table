import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Tables from "./Table";
import { ScaleFade } from "@chakra-ui/react";
const data = [
  {
    month: "January",
    indicators: [
      { name: "revenue", value: 10000 },
      { name: "expenses", value: 8000 },
    ],
  },
  {
    month: "February",
    indicators: [
      { name: "revenue", value: 12000 },
      { name: "expenses", value: 10000 },
    ],
  },
  {
    month: "March",
    indicators: [
      { name: "revenue", value: 9000 },
      { name: "expenses", value: 7000 },
    ],
  },
  {
    month: "April",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "May",
    indicators: [
      { name: "revenue", value: 8000 },
      { name: "expenses", value: 6000 },
    ],
  },
  {
    month: "June",
    indicators: [
      { name: "revenue", value: 14000 },
      { name: "expenses", value: 12000 },
    ],
  },
  {
    month: "July",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "August",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "September",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "October",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "November",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "December",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
];

export default function Analysis(params) {
  const [quatrly, setQuatrly] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  useEffect(() => {
    let q = [];
    let i = 0;
    while (i < data.length) {
      let ans = [];
      let j = 1;
      while (j < 4) {
        ans.push(data[i++]);
        j++;
      }
      q.push(ans);
    }
    setQuatrly(q);
  }, []);
  return (
    <div>
      <section>
        <Tables data={data} />
      </section>
      <section>
        <Select
          width="100%"
          placeholder="Select option"
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          <option value="quatrly">Quatrly</option>
        </Select>
      </section>
      <ScaleFade initialScale={0.2} in={selectedValue}>
        <section
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {selectedValue === "quatrly"
            ? quatrly.map((data) => <Tables data={data} />)
            : null}
        </section>
      </ScaleFade>
    </div>
  );
}
