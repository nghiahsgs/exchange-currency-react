import React, { useState, useEffect } from "react";
import "./styles.css";
import CurrencyRow from "./currencyRow";

export default function App() {
  const [value_1, setValue_1] = useState("");
  const [value_2, setValue_2] = useState("");
  const [currency_1, setCurrency_1] = useState("HKD");
  const [currency_2, setCurrency_2] = useState("CAD");
  const [listOptions, setListOptions] = useState([]);
  const [listRates, setlistRates] = useState([]);
  useEffect(() => {
    console.log("useEffect");
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(res => res.json())
      .then(data => {
        setListOptions([data.base, ...Object.keys(data.rates)]);
        setlistRates({ ...data.rates, USD: 1 });
        // console.log(data.rates);
      });
  }, []);

  return (
    <div className="App">
      <h3>Exchange currency</h3>
      {value_1 && (
        <h2>
          {value_1} {currency_1} ={value_2} {currency_2}
        </h2>
      )}
      <CurrencyRow
        listOptions={listOptions}
        value={value_1}
        value_other={value_2}
        setValue={setValue_1}
        setValue_other={setValue_2}
        currency={currency_1}
        currency_other={currency_2}
        setCurrency={setCurrency_1}
        listRates={listRates}
      />
      <p>=</p>
      <CurrencyRow
        listOptions={listOptions}
        value={value_2}
        value_other={value_1}
        setValue={setValue_2}
        setValue_other={setValue_1}
        currency={currency_2}
        currency_other={currency_1}
        setCurrency={setCurrency_2}
        listRates={listRates}
      />
    </div>
  );
}
