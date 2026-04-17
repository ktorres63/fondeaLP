interface Props {
  value: number // 0–1
}

export default function CreditGauge({ value }: Props) {
  const cx = 100, cy = 100, r = 72, sw = 20
  const angle = -180 + value * 180
  const rad   = (angle * Math.PI) / 180
  const nx    = cx + 58 * Math.cos(rad)
  const ny    = cy + 58 * Math.sin(rad)

  return (
    <svg viewBox="0 0 200 108" width="180" height="98" aria-hidden="true">
      <defs>
        <linearGradient id="lc-gauge-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="var(--lc-gauge-low)" />
          <stop offset="38%"  stopColor="var(--lc-gauge-mid-low)" />
          <stop offset="62%"  stopColor="var(--lc-gauge-mid)" />
          <stop offset="100%" stopColor="var(--lc-gauge-high)" />
        </linearGradient>
        <clipPath id="lc-gauge-clip">
          <rect x="0" y="0" width="200" height="108" />
        </clipPath>
      </defs>
      {/* Track */}
      <path d={arc(cx, cy, r, -180, 0)} fill="none"
        stroke="#e5e5e5" strokeWidth={sw} strokeLinecap="round"
        clipPath="url(#lc-gauge-clip)" />
      {/* Color arc */}
      <path d={arc(cx, cy, r, -180, 0)} fill="none"
        stroke="url(#lc-gauge-grad)" strokeWidth={sw} strokeLinecap="round"
        clipPath="url(#lc-gauge-clip)" />
      {/* Needle */}
      <line x1={cx} y1={cy} x2={nx} y2={ny}
        stroke="var(--lc-text)" strokeWidth={3} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={7} fill="var(--lc-text)" />
      <circle cx={cx} cy={cy} r={3} fill="white" />
    </svg>
  )
}

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) }
}

function arc(cx: number, cy: number, r: number, a1: number, a2: number) {
  const s = polar(cx, cy, r, a2)
  const e = polar(cx, cy, r, a1)
  return `M ${s.x} ${s.y} A ${r} ${r} 0 0 0 ${e.x} ${e.y}`
}
