import { useGlobalState } from "../context/GlobalState";

export function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="p-3 bg-gray-200 rounded-md shadow-xl text-xl">
      <div className="flex justify-between my-2">
        <h4 className="font-semibold">Ingresos</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4 className="font-semibold">Egresos</h4>
        <p>{expense}</p>
      </div>
    </div>
  );
}
