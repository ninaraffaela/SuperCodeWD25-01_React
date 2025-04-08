import { createContext, useContext, useState } from "react";

// * Da wir count/setCount hier noch nicht haben (es entsteht erst in der App)
// * koennen wir keinen sinnvollen Defaultwert vergeben.
// * Da ohne Defaultwert keine Typinferenz stattfindet, müssen wir den Typ explizit definieren
type CounterContext = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

// * createContext will eigentlich einen Defaultwert, der dem Typ entspricht.
// * Da wir diesen hier noch nicht liefern können, übergeben wir null
// * und unterdrücken mit ! den dann eigentlich auftretenden Typfehler
export const counterContext = createContext<CounterContext>(null!);

type CounterProviderProps = {
  // * ReactNode deckt alles ab was an eine Komponente übergeben werden kann(1) und ist der ideale Typ für children.
  // * (1)Also, andere Komponenten, Strings, HTML-Tags, null, etc.
  children: React.ReactNode;
};

export function CounterProvider({ children }: CounterProviderProps) {
  const [count, setCount] = useState(0);

  // TODO: Diese funktionen anstelle von setCount in den Context geben und verwenden
  // const increment = () => {
  //   setCount((oldValue) => oldValue + 1);
  // };
  // const reset = () => {
  //   setCount(0);
  // };
  // const decrement = () => {
  //   setCount((oldValue) => oldValue - 1);
  // };

  return (
    <counterContext.Provider value={{ count, setCount }}>
      {children}
    </counterContext.Provider>
  );
}

//* Ein Custom Hook macht die Nutzung von Kontext safer (da wir prüfen können ob ein Provider vorhanden ist)
//* und ergonomischer (da wir nicht immer useContext und counterContext importieren müssen)
export const useCounter = ()=>{
  const contextValue = useContext(counterContext)
  if (contextValue === null) {
    throw new Error("Hey, du hast vergessen den CounterProvider einzubauen")
  }
  return contextValue
}