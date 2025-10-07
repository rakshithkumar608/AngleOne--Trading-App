import { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  // SIP Calculation
  const months = years * 12;
  const monthlyRate = rate / 12 / 100;

  const totalValue = monthlyRate === 0 
    ? monthlyInvestment * months
    : monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

  const investedAmount = monthlyInvestment * months;
  const estimatedReturns = totalValue - investedAmount;

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="The SIP calculator helps estimate the potential growth of your Systematic Investment Plan (SIP) investment over your chosen time frame. SIP is a convenient method to save for your long-term financial goals."
      inputLabel="MONTHLY INVESTMENT"
      inputValue={monthlyInvestment}
      setInputValue={setMonthlyInvestment}
      minInput={500}
      maxInput={100000}
      stepInput={500}
      years={years}
      setYears={setYears}
      rate={rate}
      setRate={setRate}
      totalValue={totalValue}
      investedAmount={investedAmount}
      estimatedReturns={estimatedReturns}
      investedLabel="Invested Amount"
      sliderLabel="Monthly Investment Amount"
    />
  );
};

export default SipCalculator;