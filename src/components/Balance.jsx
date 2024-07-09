import { useGlobalState } from "../context/GlobalState";

export function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between items-center my-7">
      <h4 className="text-2xl font-bold">Balance:</h4>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
}
