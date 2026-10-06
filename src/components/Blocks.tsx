import type { Block } from "@/data/standards";

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        if (block.kind === "p") {
          return (
            <p key={i} className="text-ink leading-relaxed">
              {block.text}
            </p>
          );
        }
        if (block.kind === "h") {
          return (
            <h3 key={i} className="font-serif text-xl text-teal pt-4">
              {block.text}
            </h3>
          );
        }
        if (block.kind === "list") {
          return (
            <ul key={i} className="list-disc pl-5 space-y-1.5 text-ink">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <aside key={i} className="rounded-md bg-warn border border-rule px-4 py-3 text-[0.98rem]">
            <strong className="text-navy">{block.label}</strong> {block.text}
          </aside>
        );
      })}
    </div>
  );
}
