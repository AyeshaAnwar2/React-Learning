function Balance({ transactions }) {
  const total = transactions.reduce((acc, txn) => acc + txn.amount, 0);

  return (
    <div className="text-center mb-6">
      <h2 className="text-xl font-semibold">Total Balance</h2>
      <p
        className={`text-2xl font-bold ${
          total >= 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        ${total}
      </p>
    </div>
  );
}

export default Balance;