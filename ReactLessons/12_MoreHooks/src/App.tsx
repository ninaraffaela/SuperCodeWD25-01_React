import { ComponentA } from "./components/ComponentA";
import { nameContext } from "./contexts/nameContext";
import { CounterProvider } from "./contexts/counterContext";
import { ComponentD } from "./components/ComponentD";
import ComponentM from "./components/ComponentM";

function App() {
  const userName = "Schuhschnabelstorch";

  return (
    <nameContext.Provider value={userName}>
      <CounterProvider>
        <div>
          <ComponentA />
        </div>
        <div>
          <ComponentD/>
        </div>
        <ComponentM/>
      </CounterProvider>
    </nameContext.Provider>
  );
}

export default App;