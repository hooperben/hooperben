const AndGate = () => (
  <div>
    <svg baseProfile="full" height="100px" version="1.1" width="300px">
      <defs />
      <line stroke="black" x1="0" x2="150" y1="0" y2="0" />
      <line stroke="black" x1="0" x2="0" y1="0" y2="100" />
      <line stroke="black" x1="0" x2="150" y1="100" y2="100" strokeWidth="1" />

      <path
        d="M 148,0 A 50,50 0 0,1 150,100"
        fill="none"
        stroke="black"
        strokeWidth="0.4"
      />
      {/* <!-- Explaining the Arc:
       M 10,50: Move to start point (10,50)
       A 40,40: Arc with a radius of 40 (both x and y for a circle)
       0: x-axis rotation (irrelevant for circles, as they are round)
       0,1: large-arc-flag and sweep-flag, determining the arc direction and extent
       90,50: The end point of the arc
  --> */}
    </svg>
  </div>
);
// export default AndGate;

const OrGate = () => (
  <div>
    <svg baseProfile="full" height="200" version="1.1" width="300">
      <polygon
        points="80,8 8,154 154,154, 80,8"
        fill="none"
        stroke="black"
        strokeLinejoin="round"
        strokeWidth="0.4"
        transform="rotate(90 70,90)"
      />
    </svg>
  </div>
);

export { AndGate, OrGate };
