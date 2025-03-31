import { Wish } from "../App";

type WishItemProps = {
  wish: Wish;
  deleteWish: (id: string) => void;
  changeWishFulfillment: (id: string, fulfilled: boolean) => void
};

export default function WishItem({ wish, deleteWish, changeWishFulfillment }: WishItemProps) {
  const handleDeleteClick = () => {
    deleteWish(wish.id);
  };

  const handleCheckboxClick: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const newValue = e.target.checked
    changeWishFulfillment(wish.id, newValue)
  };

  return (
    <li>
      <input
        type="checkbox"
        name=""
        id=""
        checked={wish.completed}
        onChange={handleCheckboxClick}
      />
      <span className={wish.priority === "low" ? "bg-green-400" : "bg-red-400"}>
        {wish.title}
      </span>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
}
