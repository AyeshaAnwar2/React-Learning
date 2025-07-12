import { useState } from "react";

function InputForm({ addTransaction }) {
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const handleTransaction = (type) => {
    if (!amount || !desc) {
      alert("Please enter both amount and description");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      amount: type === "income" ? +amount : -amount,
      desc,
      type,
    };

    addTransaction(newTransaction);
    setAmount("");
    setDesc("");
  };

  return (
    <div className="mb-6">
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
      <input
        type="text"
        placeholder="Enter description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="flex justify-between gap-4">
        <button
          onClick={() => handleTransaction("income")}
          className="bg-green-500 hover:bg-green-600  text-white px-4 py-2 rounded shadow-inner w-full"
        >
          Income
        </button>
        <button
          onClick={() => handleTransaction("expense")}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
        >
          Expense
        </button>
      </div>
    </div>
  );
}

export default InputForm;