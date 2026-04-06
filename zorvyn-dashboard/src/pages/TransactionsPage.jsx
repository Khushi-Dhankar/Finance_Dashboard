import TransactionList from "../components/transactions/TransactionList";

export default function TransactionsPage({ transactions, setTransactions }) {
  return (
    <TransactionList
      transactions={transactions}
      setTransactions={setTransactions}
    />
  );
}