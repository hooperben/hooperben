const TheCave = () => (
  <div className="w-12">
    <svg
      baseProfile="full"
      height="100"
      version="1.1"
      width="100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />

      <circle cx="50" cy="50" fill="white" r="40" stroke="black" />
      <circle cx="50" cy="50" fill="black" r="20" stroke="black" />
      <rect x={50 - 16} y="-30" width={32} height="50" fill="white" />
      <line stroke="black" x1="34" x2="34" y1="-30" y2="14" />
      <line stroke="black" x1="66" x2="66" y1="-30" y2="14" />
      <line stroke="brown" x1="50" x2="50" y1="70" y2="90" stroke-width="4" />

      <text x="50" y="110" fontSize="12" fill="blue"></text>
    </svg>
  </div>
);

export default TheCave;
