import "./CalculatorForm.css";
import React, { Component } from "react";
import Select from "react-select";
import NumberImput from "./NumberImput";
import { useState } from "react";

const CalculatorForm = (props) => {
  let { initialAmount, periodicalAmount, rates, investmentYears } = props;
  
  return (
    <div className="calculator">
        <h3>Investiční kalkulačka</h3>
        <small>Nárust vašich peněz v čase při složeném úrokování</small>
      <form className="compound-form">
        <NumberImput
          onChange={props.setInitialAmountState}
          name="initialAmount"
          label="Vstupní vklad"
          value={props.initialAmountState}
        ></NumberImput>
        <NumberImput
          onChange={props.setPeriodicalAmountState}
          name="periodicalAmount"
          label="Pravidelný měsíční vklad"
          value={props.periodicalAmountState}
        ></NumberImput>
        <NumberImput
          onChange={props.setRatesState}
          name="rates"
          label="Roční úrok [%]"
          value={props.ratesState}
        ></NumberImput>
        <NumberImput
          onChange={props.setInvestmentYearsState}
          name="investmentYears"
          label="Delka investování"
          value={props.investmentYearsState}
        ></NumberImput>
        <div className="button-section">
          <input type="submit" value="Spočítej" className="calculate-button" />
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;
