import { jsx } from "@emotion/react";

export let calculate = (initial, periodical, rates, years) => {
  const pocatecni = parseInt(initial);
  const opakovany = parseInt(periodical);
  const urok = parseInt(rates) / 100;
  const delkaInvestice = parseInt(years);
  let final;

  let data = [];
  let chartLabes = [];

  try {
    final = pocatecni + opakovany;
    data.push(final);

    for (let i = 0; i <= delkaInvestice; i++) {
      final = final + 12 * opakovany;
      final = final * (1 + urok);
      data.push(toDecimal(final));
    }
    data.splice(-1);
  } catch (error) {}

  console.log(data)
  const resultData = data.map((value, index) => {
    let y = {
      name: index + '. Rok',
      value: value,
    };
    return y;
  });

  console.log(resultData)
  return resultData

};

let toDecimal = (value, decimals) => {
  return parseInt(value.toFixed(decimals));
};

let drawChart = () => {};
