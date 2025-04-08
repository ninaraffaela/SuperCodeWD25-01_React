import { useCounter } from "../contexts/counterContext";
import { motion } from "motion/react";

export default function ComponentM() {
  const { count, setCount } = useCounter();
  return (
    <div>
      <motion.button
        className="motion-thing"
        transition={{}}
        initial={{ opacity: 0, transform: "translateX(-200px) rotate(0deg)" }}
        animate={{
          opacity: 1,
          transform: `translateX(0) rotate(${90 * count}deg)`,
        }}
        onClick={() => {
          setCount((value) => value + 4);
        }}
      >
        {count}
      </motion.button>
    </div>
  );
}