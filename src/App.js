import "./App.css";
import CalculatorForm from "./components/CalculatorForm";
import ResultChart from "./components/ResultChart";
import ResultTable from "./components/ResultTable";
import { useState } from "react";
import { calculate } from "./components/helpers";

const App = () => {
  const [initialAmountState, setInitialAmountState] = useState(0);
  const [periodicalAmountState, setPeriodicalAmountState] = useState(0);
  const [ratesState, setRatesState] = useState(0);
  const [investmentYearsState, setInvestmentYearsState] = useState(0);

  const data = calculate(
    initialAmountState,
    periodicalAmountState,
    ratesState,
    investmentYearsState
  );

  return (
    <>
      <section>
        <CalculatorForm
          initialAmount={initialAmountState}
          setInitialAmountState={setInitialAmountState}
          periodicalAmount={periodicalAmountState}
          setPeriodicalAmountState={setPeriodicalAmountState}
          rates={ratesState}
          setRatesState={setRatesState}
          investmentYears={investmentYearsState}
          setInvestmentYearsState={setInvestmentYearsState}
        ></CalculatorForm>
      </section>

      <section>
        <ResultChart data={data}></ResultChart>
      </section>
      <section>
        <ResultTable data={data}></ResultTable>
      </section>
    </>
  );
};

export default App;
