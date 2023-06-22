import React from "react";

export default function InvestmentHeader(props) {
  return (
    <header className="header">
      <img src={props.logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
