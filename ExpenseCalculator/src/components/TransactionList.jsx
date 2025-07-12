function TransactionList({ transactions }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Transaction History 📋</h2>
      <ul>
        {transactions.map((txn) => (
          <li
            key={txn.id}
            className="flex justify-between p-2 border-b text-gray-800"
          >
            <span>{txn.desc}</span>
            <span>{txn.amount >= 0 ? "+" : "-"}${Math.abs(txn.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;