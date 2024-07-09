import { useGlobalState } from "../../context/GlobalState";
import { BiTrash } from "react-icons/bi";

export function TransactionItem({
  transaction: { id, description, amount, date },
}) {
  const { deleteTransaction } = useGlobalState();
  const sign = amount < 0 ? "-" : "+";

  return (
    <li
      key={id}
      className="bg-gray-100 shadow-lg text-xl px-3 py-3 hover:translate-x-3 transition-all rounded-lg mb-5 w-full flex justify-between items-center"
    >
      <div>
        <h1 className="text-wrap ">{description}</h1>
        <h1 className=" ">{date}</h1>
      </div>
      <div className="text-right w-40">
        <span className={`${amount < 0 ? "text-red-500" : "text-green-500"}`}>
          {sign}${Math.abs(amount)}
        </span>
        <button
          onClick={() => deleteTransaction(id)}
          className="font-bold  rounded-lg ml-2"
        >
          <BiTrash />
        </button>
      </div>
    </li>
  );
}
