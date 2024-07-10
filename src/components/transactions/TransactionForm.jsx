import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

export function TransactionForm() {
  const { addTransaction } = useGlobalState();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("ingreso");

  const onSubmit = (e) => {
    e.preventDefault();

    const now = new Date();

    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: type == "ingreso" ? +amount : -amount,
      date: now.toLocaleDateString(),
    });

    setDescription("");
    setAmount(0);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripccion"
          className="border-b-2 border-b-black px-3 py-2  block mb-2 w-full"
          value={description}
        />
        <input
          type="number"
          onChange={(e) => setAmount(e.target.value)}
          step="0.01"
          placeholder="0.00"
          className="border-b-2 border-b-black px-3 py-2  block mb-2 w-full"
          value={amount}
        />
        <select
          onChange={(e) => setType(e.target.value)}
          className="border-2 border-black px-3 py-2 rounded-md block mb-2 w-full"
        >
          <option value="ingreso">Ingreso</option>
          <option value="egreso">Egreso</option>
        </select>
        <button
          className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full disabled:opacity-50"
          disabled={!description || !amount}
        >
          Agregar transaccion
        </button>
      </form>
    </div>
  );
}
