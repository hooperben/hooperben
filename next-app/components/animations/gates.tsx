const strokeClass = "stroke-current text-black dark:text-darkCream";

const AndGate = () => (
  <>
    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="200"
      x2="250"
      y1="200"
      y2="200"
    />
    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="200"
      x2="200"
      y1="200"
      y2="300"
    />

    <text x="225" y="250" className={strokeClass}>
      *
    </text>

    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="250"
      x2="250"
      y1="200"
      y2="300"
    />

    <path
      d="M 300,0 A 10,10 0 0,1 300,50"
      fill="none"
      className={strokeClass}
      strokeWidth="0.4"
      transform="rotate(90 125,125)"
    />

    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="225"
      x2="225"
      y1="325"
      y2="450"
    />
  </>
);

// TODO remove these x and ys
const OrGate = ({ x = 50, y = 50 }: { x?: number; y?: number }) => (
  <>
    <text x="7" y="13" className={strokeClass}>
      x
    </text>

    <line
      x1="20"
      x2="235"
      y1="10"
      y2="10"
      strokeWidth="0.4"
      className={strokeClass}
    />

    <line
      className={strokeClass}
      x1="235"
      x2="235"
      y1="10"
      y2="200"
      strokeWidth="0.4"
    />

    <line
      className={strokeClass}
      x1="10"
      x2="10"
      y1="20"
      y2={y + 20}
      strokeWidth="0.4"
    />

    {/* inputs */}
    <line
      className={strokeClass}
      x1={x}
      x2={x - 40}
      y1={y + 20}
      y2={y + 20}
      strokeWidth="0.4"
    />

    <text x="3" y="120" className={strokeClass}>
      -1
    </text>
    <line
      className={strokeClass}
      x1="10"
      x2="50"
      y1={y + 80}
      y2={y + 80}
      strokeWidth="0.4"
    />

    <polygon
      points="50 15, 100 100, 0 100"
      fill="none"
      className={strokeClass}
      strokeLinejoin="round"
      strokeWidth="0.4"
      transform={`translate(${x},${y}) rotate(90 ${x},${y})`}
    />

    <text x="75" y="100" className={strokeClass}>
      +
    </text>

    {/* output */}
    <line
      className={strokeClass}
      strokeWidth="0.4"
      x1={x + 70 + 15}
      x2={x + 70 + 100}
      y1={y + 50}
      y2={y + 50}
    />

    <line
      className={strokeClass}
      x1={x + 70 + 100}
      x2={x + 70 + 100}
      y1={y + 50}
      y2={y + 150}
      strokeWidth="0.4"
    />
  </>
);

const FullCircuit = () => (
  <div className="text-black dark:text-darkCream">
    <svg baseProfile="full" height="450" version="1.1" width="400">
      <polygon
        points="30,30 400,30 400,30 400,400 400,400 30,400 30,400 30,30"
        fill="none"
        className="stroke-current text-black dark:text-darkCream"
        strokeLinejoin="round"
        strokeWidth="0.4"
      ></polygon>
      <OrGate />
      <AndGate />
    </svg>
  </div>
);

const PLONKAndGate = () => (
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="220"
      height="80"
      className="border-diagram border-solid border-black dark:border-darkCream rounded-diagram"
    >
      {/* QL */}
      <circle
        cx="30"
        cy="40"
        r="15"
        // fill="none"
        className="fill-black dark:fill-darkCream"
        // className={strokeClass}
        strokeWidth="0.4"
      />
      <text x="26" y="45" className="current-text text-darkCream">
        1
      </text>

      {/* QR */}
      <circle
        cx="70"
        cy="40"
        r="15"
        fill="none"
        className={strokeClass}
        strokeWidth="0.4"
      />
      <text x="66" y="45" className={strokeClass}>
        1
      </text>

      {/* QO */}
      <circle
        cx="110"
        cy="40"
        r="15"
        fill="none"
        className={strokeClass}
        strokeWidth="0.4"
      />
      <text x="106" y="45" className={strokeClass}>
        -1
      </text>

      {/* QM */}
      <circle
        cx="150"
        cy="40"
        r="15"
        fill="none"
        className={strokeClass}
        strokeWidth="0.4"
      />
      <text x="146" y="45" className={strokeClass}>
        -1
      </text>

      <circle
        cx="190"
        cy="40"
        r="15"
        fill="none"
        className={strokeClass}
        strokeWidth="0.4"
      />
      <text x="186" y="45" className={strokeClass}>
        0
      </text>
    </svg>
  </div>
);

export { AndGate, OrGate, FullCircuit, PLONKAndGate };
