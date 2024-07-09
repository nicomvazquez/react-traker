import { GlobalProvider } from "./context/GlobalState";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/transactions/TransactionList";
import { TransactionForm } from "./components/transactions/TransactionForm";
import { ExpenseChart } from "./components/ExpenseChart";

function App() {
  return (
    <GlobalProvider>
      <div className="md:h-screen flex justify-center items-center">
        <div className="w-full md:w-3/5 flex justify-center items-centerp-5">
          <div className="flex flex-col md:flex-row justify-between gap-7  p-6">
            <div className="flex-1 max-w-md">
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
              <ExpenseChart />
            </div>
            <div className="flex-1 max-w-xl">
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
