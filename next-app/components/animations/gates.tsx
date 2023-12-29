import MarkdownWithMaths from "../markdown/markdown-with-maths";

const strokeClass = "stroke-current text-black dark:text-darkCream";

const AndGate = () => (
  <>
    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="202"
      y="160"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ a_1 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="240"
      y="160"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ b_1 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="210"
      y="310"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ c_1 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="205"
      x2="250"
      y1="200"
      y2="200"
    />
    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="205"
      x2="205"
      y1="200"
      y2="300"
    />

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="225"
      y="220"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ * $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="250"
      x2="250"
      y1="200"
      y2="300"
    />

    <path
      d="M 300,0 A 10,10 0 0,1 300,45"
      fill="none"
      className={strokeClass}
      strokeWidth="0.4"
      transform="rotate(90 125,125)"
    />

    <line
      strokeWidth="0.4"
      className={strokeClass}
      x1="227"
      x2="227"
      y1="322"
      y2="425" // so close
    />
  </>
);

// TODO remove these x and ys
const OrGate = ({ x = 50, y = 50 }: { x?: number; y?: number }) => (
  <>
    <line
      x1="20"
      x2="235"
      y1="10"
      y2="10"
      strokeWidth="0.4"
      className={strokeClass}
    />

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="7"
      y="-15"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ x $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="35"
      y="35"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ a_0 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="35"
      y="95"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ b_0 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="135"
      y="65"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ c_0 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

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
    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="03"
      y="90"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ -1 $$`}</MarkdownWithMaths>{" "}
    </foreignObject>

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

    <foreignObject
      width="100%"
      height="100%"
      className={strokeClass}
      x="75"
      y="75"
      strokeWidth="0.4"
    >
      <MarkdownWithMaths>{`$$ + $$`}</MarkdownWithMaths>
    </foreignObject>

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

      <foreignObject
        width="100%"
        height="100%"
        className={strokeClass}
        x="200"
        y="400"
        strokeWidth="0.4"
      >
        <MarkdownWithMaths>{`$$ 420 $$`}</MarkdownWithMaths>
      </foreignObject>
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
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="26"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 1 $$`}</MarkdownWithMaths>
      </foreignObject>
      {/* QR */}
      <circle
        cx="70"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="66"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 1 $$`}</MarkdownWithMaths>
      </foreignObject>
      {/* QO */}
      <circle
        cx="110"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="100"
        y="15"
      >
        <MarkdownWithMaths>{`$$ -1 $$`}</MarkdownWithMaths>
      </foreignObject>
      {/* QM */}
      <circle
        cx="150"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="140"
        y="15"
      >
        <MarkdownWithMaths>{`$$ -1 $$`}</MarkdownWithMaths>
      </foreignObject>
      <circle
        cx="190"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="186"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 0 $$`}</MarkdownWithMaths>
      </foreignObject>
    </svg>
  </div>
);

const PLONKOrGate = () => (
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
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="26"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 0 $$`}</MarkdownWithMaths>
      </foreignObject>

      {/* QR */}
      <circle
        cx="70"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="66"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 0 $$`}</MarkdownWithMaths>
      </foreignObject>

      {/* QO */}
      <circle
        cx="110"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="100"
        y="15"
      >
        <MarkdownWithMaths>{`$$ -1 $$`}</MarkdownWithMaths>
      </foreignObject>

      {/* QM */}
      <circle
        cx="150"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="146"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 1 $$`}</MarkdownWithMaths>
      </foreignObject>

      <circle
        cx="190"
        cy="40"
        r="15"
        fill="none"
        className="fill-black dark:fill-darkCream"
        strokeWidth="0.4"
      />
      <foreignObject
        width="100%"
        height="100%"
        className="text-darkCream dark:text-black"
        x="186"
        y="15"
      >
        <MarkdownWithMaths>{`$$ 0 $$`}</MarkdownWithMaths>
      </foreignObject>

      <foreignObject
        width="100%"
        height="100%"
        className="text-black dark:text-darkCream"
        x="226"
        y="15"
      >
        <MarkdownWithMaths>{`$$ = 0 $$`}</MarkdownWithMaths>
      </foreignObject>
    </svg>
  </div>
);

export { AndGate, OrGate, FullCircuit, PLONKAndGate, PLONKOrGate };
