import {
  Activity,
  CircleDot,
  FileText,
  MousePointer2,
  Search,
  Sparkles,
} from "lucide-react";

const nodes = [
  { label: "Homepage", x: "10%", y: "24%", tone: "bg-emerald-300 text-black" },
  { label: "Activation", x: "41%", y: "16%", tone: "bg-white text-black" },
  { label: "AI map", x: "68%", y: "42%", tone: "bg-cyan-300 text-black" },
  { label: "Upgrade", x: "31%", y: "66%", tone: "bg-rose-300 text-black" },
];

const sectionBlocks = [
  { label: "Hero", value: "Live", tone: "bg-emerald-300" },
  { label: "Features", value: "3 blocks", tone: "bg-cyan-300" },
  { label: "FAQ", value: "Schema", tone: "bg-rose-300" },
  { label: "SEO", value: "Ready", tone: "bg-white" },
];

export function ProductVisual() {
  return (
    <div className="relative min-h-[430px] overflow-hidden rounded-lg border border-white/12 bg-[#070806] p-3 shadow-2xl shadow-black/50 sm:min-h-[520px] lg:min-h-[590px]">
      <div className="flex items-center justify-between border-b border-white/10 px-1 pb-3">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-rose-300" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-300" />
        </div>
        <div className="rounded-md border border-white/10 px-3 py-1 font-mono text-[0.68rem] text-white/58">
          campaign-map.cms
        </div>
      </div>
      <div className="grid gap-3 pt-3 lg:grid-cols-[1fr_190px]">
        <div className="relative h-[340px] overflow-hidden rounded-md border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:34px_34px] sm:h-[430px] lg:h-[510px]">
          <div className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/48 px-3 py-2 font-mono text-[0.65rem] text-white/50 backdrop-blur">
            draft preview / homepage
          </div>
          <svg
            className="absolute inset-0 h-full w-full"
            role="img"
            aria-label="Flux Graph product map"
          >
            <line
              x1="18%"
              y1="31%"
              x2="46%"
              y2="23%"
              stroke="rgba(110,231,183,.75)"
              strokeWidth="2"
            />
            <line
              x1="49%"
              y1="24%"
              x2="72%"
              y2="45%"
              stroke="rgba(103,232,249,.72)"
              strokeWidth="2"
            />
            <line
              x1="45%"
              y1="25%"
              x2="36%"
              y2="69%"
              stroke="rgba(253,164,175,.68)"
              strokeWidth="2"
            />
            <line
              x1="38%"
              y1="70%"
              x2="71%"
              y2="47%"
              stroke="rgba(255,255,255,.34)"
              strokeWidth="2"
              strokeDasharray="7 7"
            />
          </svg>
          {nodes.map((node) => (
            <div
              key={node.label}
              className={`absolute flex min-w-20 items-center gap-1.5 rounded-md px-2 py-1.5 text-[0.65rem] font-medium shadow-xl shadow-black/35 sm:min-w-28 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs ${node.tone}`}
              style={{ left: node.x, top: node.y }}
            >
              <CircleDot className="size-3.5" aria-hidden="true" />
              {node.label}
            </div>
          ))}
          <div className="absolute bottom-4 left-4 right-4 hidden gap-2 sm:grid sm:grid-cols-3">
            {[
              ["Intent score", "91%", Activity],
              ["Draft blocks", "8", Sparkles],
              ["Editor clicks", "Live", MousePointer2],
            ].map(([label, value, Icon]) => (
              <div
                key={label as string}
                className="rounded-md border border-white/10 bg-black/70 p-3 backdrop-blur"
              >
                <div className="flex items-center gap-2 text-white/52">
                  <Icon className="size-4" aria-hidden="true" />
                  <span className="text-xs">{label as string}</span>
                </div>
                <div className="mt-2 font-mono text-xl text-white">
                  {value as string}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden rounded-md border border-white/10 bg-white/[0.03] p-3 lg:block">
          <div className="mb-3 flex items-center justify-between text-[0.68rem] text-white/48">
            <span>Sanity sections</span>
            <FileText className="size-3.5" aria-hidden="true" />
          </div>
          <div className="space-y-2">
            {sectionBlocks.map((block) => (
              <div
                key={block.label}
                className="rounded-md border border-white/10 bg-black/35 p-3"
              >
                <div className="flex items-center gap-2">
                  <span className={`size-2 rounded-full ${block.tone}`} />
                  <span className="text-sm font-medium text-white">
                    {block.label}
                  </span>
                </div>
                <div className="mt-2 font-mono text-[0.68rem] text-white/46">
                  {block.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md border border-emerald-300/25 bg-emerald-300/10 p-3">
            <div className="flex items-center gap-2 text-xs text-emerald-100">
              <Search className="size-3.5" aria-hidden="true" />
              SEO fields synced
            </div>
            <div className="mt-2 h-1.5 rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-emerald-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
