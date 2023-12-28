import { useEffect, useState } from "react";

// TODO hook this up
const Circuit = () => {
  const [cycle, setCycle] = useState(1);

  // need a use effect to update setCycle with a number between 1 and 5 every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      setCycle((cycle) => (cycle + 1) % 5);
    }, 1000);

    return () => clearInterval(interval);
  }, [cycle]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="80"
      className="border-diagram border-solid border-black dark:border-darkCream rounded-diagram"
    >
      <circle
        cx="30"
        cy="40"
        r="15"
        style={{ fill: cycle === 0 ? "green" : "#d3d3d3" }}
      />
      <circle
        cx="70"
        cy="40"
        r="15"
        style={{ fill: cycle === 1 ? "green" : "#d3d3d3" }}
      />
      <circle
        cx="110"
        cy="40"
        r="15"
        style={{ fill: cycle === 2 ? "green" : "#d3d3d3" }}
      />
      <circle
        cx="150"
        cy="40"
        r="15"
        style={{ fill: cycle === 3 ? "green" : "#d3d3d3" }}
      />
      <circle
        cx="190"
        cy="40"
        r="15"
        style={{ fill: cycle === 4 ? "green" : "#d3d3d3" }}
      />
    </svg>
  );
};

export default Circuit;
