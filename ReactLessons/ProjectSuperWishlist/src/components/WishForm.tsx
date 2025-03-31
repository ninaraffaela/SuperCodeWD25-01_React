import { useState } from "react";
import type { Wish } from "../App";

type WishFormProps = {
  setWishes: React.Dispatch<React.SetStateAction<Wish[]>>;
};

function WishForm({ setWishes }: WishFormProps) {
  const [wishInputValue, setWishInputValue] = useState("");
  const [prioritySelectValue, setPrioritySelectValue] = useState<
    "low" | "high"
  >("low");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const newWish: Wish = {
      id: crypto.randomUUID(),
      title: wishInputValue,
      completed: false,
      priority: prioritySelectValue,
    };
    console.log(newWish)
    setWishes((oldWishes)=>([...oldWishes, newWish]))
    setWishInputValue("")
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={wishInputValue}
          onChange={(e) => {
            setWishInputValue(e.target.value);
          }}
        />
        <select
          name=""
          id=""
          onChange={(e) => {
            // setPrioritySelectValue(e.target.value as "high" | "low");
            if (e.target.value === "high" || e.target.value === "low"){
                setPrioritySelectValue(e.target.value);
            } else {
                console.warn("Whaaat?")
            }

          }}
        >
          <option value="low">Low</option>
          <option value="high">High</option>
        </select>
      </div>
      <button disabled={wishInputValue.trim().length === 0} className="bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed p-2 text-white min-w-36">Add wish</button>
    </form>
  );
}

export default WishForm;
