import { useEffect, useState } from "react";

// TODO hook this up
const circuit = () => {
  const [cycle, setCycle] = useState(1);

  // need a use effect to update setCycle with a number between 1 and 5 every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((cycle) => (cycle + 1) % 5);
    }, 1000);

    return () => clearInterval(interval);
  }, [circuit]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="100">
      <rect
        x="10"
        y="10"
        width="200"
        height="80"
        rx="15"
        ry="15"
        style={{ fill: "blue" }}
      />
      <circle cx="30" cy="50" r="15" style={{ fill: "red" }} />
      <circle cx="70" cy="50" r="15" style={{ fill: "red" }} />
      <circle cx="110" cy="50" r="15" style={{ fill: "red" }} />
      <circle cx="150" cy="50" r="15" style={{ fill: "red" }} />
      <circle cx="190" cy="50" r="15" style={{ fill: "red" }} />
    </svg>
  );
};

export default circuit;
