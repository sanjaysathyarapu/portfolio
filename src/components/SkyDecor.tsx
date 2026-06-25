/** Soft cloud built from overlapping ellipses */
function Cloud({
  x,
  y,
  scale = 1,
  opacity = 0.08,
}: {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      <ellipse cx="0" cy="8" rx="52" ry="20" fill="var(--color-ink)" />
      <ellipse cx="-28" cy="14" rx="34" ry="16" fill="var(--color-ink)" />
      <ellipse cx="30" cy="12" rx="38" ry="18" fill="var(--color-ink)" />
      <ellipse cx="12" cy="2" rx="30" ry="18" fill="var(--color-ink)" />
    </g>
  );
}

function Star({
  cx,
  cy,
  size,
  opacity,
}: {
  cx: number;
  cy: number;
  size: number;
  opacity: number;
}) {
  const s = size;
  return (
    <path
      d={`M${cx} ${cy - s} L${cx + s * 0.28} ${cy - s * 0.28} L${cx + s} ${cy} L${cx + s * 0.28} ${cy + s * 0.28} L${cx} ${cy + s} L${cx - s * 0.28} ${cy + s * 0.28} L${cx - s} ${cy} L${cx - s * 0.28} ${cy - s * 0.28} Z`}
      fill="var(--color-ink)"
      opacity={opacity}
    />
  );
}

const SKY_VIEW = "0 0 1440 400";

const sunX = 1120;
const sunY = 72;
const moonX = 1120;
const moonY = 72;

function DayBackdrop() {
  return (
    <svg
      className="sky-decor-day absolute inset-0 h-full w-full"
      viewBox={SKY_VIEW}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="day-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.04" />
          <stop offset="50%" stopColor="var(--color-accent)" stopOpacity="0.015" />
          <stop offset="100%" stopColor="var(--color-canvas)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1440" height="400" fill="url(#day-sky)" />
      <Cloud x={180} y={140} scale={1.1} opacity={0.035} />
      <Cloud x={420} y={175} scale={0.9} opacity={0.03} />
      <Cloud x={680} y={130} scale={1.25} opacity={0.035} />
      <Cloud x={900} y={200} scale={0.85} opacity={0.028} />
      <Cloud x={1120} y={240} scale={1} opacity={0.03} />
      <Cloud x={60} y={230} scale={0.75} opacity={0.025} />
      <Cloud x={300} y={270} scale={0.9} opacity={0.022} />
      <Cloud x={550} y={250} scale={1.05} opacity={0.028} />
      <Cloud x={780} y={290} scale={0.8} opacity={0.024} />
      <Cloud x={1000} y={310} scale={0.95} opacity={0.026} />
      <Cloud x={1280} y={260} scale={0.7} opacity={0.022} />
    </svg>
  );
}

function NightBackdrop() {
  const dotStars = [
    [120, 65, 1.8], [210, 100, 1.4], [340, 52, 1.8], [480, 88, 1.1],
    [560, 45, 1.6], [720, 72, 1.8], [840, 58, 1.3], [960, 98, 1.4],
    [1040, 48, 1.8], [1180, 82, 1.2], [1320, 62, 1.5], [200, 170, 1.1],
    [380, 150, 1.3], [620, 185, 1.2], [780, 165, 1.5], [920, 200, 1.1],
    [1100, 175, 1.3], [1300, 190, 1.4], [90, 130, 1.2],
  ] as const;

  const brightStars = [
    [280, 80, 4, 0.18], [520, 55, 3.5, 0.15], [750, 105, 4, 0.16],
    [1020, 65, 4, 0.17], [1250, 95, 3.5, 0.14], [450, 140, 3, 0.13],
  ] as const;

  return (
    <svg
      className="sky-decor-night absolute inset-0 h-full w-full"
      viewBox={SKY_VIEW}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="night-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.06" />
          <stop offset="45%" stopColor="var(--color-accent)" stopOpacity="0.02" />
          <stop offset="100%" stopColor="var(--color-canvas)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="1440" height="400" fill="url(#night-sky)" />
      {dotStars.map(([cx, cy, r], i) => (
        <circle
          key={`dot-${i}`}
          cx={cx}
          cy={cy}
          r={r}
          fill="var(--color-ink)"
          opacity={0.14 + (i % 3) * 0.04}
        />
      ))}
      {brightStars.map(([cx, cy, size, opacity], i) => (
        <Star key={`star-${i}`} cx={cx} cy={cy} size={size} opacity={opacity} />
      ))}
      <ellipse cx={350} cy={190} rx="120" ry="18" fill="var(--color-ink)" opacity="0.025" />
      <ellipse cx={700} cy={220} rx="100" ry="14" fill="var(--color-ink)" opacity="0.02" />
    </svg>
  );
}

function Sun() {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 30 * Math.PI) / 180;
    const x1 = sunX + Math.cos(angle) * 30;
    const y1 = sunY + Math.sin(angle) * 30;
    const x2 = sunX + Math.cos(angle) * 48;
    const y2 = sunY + Math.sin(angle) * 48;
    return { x1, y1, x2, y2 };
  });

  return (
    <svg
      className="sky-celestial sky-sun absolute inset-0 h-full w-full"
      viewBox={SKY_VIEW}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
          <stop offset="60%" stopColor="var(--color-accent)" stopOpacity="0.04" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g opacity="0.06">
        {rays.map((ray, i) => (
          <line
            key={i}
            x1={ray.x1}
            y1={ray.y1}
            x2={ray.x2}
            y2={ray.y2}
            stroke="var(--color-accent)"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        ))}
      </g>
      <circle cx={sunX} cy={sunY} r="58" fill="url(#sun-glow)" />
      <circle cx={sunX} cy={sunY} r="20" fill="var(--color-accent)" opacity="0.08" />
      <circle cx={sunX} cy={sunY} r="14" fill="var(--color-accent)" opacity="0.1" />
    </svg>
  );
}

function Moon() {
  return (
    <svg
      className="sky-celestial sky-moon absolute inset-0 h-full w-full"
      viewBox={SKY_VIEW}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="moon-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
          <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
        </radialGradient>
        <mask id="moon-mask">
          <rect width="1440" height="400" fill="white" />
          <circle cx={moonX + 28} cy={moonY - 14} r="36" fill="black" />
        </mask>
      </defs>
      <circle cx={moonX} cy={moonY} r="58" fill="url(#moon-glow)" />
      <circle
        cx={moonX}
        cy={moonY}
        r="40"
        fill="var(--color-accent)"
        opacity="0.1"
        mask="url(#moon-mask)"
      />
    </svg>
  );
}

export function SkyDecor() {
  return (
    <div
      className="sky-decor pointer-events-none fixed inset-x-0 top-0 z-0 h-[min(62vh,560px)] overflow-hidden"
      aria-hidden="true"
    >
      <DayBackdrop />
      <NightBackdrop />
      <div className="sky-celestial-layer absolute inset-x-0 bottom-0 overflow-hidden">
        <Sun />
        <Moon />
      </div>
    </div>
  );
}
