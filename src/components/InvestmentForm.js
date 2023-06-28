import React, { useState } from "react";

export default function (props) {
  const [currentSavings, setCurrentSavings] = useState("");
  const [yearlyContribution, setYearlyContribution] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [duration, setDuration] = useState("");

  function currentSavingsHandler(e) {
    setCurrentSavings(e.target.value);
  }

  function yearlySavingsHandler(e) {
    setYearlyContribution(e.target.value);
  }

  function expectedInterestsHandler(e) {
    setExpectedReturn(e.target.value);
  }

  function investmentDurationHanlder(e) {
    setDuration(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();

    const investmentData = {
      currentSavings: +currentSavings,
      yearlyContribution: +yearlyContribution,
      expectedReturn: +expectedReturn,
      duration: +duration,
      id: Math.random().toString(),
    };
    props.onCalculate(investmentData)

    // checks if all fields are filled out
    if (!currentSavings || !yearlyContribution || !expectedReturn || !duration)
      return;
  }

  function resetHandler(e) {
    setCurrentSavings("");
    setExpectedReturn("");
    setDuration("");
    setYearlyContribution("");
    console.log("reset");
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
            value={currentSavings}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={yearlySavingsHandler}
            value={yearlyContribution}
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
            value={expectedReturn}
            id="expected-return"
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            onChange={investmentDurationHanlder}
            value={duration}
            id="duration"
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
