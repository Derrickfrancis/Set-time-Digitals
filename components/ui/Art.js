// Original illustrations drawn in the brand colours. They are decorative, so they are hidden
// from screen readers. Each one is drawn on a 400 x 300 canvas over a gradient background.
//
// Programs: frontend, backend, uiux, fullstack, marketing, data, bootcamp, graphics, cybersecurity
// Articles: roadmap, password, storefront, checklist
// default: used when a name is not found

const art = {
  frontend: {
    bg: "from-brand-purple to-brand-teal",
    draw: (
      <>
        <rect x="60" y="48" width="280" height="204" rx="14" fill="#fff" />
        <rect x="60" y="48" width="280" height="30" rx="14" fill="#E6DCEA" />
        <rect x="60" y="64" width="280" height="14" fill="#E6DCEA" />
        <circle cx="78" cy="63" r="5" fill="#681D70" />
        <circle cx="94" cy="63" r="5" fill="#D3AC4D" />
        <circle cx="110" cy="63" r="5" fill="#04A75A" />
        <rect x="78" y="92" width="244" height="64" rx="8" fill="#681D70" />
        <rect x="92" y="106" width="120" height="10" rx="5" fill="#fff" />
        <rect
          x="92"
          y="124"
          width="80"
          height="8"
          rx="4"
          fill="#fff"
          opacity=".6"
        />
        <rect x="92" y="138" width="46" height="10" rx="5" fill="#D3AC4D" />
        <rect x="78" y="168" width="76" height="68" rx="8" fill="#D3AC4D" />
        <rect x="162" y="168" width="76" height="68" rx="8" fill="#88BD32" />
        <rect x="246" y="168" width="76" height="68" rx="8" fill="#1D5D53" />
        <path
          d="M258 196 L258 246 L272 234 L282 256 L292 251 L282 230 L300 230 Z"
          fill="#1E1022"
          stroke="#fff"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  backend: {
    bg: "from-brand-teal to-[#0f3a33]",
    draw: (
      <>
        {[60, 120, 180].map((y, i) => (
          <g key={y}>
            <rect x="70" y={y} width="170" height="46" rx="10" fill="#fff" />
            <circle
              cx="92"
              cy={y + 23}
              r="6"
              fill={i === 1 ? "#D3AC4D" : "#88BD32"}
            />
            <circle
              cx="112"
              cy={y + 23}
              r="6"
              fill={i === 2 ? "#D3AC4D" : "#88BD32"}
            />
            <rect
              x="140"
              y={y + 17}
              width="80"
              height="12"
              rx="6"
              fill="#E6DCEA"
            />
          </g>
        ))}
        <path
          d="M240 83 H258 V145 H273"
          stroke="#88BD32"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 8"
        />
        <path
          d="M240 143 H273"
          stroke="#88BD32"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 8"
        />
        <path
          d="M240 203 H258 V145"
          stroke="#88BD32"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 8"
        />
        <path d="M273 100 V190 A42 14 0 0 0 357 190 V100 Z" fill="#D3AC4D" />
        <path
          d="M273 130 A42 14 0 0 0 357 130 M273 160 A42 14 0 0 0 357 160"
          stroke="#1D5D53"
          strokeWidth="3"
          fill="none"
        />
        <ellipse cx="315" cy="100" rx="42" ry="14" fill="#E8C877" />
      </>
    ),
  },
  uiux: {
    bg: "from-brand-purple to-[#3a1240]",
    draw: (
      <>
        <rect x="140" y="36" width="130" height="228" rx="22" fill="#fff" />
        <rect x="196" y="46" width="18" height="5" rx="2.5" fill="#E6DCEA" />
        <rect x="154" y="64" width="102" height="14" rx="7" fill="#681D70" />
        <rect x="154" y="88" width="102" height="64" rx="10" fill="#E6DCEA" />
        <circle cx="182" cy="112" r="12" fill="#D3AC4D" />
        <path
          d="M154 152 L190 122 L214 140 L232 128 L256 152 Z"
          fill="#88BD32"
        />
        <rect
          x="154"
          y="164"
          width="84"
          height="8"
          rx="4"
          fill="#1E1022"
          opacity=".7"
        />
        <rect
          x="154"
          y="180"
          width="60"
          height="8"
          rx="4"
          fill="#1E1022"
          opacity=".35"
        />
        <rect x="154" y="204" width="102" height="30" rx="15" fill="#1D5D53" />
        <path
          d="M40 230 C70 120 110 120 140 190"
          stroke="#D3AC4D"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M40 230 L70 120 M140 190 L110 120"
          stroke="#fff"
          strokeWidth="2"
          opacity=".7"
        />
        <circle cx="70" cy="120" r="5" fill="#fff" />
        <circle cx="110" cy="120" r="5" fill="#fff" />
        <rect
          x="34"
          y="224"
          width="12"
          height="12"
          fill="#fff"
          stroke="#681D70"
          strokeWidth="2"
        />
        <rect
          x="134"
          y="184"
          width="12"
          height="12"
          fill="#fff"
          stroke="#681D70"
          strokeWidth="2"
        />
        <circle
          cx="322"
          cy="80"
          r="16"
          fill="#D3AC4D"
          stroke="#fff"
          strokeWidth="4"
        />
        <circle
          cx="322"
          cy="124"
          r="16"
          fill="#88BD32"
          stroke="#fff"
          strokeWidth="4"
        />
        <circle
          cx="322"
          cy="168"
          r="16"
          fill="#3FA899"
          stroke="#fff"
          strokeWidth="4"
        />
      </>
    ),
  },
  fullstack: {
    bg: "from-brand-purple to-brand-teal",
    draw: (
      <>
        <rect x="70" y="190" width="260" height="56" rx="14" fill="#3FA899" />
        <ellipse cx="110" cy="206" rx="16" ry="6" fill="#fff" />
        <path d="M94 206 V222 A16 6 0 0 0 126 222 V206 Z" fill="#fff" />
        <ellipse cx="110" cy="206" rx="16" ry="6" fill="#E6DCEA" />
        <rect
          x="146"
          y="211"
          width="150"
          height="10"
          rx="5"
          fill="#fff"
          opacity=".65"
        />
        <rect
          x="146"
          y="226"
          width="96"
          height="8"
          rx="4"
          fill="#fff"
          opacity=".4"
        />
        <rect x="95" y="124" width="210" height="56" rx="14" fill="#88BD32" />
        <polyline
          points="130,140 116,152 130,164"
          fill="none"
          stroke="#1E1022"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="156"
          y1="138"
          x2="146"
          y2="166"
          stroke="#1E1022"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <polyline
          points="172,140 186,152 172,164"
          fill="none"
          stroke="#1E1022"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="208"
          y="146"
          width="78"
          height="10"
          rx="5"
          fill="#1E1022"
          opacity=".35"
        />
        <rect x="120" y="58" width="160" height="56" rx="14" fill="#D3AC4D" />
        <rect x="140" y="72" width="48" height="28" rx="5" fill="#fff" />
        <rect x="140" y="72" width="48" height="8" rx="4" fill="#681D70" />
        <rect
          x="202"
          y="76"
          width="62"
          height="8"
          rx="4"
          fill="#1E1022"
          opacity=".45"
        />
        <rect
          x="202"
          y="90"
          width="40"
          height="8"
          rx="4"
          fill="#1E1022"
          opacity=".3"
        />
        <path
          d="M200 116 V122 M200 182 V188"
          stroke="#fff"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </>
    ),
  },
  marketing: {
    bg: "from-brand-purple to-[#3a1240]",
    draw: (
      <>
        <polygon points="70,128 190,78 190,222 70,172" fill="#D3AC4D" />
        <rect x="46" y="128" width="30" height="44" rx="8" fill="#E8C877" />
        <path d="M92 176 L110 232 H138 L124 168 Z" fill="#B8923A" />
        <ellipse cx="190" cy="150" rx="14" ry="72" fill="#E8C877" />
        <path
          d="M218 112 Q240 150 218 188"
          stroke="#88BD32"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M240 92 Q274 150 240 208"
          stroke="#88BD32"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity=".7"
        />
        <rect x="290" y="190" width="22" height="50" rx="5" fill="#fff" />
        <rect
          x="320"
          y="160"
          width="22"
          height="80"
          rx="5"
          fill="#fff"
          opacity=".85"
        />
        <rect x="350" y="120" width="22" height="120" rx="5" fill="#88BD32" />
        <path
          d="M290 172 L322 140 L342 152 L366 96"
          stroke="#fff"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="368,86 378,106 356,102" fill="#fff" />
      </>
    ),
  },
  data: {
    bg: "from-brand-teal to-[#0f3a33]",
    draw: (
      <>
        <rect x="50" y="46" width="300" height="208" rx="16" fill="#fff" />
        <rect x="76" y="166" width="26" height="62" rx="5" fill="#681D70" />
        <rect x="112" y="136" width="26" height="92" rx="5" fill="#1D5D53" />
        <rect x="148" y="150" width="26" height="78" rx="5" fill="#D3AC4D" />
        <rect x="184" y="108" width="26" height="120" rx="5" fill="#88BD32" />
        <rect x="70" y="228" width="150" height="3" fill="#E6DCEA" />
        <polyline
          points="89,150 125,120 161,134 197,92"
          fill="none"
          stroke="#1E1022"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {[
          [89, 150],
          [125, 120],
          [161, 134],
          [197, 92],
        ].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5" fill="#1E1022" />
        ))}
        <g transform="rotate(-90 290 120)" fill="none" strokeWidth="22">
          <circle cx="290" cy="120" r="40" stroke="#E6DCEA" />
          <circle
            cx="290"
            cy="120"
            r="40"
            stroke="#681D70"
            strokeDasharray="100 252"
          />
          <circle
            cx="290"
            cy="120"
            r="40"
            stroke="#D3AC4D"
            strokeDasharray="62 252"
            strokeDashoffset="-100"
          />
          <circle
            cx="290"
            cy="120"
            r="40"
            stroke="#88BD32"
            strokeDasharray="50 252"
            strokeDashoffset="-162"
          />
        </g>
        <rect x="252" y="190" width="70" height="8" rx="4" fill="#E6DCEA" />
        <rect x="252" y="206" width="48" height="8" rx="4" fill="#E6DCEA" />
      </>
    ),
  },
  bootcamp: {
    bg: "from-brand-purple to-brand-gold",
    draw: (
      <>
        <circle cx="300" cy="86" r="34" fill="#FBE9B0" />
        <g stroke="#FBE9B0" strokeWidth="6" strokeLinecap="round">
          <path d="M346 86 H360 M332.5 118.5 L342.4 128.4 M300 132 V146 M267.5 118.5 L257.6 128.4 M254 86 H240 M267.5 53.5 L257.6 43.6 M300 40 V26 M332.5 53.5 L342.4 43.6" />
        </g>
        <rect x="86" y="110" width="200" height="124" rx="12" fill="#1E1022" />
        <rect x="98" y="122" width="176" height="100" rx="6" fill="#2A1631" />
        <rect x="112" y="136" width="50" height="8" rx="4" fill="#88BD32" />
        <rect
          x="170"
          y="136"
          width="70"
          height="8"
          rx="4"
          fill="#fff"
          opacity=".7"
        />
        <rect x="126" y="154" width="84" height="8" rx="4" fill="#D3AC4D" />
        <rect
          x="126"
          y="172"
          width="60"
          height="8"
          rx="4"
          fill="#fff"
          opacity=".7"
        />
        <rect x="112" y="190" width="40" height="8" rx="4" fill="#88BD32" />
        <rect
          x="160"
          y="190"
          width="80"
          height="8"
          rx="4"
          fill="#fff"
          opacity=".7"
        />
        <path d="M60 234 H312 L300 252 H72 Z" fill="#E6DCEA" />
        <rect x="160" y="236" width="52" height="6" rx="3" fill="#B9A8C1" />
      </>
    ),
  },
  graphics: {
    bg: "from-brand-teal to-brand-purple",
    draw: (
      <>
        <rect x="70" y="40" width="250" height="190" rx="12" fill="#fff" />
        <circle cx="140" cy="108" r="36" fill="#D3AC4D" />
        <rect
          x="170"
          y="86"
          width="80"
          height="80"
          rx="14"
          fill="#681D70"
          transform="rotate(12 210 126)"
        />
        <polygon points="240,160 270,110 300,160" fill="#88BD32" />
        <path
          d="M92 202 C130 136 190 246 226 182"
          stroke="#1D5D53"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M92 202 L130 136 M226 182 L190 246"
          stroke="#1D5D53"
          strokeWidth="2"
          opacity=".6"
        />
        <circle cx="130" cy="136" r="4" fill="#1D5D53" />
        <circle cx="190" cy="246" r="4" fill="#1D5D53" />
        <rect
          x="86"
          y="196"
          width="12"
          height="12"
          fill="#fff"
          stroke="#1D5D53"
          strokeWidth="2.5"
        />
        <rect
          x="220"
          y="176"
          width="12"
          height="12"
          fill="#fff"
          stroke="#1D5D53"
          strokeWidth="2.5"
        />
        <circle
          cx="356"
          cy="76"
          r="14"
          fill="#D3AC4D"
          stroke="#fff"
          strokeWidth="4"
        />
        <circle
          cx="356"
          cy="116"
          r="14"
          fill="#88BD32"
          stroke="#fff"
          strokeWidth="4"
        />
        <circle
          cx="356"
          cy="156"
          r="14"
          fill="#3FA899"
          stroke="#fff"
          strokeWidth="4"
        />
        <circle
          cx="356"
          cy="196"
          r="14"
          fill="#fff"
          stroke="#fff"
          strokeWidth="4"
        />
      </>
    ),
  },
  cybersecurity: {
    bg: "from-[#0f3a33] to-brand-purple",
    draw: (
      <>
        <path
          d="M40 110 H80 V150 H100"
          stroke="#3FA899"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M360 110 H320 V170 H300"
          stroke="#3FA899"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M60 222 H110 V196"
          stroke="#3FA899"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M340 232 H290 V206"
          stroke="#3FA899"
          strokeWidth="4"
          fill="none"
        />
        <circle cx="40" cy="110" r="7" fill="#D3AC4D" />
        <circle cx="360" cy="110" r="7" fill="#D3AC4D" />
        <circle cx="60" cy="222" r="7" fill="#88BD32" />
        <circle cx="340" cy="232" r="7" fill="#88BD32" />
        <path
          d="M200 36 L300 70 V150 C300 206 256 244 200 266 C144 244 100 206 100 150 V70 Z"
          fill="#fff"
        />
        <path
          d="M200 56 L284 84 V150 C284 196 248 228 200 246 C152 228 116 196 116 150 V84 Z"
          fill="#1D5D53"
        />
        <polyline
          points="160,150 190,180 244,118"
          fill="none"
          stroke="#88BD32"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  roadmap: {
    bg: "from-brand-purple to-brand-teal",
    draw: (
      <>
        <path
          d="M50 240 C120 240 120 170 200 170 S280 100 330 90"
          stroke="#fff"
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="2 14"
        />
        <circle cx="50" cy="240" r="16" fill="#D3AC4D" />
        <circle cx="200" cy="170" r="16" fill="#88BD32" />
        <circle cx="330" cy="90" r="16" fill="#fff" />
        <path
          d="M330 74 V30"
          stroke="#fff"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <polygon points="333,30 378,46 333,62" fill="#D3AC4D" />
        <rect x="70" y="60" width="110" height="64" rx="10" fill="#fff" />
        <polyline
          points="92,82 80,92 92,102"
          fill="none"
          stroke="#681D70"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="158,82 170,92 158,102"
          fill="none"
          stroke="#681D70"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <line
          x1="130"
          y1="78"
          x2="120"
          y2="106"
          stroke="#D3AC4D"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="270" cy="220" r="4" fill="#fff" opacity=".5" />
        <circle cx="310" cy="190" r="3" fill="#fff" opacity=".5" />
        <circle cx="100" cy="190" r="3" fill="#fff" opacity=".5" />
      </>
    ),
  },
  password: {
    bg: "from-brand-teal to-brand-purple",
    draw: (
      <>
        <rect x="120" y="130" width="160" height="120" rx="20" fill="#D3AC4D" />
        <path
          d="M150 130 V100 a50 50 0 0 1 100 0 V130"
          fill="none"
          stroke="#fff"
          strokeWidth="18"
          strokeLinecap="round"
        />
        <circle cx="200" cy="182" r="16" fill="#1E1022" />
        <rect x="194" y="188" width="12" height="32" rx="6" fill="#1E1022" />
        <rect x="250" y="40" width="130" height="40" rx="10" fill="#fff" />
        {[272, 292, 312, 332, 352].map((x) => (
          <circle key={x} cx={x} cy="60" r="6" fill="#681D70" />
        ))}
        <rect x="30" y="206" width="90" height="48" rx="10" fill="#fff" />
        {[42, 58, 74, 90].map((x) => (
          <rect
            key={x}
            x={x}
            y="222"
            width="12"
            height="18"
            rx="3"
            fill="#88BD32"
          />
        ))}
      </>
    ),
  },
  storefront: {
    bg: "from-brand-teal to-brand-purple",
    draw: (
      <>
        <rect x="80" y="120" width="240" height="130" rx="6" fill="#E6DCEA" />
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const x = 70 + i * 43.33;
          const colour = i % 2 === 0 ? "#D3AC4D" : "#fff";
          return (
            <g key={i} fill={colour}>
              <rect x={x} y="84" width="43.4" height="40" />
              <circle cx={x + 21.67} cy="124" r="21.67" />
            </g>
          );
        })}
        <rect x="170" y="176" width="60" height="74" rx="6" fill="#1D5D53" />
        <circle cx="218" cy="214" r="4" fill="#D3AC4D" />
        <rect x="100" y="158" width="56" height="56" rx="6" fill="#fff" />
        <rect x="244" y="158" width="56" height="56" rx="6" fill="#fff" />
        <rect x="150" y="44" width="100" height="28" rx="8" fill="#fff" />
        <rect x="164" y="54" width="72" height="8" rx="4" fill="#681D70" />
        <rect
          x="50"
          y="250"
          width="300"
          height="8"
          rx="4"
          fill="#E6DCEA"
          opacity=".6"
        />
      </>
    ),
  },
  checklist: {
    bg: "from-brand-purple to-brand-teal",
    draw: (
      <>
        <rect x="100" y="48" width="200" height="220" rx="16" fill="#fff" />
        <rect x="160" y="34" width="80" height="30" rx="10" fill="#D3AC4D" />
        {[92, 132, 172, 212].map((y, i) => (
          <g key={y}>
            {i < 3 ? (
              <>
                <rect
                  x="124"
                  y={y}
                  width="26"
                  height="26"
                  rx="7"
                  fill="#88BD32"
                />
                <polyline
                  points={`130,${y + 13} 136,${y + 19} 145,${y + 8}`}
                  fill="none"
                  stroke="#fff"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            ) : (
              <rect
                x="125"
                y={y + 1}
                width="24"
                height="24"
                rx="6"
                fill="none"
                stroke="#1E1022"
                strokeWidth="3"
                opacity=".5"
              />
            )}
            <rect
              x="164"
              y={y + 4}
              width={110 - i * 12}
              height="8"
              rx="4"
              fill="#1E1022"
              opacity=".7"
            />
            <rect
              x="164"
              y={y + 17}
              width="70"
              height="6"
              rx="3"
              fill="#1E1022"
              opacity=".3"
            />
          </g>
        ))}
        <circle cx="312" cy="214" r="26" fill="#fff" opacity=".25" />
        <circle
          cx="312"
          cy="214"
          r="30"
          fill="none"
          stroke="#fff"
          strokeWidth="10"
        />
        <line
          x1="334"
          y1="236"
          x2="362"
          y2="264"
          stroke="#fff"
          strokeWidth="12"
          strokeLinecap="round"
        />
      </>
    ),
  },
  default: {
    bg: "from-brand-purple to-brand-teal",
    draw: (
      <>
        <path
          d="M125 230 A110 110 0 1 1 275 205"
          fill="none"
          stroke="#3FA899"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <path
          d="M130 195 A74 74 0 1 1 255 172"
          fill="none"
          stroke="#88BD32"
          strokeWidth="14"
          strokeLinecap="round"
        />
        <circle cx="200" cy="150" r="26" fill="#D3AC4D" />
        <path
          d="M200 150 V130 M200 150 L214 158"
          fill="none"
          stroke="#681D70"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </>
    ),
  },
};

export default function Art({ name }) {
  const picture = art[name] || art.default;
  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${picture.bg}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 300" className="h-full w-full">
        {picture.draw}
      </svg>
    </div>
  );
}
