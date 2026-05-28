import { Activity, CircleDot, MousePointer2, Sparkles } from "lucide-react";

const nodes = [
  { label: "Homepage", x: "14%", y: "22%", tone: "bg-emerald-300 text-black" },
  { label: "Activation", x: "45%", y: "18%", tone: "bg-white text-black" },
  { label: "AI map", x: "70%", y: "42%", tone: "bg-cyan-300 text-black" },
  { label: "Upgrade", x: "36%", y: "68%", tone: "bg-rose-300 text-black" },
];

export function ProductVisual() {
  return (
    <div className="relative min-h-[390px] overflow-hidden rounded-lg border border-white/12 bg-[#080907] p-4 shadow-2xl shadow-black/40 sm:min-h-[460px]">
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rose-300" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-300" />
        </div>
        <div className="rounded-md border border-white/10 px-3 py-1 font-mono text-xs text-white/58">
          campaign-map.cms
        </div>
      </div>
      <div className="relative mt-4 h-[300px] rounded-md border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:36px_36px] sm:h-[356px]">
        <svg className="absolute inset-0 h-full w-full" role="img" aria-label="Flux Graph product map">
          <line x1="21%" y1="30%" x2="50%" y2="25%" stroke="rgba(110,231,183,.7)" strokeWidth="2" />
          <line x1="52%" y1="27%" x2="73%" y2="45%" stroke="rgba(103,232,249,.7)" strokeWidth="2" />
          <line x1="46%" y1="27%" x2="39%" y2="70%" stroke="rgba(253,164,175,.65)" strokeWidth="2" />
          <line x1="42%" y1="70%" x2="72%" y2="47%" stroke="rgba(255,255,255,.36)" strokeWidth="2" strokeDasharray="7 7" />
        </svg>
        {nodes.map((node) => (
          <div
            key={node.label}
            className={`absolute flex min-w-20 items-center gap-1.5 rounded-md px-2 py-1.5 text-[0.65rem] font-medium shadow-xl sm:min-w-28 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs ${node.tone}`}
            style={{ left: node.x, top: node.y }}
          >
            <CircleDot className="size-3.5" aria-hidden="true" />
            {node.label}
          </div>
        ))}
        <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
          {[
            ["Intent score", "91%", Activity],
            ["Draft blocks", "8", Sparkles],
            ["Editor clicks", "Live", MousePointer2],
          ].map(([label, value, Icon]) => (
            <div key={label as string} className="rounded-md border border-white/10 bg-black/70 p-3 backdrop-blur">
              <div className="flex items-center gap-2 text-white/52">
                <Icon className="size-4" aria-hidden="true" />
                <span className="text-xs">{label as string}</span>
              </div>
              <div className="mt-2 font-mono text-xl text-white">{value as string}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
