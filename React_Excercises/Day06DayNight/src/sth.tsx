function App() {
    const [switchColor, setSwitchColor] = useState("");
  
    const handleClick: React.MouseEventHandler = (e) => {
      e.preventDefault();
  
      setSwitchColor("bg-white text-black");
    };
  
    return (
      <div
        className={
          "h-screen flex flex-col items-center justify-center gap-6 bg-stone-800 text-stone-50" +
          switchColor
        }
      >
        <h1 className="text-4xl font-bold">Day & Night</h1>
        <button
          onClick={handleClick}
          className={"px-4 py-2 border rounded cursor-pointer hover:bg-stone-500"}
        >
          Change
        </button>
      </div>
    );
  }