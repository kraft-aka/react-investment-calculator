import React, { useState } from "react";

export default function (props) {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlyContributions, setEnteredYearlyContributions] =
    useState("");
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState("");
  const [enteredInvestmentDuration, setEnteredInvestmentDuration] =
    useState("");

  function currentSavingsHandler(e) {
    setEnteredCurrentSavings(e.target.value);
  }

  function yearlySavingsHandler(e) {
    setEnteredYearlyContributions(e.target.value);
  }

  function expectedInterestsHandler(e) {
    setEnteredExpectedInterest(e.target.value);
  }

  function investmentDurationHanlder(e) {
    setEnteredInvestmentDuration(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const investmentData = {
      currentSavings: enteredCurrentSavings,
      yearlyContribution: enteredYearlyContributions,
      expectedReturn: enteredExpectedInterest,
      duration: enteredInvestmentDuration,
    };
    console.log(investmentData);
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={currentSavingsHandler}
            value={enteredCurrentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
            value={enteredYearlyContributions}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            onChange={expectedInterestsHandler}
            value={enteredExpectedInterest}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={investmentDurationHanlder}
            value={enteredInvestmentDuration}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
