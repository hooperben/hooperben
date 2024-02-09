const strokeClass = "stroke-current text-black dark:text-darkCream";

const TheCave = ({
  isValid,
  incorrect,
}: {
  isValid?: boolean;
  incorrect?: boolean;
}) => (
  <div className="flex justify-center w-full">
    <svg
      baseProfile="full"
      height="100"
      version="1.1"
      width={isValid || incorrect ? "120" : "100"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs />
      <circle cx="50" cy="50" fill="none" r="40" className={strokeClass} />
      <circle cx="50" cy="50" fill="none" r="20" className={strokeClass} />

      <rect
        x={50 - 16}
        y="-30"
        width={32}
        height="50"
        className="fill-darkCream dark:fill-black"
        strokeWidth={0}
      />
      {isValid && (
        <>
          <line
            className="stroke-current green-500 dark:green-500"
            color="green"
            x1="55"
            x2="55"
            y1="-10"
            y2="20"
          />
          <path
            d="M 55 20 A 30 30 0 0 1 50 80"
            fill="none"
            className="stroke-current green-500 dark:green-500"
            color="green"
          />
          <path
            d="M 50 80 A 30 30 0 0 1 47 20"
            fill="none"
            className="stroke-current green-500 dark:green-500"
            color="green"
          />

          <line
            className="stroke-current green-500 dark:green-500"
            color="green"
            x1="45"
            x2="47"
            y1="-10"
            y2="20"
          />
        </>
      )}

      {incorrect && (
        <>
          <line
            className="stroke-current red-500 dark:red-500"
            color="red"
            x1="55"
            x2="55"
            y1="-10"
            y2="20"
          />
          <path
            d="M 55 20 A 30 30 0 0 1 50 80"
            fill="none"
            className="stroke-current red-500 dark:red-500"
            color="red"
          />

          <path
            d="M 50 13 A 27 30 0 0 1 50 80"
            fill="none"
            className="stroke-current red-500 dark:red-500"
            color="#FF7373"
          />
          <line
            className="stroke-current red-500 dark:red-500"
            color="#FF7373"
            x1="50"
            x2="40"
            y1="13"
            y2="0"
          />
        </>
      )}

      <line className={strokeClass} x1="34" x2="34" y1="-30" y2="14" />
      <line className={strokeClass} x1="66" x2="66" y1="-30" y2="14" />

      {!isValid && (
        <line stroke="brown" x1="50" x2="50" y1="70" y2="90" stroke-width="4" />
      )}

      {isValid && (
        <line
          className="stroke-current green-500 dark:green-500"
          color="green"
          x1="30"
          x2="50"
          y1="85"
          y2="90"
          strokeWidth="4"
        />
      )}
    </svg>
  </div>
);

export default TheCave;
