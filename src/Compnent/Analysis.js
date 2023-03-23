import { Select } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Tables from "./Table";
import { ScaleFade } from "@chakra-ui/react";
const data = [
  {
    month: "February-22",
    indicators: [
      { name: "revenue", value: 12000 },
      { name: "expenses", value: 10000 },
    ],
  },
  {
    month: "February-23",
    indicators: [
      { name: "revenue", value: 12000 },
      { name: "expenses", value: 10000 },
    ],
  },
  {
    month: "March-23",
    indicators: [
      { name: "revenue", value: 9000 },
      { name: "expenses", value: 7000 },
    ],
  },
  {
    month: "April-23",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "May-23",
    indicators: [
      { name: "revenue", value: 8000 },
      { name: "expenses", value: 6000 },
    ],
  },
  {
    month: "June-23",
    indicators: [
      { name: "revenue", value: 14000 },
      { name: "expenses", value: 12000 },
    ],
  },
  {
    month: "July-23",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "August-23",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "September-23",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "October-23",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "November-23",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },

  {
    month: "January-24",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "February-24",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
  {
    month: "March-24",
    indicators: [
      { name: "revenue", value: 11000 },
      { name: "expenses", value: 9000 },
    ],
  },
];

export default function Analysis(params) {
  const [inputData, setInputData] = useState(data);

  const [quarterly, setQuarterly] = useState([]);
  const [qtrToggle, setQtr] = useState(false);
  useEffect(() => {
    let q = [];
    let i = 0;
    // for quatrly data ==========================================
    while (i < inputData.length) {
      let ans = [];
      let no = "";
      let year = inputData[i].month.substring(inputData[i].month.length - 2);
      while (true) {
        if (inputData[i]) {
          no = monthToNumber(
            inputData[i].month.slice(0, inputData[i].month.length - 3)
          );
          ans.push(inputData[i++]);
          if (no % 3 === 0 || !inputData[i].month.includes(year)) {
            break;
          }
          year = inputData[i].month.substring(inputData[i].month.length - 2);
        }
        // console.log(ans);
      }

      q.push(ans);
    }

    setQuarterly(q);
  }, [inputData]);

  function monthToNumber(mon) {
    switch (mon) {
      case "January":
        return 1;
      case "February":
        return 2;
      case "March":
        return 3;
      case "April":
        return 4;
      case "May":
        return 5;
      case "June":
        return 6;
      case "July":
        return 7;
      case "August":
        return 8;
      case "September":
        return 9;
      case "October":
        return 10;
      case "November":
        return 11;
      case "December":
        return 12;
      default:
        return 0;
    }
  }
  return (
    <div>
      <section>
        {/* {Object.keys(yearlyData).map((item) => <Tables data={yearlyData[item]}/>))} */}
        <Tables
          data={inputData}
          setInputData={setInputData}
          qtrToggle={qtrToggle}
          setQtr={setQtr}
        />
      </section>
      <section>
        <button onClick={() => setQtr(!qtrToggle)}>Show quarterly data</button>
      </section>
      <ScaleFade initialScale={0.2} in={qtrToggle}>
        <section
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {qtrToggle
            ? quarterly.map((data, idx) => <Tables data={data} key={idx} />)
            : null}
        </section>
      </ScaleFade>
    </div>
  );
}
