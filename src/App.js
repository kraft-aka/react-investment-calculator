import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import InvestmentForm from "./components/InvestmentForm";
import InvestmentTable from "./components/InvestmentTable";
import InvestmentHeader from "./components/InvestmentHeader";

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
    console.log(userInput);
  };

  const yearlyData = []; // per-year results

  if (userInput) {
    let currentSavings = +userInput["currentSavings"];
    const yearlyContribution = +userInput["yearlyContribution"];
    const expectedReturn = +userInput["expectedReturn"] / 100;
    const duration = +userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }
  console.log(userInput);

  const fallbackText = (
    <p style={{ color: "red", textAlign: "center" }}>'No investment calculated!'</p>
  );

  return (
    <div>
      <InvestmentHeader logo={logo} />
      <InvestmentForm onCalculate={calculateHandler} />
      {!userInput && fallbackText}
      {userInput && (
        <InvestmentTable
          data={yearlyData}
          initialInvetsment={userInput.currentSavings}
        />
      )}
    </div>
  );
}

export default App;
