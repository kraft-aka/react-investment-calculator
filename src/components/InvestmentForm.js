import React, {useState} from 'react'

export default function () {

  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState('');
  const [enteredYearlySavings, setEnteredYearlySavings] = useState('');
  const [enteredExpectedInterest, setEnteredExpectedInterest] = useState('');
  const [enteredInvestmentDuration, setEnteredInvestmentDuration] = useState('');

  function currentSavingsHandler(e) {
    setEnteredCurrentSavings(e.target.value)
  }

  function yearlySavingsHandler(e) {
    setEnteredYearlySavings(e.target.value)
  }

  function expectedInterestsHandler(e) {
    setEnteredExpectedInterest(e.target.value);
  }

  function investmentDurationHanlder(e) {
    setEnteredInvestmentDuration(e.target.value);
  }

  return (
    <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" onChange={currentSavingsHandler} value={enteredCurrentSavings} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" onChange={yearlySavingsHandler} value={enteredYearlySavings} />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" onChange={expectedInterestsHandler} value={enteredExpectedInterest} id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" onChange={investmentDurationHanlder} value={enteredInvestmentDuration} id="duration" />
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
  )
}
