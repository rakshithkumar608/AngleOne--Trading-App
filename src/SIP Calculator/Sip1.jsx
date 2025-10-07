import { useState } from "react";
import CalculatorLayout from "./CalculatorLayout";

const LumpsumCalculator = () => {
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(12);

  // Lumpsum Calculation: FV = PV * (1 + r)^n
  const totalValue = lumpsumAmount * Math.pow(1 + rate / 100, years);
  const estimatedReturns = totalValue - lumpsumAmount;

  return (
    <CalculatorLayout
      title="SIP Calculator"
      description="The SIP calculator helps estimate the potential growth of your Systematic Investment Plan (SIP) investment over your chosen time frame. SIP is a convenient method to save for your long-term financial goals."
      inputLabel="ENTER AMOUNT"
      inputValue={lumpsumAmount}
      setInputValue={setLumpsumAmount}
      minInput={10000}
      maxInput={10000000}
      stepInput={10000}
      years={years}
      setYears={setYears}
      rate={rate}
      setRate={setRate}
      totalValue={totalValue}
      investedAmount={lumpsumAmount}
      estimatedReturns={estimatedReturns}
      investedLabel="Invested Amount"
      sliderLabel="Investment Amount"
    />
  );
};

export default LumpsumCalculator;