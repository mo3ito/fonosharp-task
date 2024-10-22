export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)]">
      <svg
        className="size-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        style={{
          shapeRendering: "auto",
          display: "block",
          background: "transparent",
        }}
      >
        <g>
          <circle
            strokeLinecap="round"
            fill="none"
            strokeDasharray="50.26548245743669 50.26548245743669"
            stroke="#FCD535"
            strokeWidth="8"
            r="32"
            cy="50"
            cx="50"
          >
            <animateTransform
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              dur="1s"
              repeatCount="indefinite"
              type="rotate"
              attributeName="transform"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
