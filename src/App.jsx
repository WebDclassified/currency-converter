import React from "react";
import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import InputBox from "./components/InputBox";

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState();

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    const money = amount * currencyInfo[to];
    setConvertedAmount(money.toFixed(4));
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  return (
    <div>
      <div className="relative">
        <video
          id="bg-video"
          autoPlay={true}
          muted={true}
          loop={true}
          playsInline={true}
          className="object-cover h-screen w-full brightness-50"
        >
          <source
            src="src/assets/3191576-uhd_3840_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div />
        <div className="absolute inset-y-1/3 inset-x-0">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-6 backdrop-blur-md bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="w-full mb-2">
                <InputBox
                  label="from"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectedCurrency={from}
                />
              </div>
              <div className="relative w-full h-2">
                <button
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 bg-blue-500 font-bold rounded-md px-3 py-1 text-blue-50 "
                >
                  Swap
                </button>
              </div>
              <div className="w-full mb-1">
                <InputBox
                  label="to"
                  currencyOptions={options}
                  amount={convertedAmount}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectedCurrency={to}
                  amountDisabled
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="rounded-lg bg-blue-800 w-1/2 h-10 my-2 text-white font-bold"
                >
                  Convert
                </button>
              </div>
              <p className="font-medium text-sm  text-white">By Prabhat Teotia</p>

            </form>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
