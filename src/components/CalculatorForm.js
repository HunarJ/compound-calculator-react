import "./CalculatorForm.css";
import React, { Component } from "react";
import Select from "react-select";
import NumberImput from "./NumberImput";
import { useState } from "react";

const CalculatorForm = (props) => {
  let { initialAmount, periodicalAmount, rates, investmentYears } = props;

  return (
    <div className="calculator">
      <div className="heading">
        <h3>Investiční kalkulačka</h3>
      </div>
      <form className="compound-form">
        <NumberImput
          className="input-group"
          onChange={props.setInitialAmountState}
          name="initialAmount"
          label="Vstupní vklad:"
          value={props.initialAmountState}
        ></NumberImput>
        <NumberImput
          onChange={props.setPeriodicalAmountState}
          name="periodicalAmount"
          label="Pravidelný měsíční vklad:"
          value={props.periodicalAmountState}
        ></NumberImput>
        <NumberImput
          onChange={props.setRatesState}
          name="rates"
          label="Roční úrok [%]:"
          value={props.ratesState}
        ></NumberImput>
        <NumberImput
          onChange={props.setInvestmentYearsState}
          name="investmentYears"
          label="Delka investování [Roků]:"
          value={props.investmentYearsState}
        ></NumberImput>
      </form>
    </div>
  );
};

export default CalculatorForm;
