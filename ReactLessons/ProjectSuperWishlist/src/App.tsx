import { useState } from "react";
import WishForm from "./components/WishForm";
import WishList from "./components/WishList";

export type Wish = {
  id: string;
  title: string;
  priority: "high" | "low";
  completed: boolean;
};

// const initialWishes: Wish[] = []

function App() {
  const [wishes, setWishes] = useState<Wish[]>([]);

  const deleteWish = (deleteId: string) => {
    // filter schaut hier fuer jeden wunsch ob er der zu loeschenden id entspricht
    // wenn er das nicht tut, darf er bleiben => wunsch mit der gesuchten id wird geloescht
    setWishes((oldWishes) => oldWishes.filter((wish) => wish.id !== deleteId));
  };

  const changeWishFulfillment = (id: string, fulfilled: boolean) => {
    setWishes((oldWishes) => {
      return oldWishes.map((wish) => {
        if (wish.id !== id) {
          return wish
        } else {
          // hier wird eine kopie erstellt, und ein einzelner wert überschrieben
          return {...wish, completed: fulfilled}
        }
      });
    });
  };

  return (
    <div>
      <h1 className="text-4xl">My Wishlist 🎄 🎁</h1>
      <WishForm setWishes={setWishes} />
      <WishList changeWishFulfillment={changeWishFulfillment} deleteWish={deleteWish} wishes={wishes} />
    </div>
  );
}

export default App;
