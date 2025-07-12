
import React, { useState } from "react";
import Header from "./components/Header";
import InputForm from "./components/Inputform";
import TransactionList from "./components/TransactionList";
import Balance from "./components/Balance";

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen min-w-full">
    <div className="  p-4 text-black rounded-xl shadow" style={{backgroundColor : "#e0e5ec"}}>
      <Header />
      <Balance transactions={transactions} />
      <InputForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
    </div>
  );
}

export default App;
