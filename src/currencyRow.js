import React from "react";

export default function CurrencyRow(props) {
  const {
    listOptions,
    value,
    value_other,
    setValue,
    setValue_other,
    currency,
    currency_other,
    setCurrency,
    listRates
  } = props;
  function cacl_coef_convert(curency_1, curency_2) {
    return listRates[curency_2] / listRates[curency_1];
  }
  return (
    <>
      <input
        value={value}
        onChange={e => {
          setValue(e.target.value);

          e.target.value === ""
            ? setValue_other("")
            : setValue_other(
                cacl_coef_convert(currency, currency_other) * e.target.value
              );
        }}
      />
      {/* select currency */}
      <select
        value={currency}
        onChange={e => {
          setCurrency(e.target.value);
          value_other === ""
            ? setValue("")
            : setValue(
                cacl_coef_convert(currency_other, e.target.value) * value_other
              );
          //console.log({ currency_other, currency:e.target.value, value_other });
        }}
      >
        {listOptions.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
    </>
  );
}
