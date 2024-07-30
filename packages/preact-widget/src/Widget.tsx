import { h } from "preact";
import { useCallback, useState } from "preact/hooks";

export default function Widget() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value]);

  return (
    <div style={{ position: "relative" }}>
      Hello from preact widget!
      <button onClick={() => setOpen(!open)}>Toggle modal</button>
      {open && (
        <div
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: 10,
            border: "1px solid black",
            right: "50%",
            bottom: -100,
            color: "black",
            zIndex: 10,
          }}
        >
          <button onClick={increment}>Increment</button>
          <p>{value}</p>
        </div>
      )}
    </div>
  );
}
