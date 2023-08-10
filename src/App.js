import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCounter] = useState(0);
  const [step, setstep] = useState(1);

  const date = new Date("august 28 2003");
  date.setDate(date.getDate() + count * step);
  return (
    <>
      <div>
        <button onClick={() => setstep((p) => p - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setstep((p) => p + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCounter((p) => p - 1)}>-</button>
        <span>count : {count}</span>
        <button onClick={() => setCounter((p) => p + 1)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "today is "
            : count > 0
            ? `+${step * count} days`
            : `-${step * count} days`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </>
  );
}
