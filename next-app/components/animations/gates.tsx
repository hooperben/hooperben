import MarkdownWithMaths from "../markdown/markdown-with-maths";

const strokeClass = "stroke-current text-black dark:text-darkCream";

interface GateProps {
  x: number;
  y: number;
  inputNumber: number;
  aInputHeight?: number;
  bInputHeight?: number;
  cOutputHeight?: number;
}

const OrGate = ({
  x,
  y,
  inputNumber = 0,
  aInputHeight = 10,
  bInputHeight = 10,
  cOutputHeight = 10,
}: GateProps) => (
  <>
    {/* top of the gate */}
    <line
      x1={x}
      x2={x + 40}
      y1={y}
      y2={y}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* left side of the gate */}
    <line
      x1={x}
      x2={x + 20}
      y1={y}
      y2={y + 60}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* right side of the gate */}
    <line
      x1={x + 40}
      x2={x + 20}
      y1={y}
      y2={y + 60}
      strokeWidth="0.4"
      className={strokeClass}
    />

    {/* left input for the gate */}
    <line
      x1={x + 10}
      x2={x + 10}
      y1={y - aInputHeight}
      y2={y}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* right input for the gate */}
    <line
      x1={x + 30}
      x2={x + 30}
      y1={y - bInputHeight}
      y2={y}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* the output of the gate */}
    <line
      x1={x + 20}
      x2={x + 20}
      y1={y + 60}
      y2={y + 60 + cOutputHeight}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* the labels of the gate */}
    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x - 6}
      y={y - 32}
    >
      <MarkdownWithMaths>{`$$ a_${inputNumber} $$`}</MarkdownWithMaths>
    </foreignObject>

    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x + 34}
      y={y - 32}
    >
      <MarkdownWithMaths>{`$$ b_${inputNumber} $$`}</MarkdownWithMaths>
    </foreignObject>

    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x + 8}
      y={y + 40}
    >
      <MarkdownWithMaths>{`$$ c_${inputNumber} $$`}</MarkdownWithMaths>
    </foreignObject>

    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x + 15}
      y={y - 6}
    >
      <MarkdownWithMaths>{`$$ + $$`}</MarkdownWithMaths>
    </foreignObject>
  </>
);

const AndGate = ({
  x,
  y,
  inputNumber = 0,
  aInputHeight = 10,
  bInputHeight = 10,
  cOutputHeight = 10,
}: GateProps) => (
  <>
    {/* the top of the gate */}
    <line
      x1={x}
      x2={x + 40}
      y1={y}
      y2={y}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* the left side of the gate */}
    <line
      x1={x}
      x2={x}
      y1={y}
      y2={y + 60}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* the right side of the gate */}
    <line
      x1={x + 40}
      x2={x + 40}
      y1={y}
      y2={y + 60}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* the arc of the gate (bottom) */}
    <path
      // x,y A rx,ry x-axis-rotation large-arc-flag,sweep-flag x,y
      d={`M ${x},${y + 60} A 10,10 0 0,1 ${x + 40},${y + 60}`}
      fill="none"
      className={strokeClass}
      strokeWidth="0.4"
      transform={`rotate(180 ${x + 20},${y + 60})`}
    />

    {/* the inputs of the gate */}
    <line
      x1={x + 10}
      x2={x + 10}
      y1={y - aInputHeight}
      y2={y}
      strokeWidth="0.4"
      className={strokeClass}
    />
    <line
      x1={x + 30}
      x2={x + 30}
      y1={y - bInputHeight}
      y2={y}
      strokeWidth="0.4"
      className={strokeClass}
    />
    {/* the output of the gate */}
    <line
      x1={x + 20}
      x2={x + 20}
      y1={y + 80}
      y2={y + 80 + cOutputHeight}
      strokeWidth="0.4"
      className={strokeClass}
    />

    {/* the labels of the gate */}
    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x - 6}
      y={y - 32}
    >
      <MarkdownWithMaths>{`$$ a_${inputNumber} $$`}</MarkdownWithMaths>
    </foreignObject>

    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x + 34}
      y={y - 32}
    >
      <MarkdownWithMaths>{`$$ b_${inputNumber} $$`}</MarkdownWithMaths>
    </foreignObject>

    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x + 8}
      y={y + 62}
    >
      <MarkdownWithMaths>{`$$ c_${inputNumber} $$`}</MarkdownWithMaths>
    </foreignObject>

    <foreignObject
      width={100}
      height={100}
      style={{ fontSize: "10px" }}
      className="stroke-current text-black dark:text-darkCream"
      x={x + 18}
      y={y + 10}
    >
      <MarkdownWithMaths>{`$$ * $$`}</MarkdownWithMaths>
    </foreignObject>
  </>
);

const FullCircuit = () => (
  <div className="text-black dark:text-darkCream">
    <svg baseProfile="full" height="500" version="1.1" width="400">
      <polygon
        points="30,30 300,30 300,30 300,450 300,450 30,450 30,450 30,30"
        fill="none"
        className="stroke-current text-black dark:text-darkCream"
        strokeLinejoin="round"
        strokeWidth="0.4"
      />

      <foreignObject
        width={100}
        height={100}
        className={strokeClass}
        x="10"
        y="20"
        strokeWidth="0.4"
      >
        <MarkdownWithMaths>{`$$ x $$`}</MarkdownWithMaths>
      </foreignObject>

      <foreignObject
        width={100}
        height={100}
        className={strokeClass}
        x="10"
        y="282"
        strokeWidth="0.4"
      >
        <MarkdownWithMaths>{`$$ 4 $$`}</MarkdownWithMaths>
      </foreignObject>

      <foreignObject
        width={50}
        height={50}
        className={strokeClass}
        x="162"
        y="-15"
        strokeWidth="0.4"
      >
        <MarkdownWithMaths>{`$$ 10 $$`}</MarkdownWithMaths>
      </foreignObject>

      {/* x inputs */}
      <line
        x1="20"
        x2="150"
        y1="50"
        y2="50"
        strokeWidth="0.4"
        className={strokeClass}
      />
      <AndGate
        x={60}
        y={80}
        inputNumber={0}
        aInputHeight={30}
        bInputHeight={30}
        cOutputHeight={30}
      />
      <AndGate
        x={140}
        y={80}
        inputNumber={1}
        aInputHeight={30}
        bInputHeight={60}
        cOutputHeight={30}
      />

      {/* lines from and gate outputs to first or gate */}
      <line
        x1="80"
        x2="110"
        y1="190"
        y2="190"
        strokeWidth="0.4"
        className={strokeClass}
      />
      <line
        x1="130"
        x2="160"
        y1="190"
        y2="190"
        strokeWidth="0.4"
        className={strokeClass}
      />

      <OrGate
        x={100}
        y={230}
        inputNumber={2}
        aInputHeight={40}
        bInputHeight={40}
        cOutputHeight={20}
      />

      <OrGate
        x={90}
        y={340}
        inputNumber={3}
        aInputHeight={30}
        bInputHeight={30}
        cOutputHeight={60}
      />

      <line
        x1="20"
        x2="100"
        y1="310"
        y2="310"
        strokeWidth="0.4"
        className={strokeClass}
      />

      <foreignObject
        width="100%"
        height="100%"
        className={strokeClass}
        x="100"
        y="445"
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

export { FullCircuit, PLONKAndGate, PLONKOrGate };
