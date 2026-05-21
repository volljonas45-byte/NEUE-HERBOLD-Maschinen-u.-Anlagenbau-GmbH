import { cn } from "@/lib/utils";
import type { ModelSpec } from "@/data/products";

type Props = {
  headers: string[];
  models: ModelSpec[];
  className?: string;
};

export function SpecTable({ headers, models, className }: Props) {
  return (
    <div className={cn("overflow-x-auto rounded-lg border border-graphite-200", className)}>
      <table className="w-full text-sm min-w-[480px]">
        <thead>
          <tr className="bg-brand-blue text-white">
            {headers.map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left font-medium tracking-wide whitespace-nowrap first:rounded-tl-lg last:rounded-tr-lg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {models.map((row, i) => (
            <tr
              key={i}
              className={cn(
                "border-t border-graphite-200 transition-colors hover:bg-graphite-100",
                i % 2 === 0 ? "bg-white" : "bg-graphite-100/40",
              )}
            >
              {headers.map((h) => (
                <td
                  key={h}
                  className={cn(
                    "px-4 py-3 text-graphite-700 font-mono text-xs whitespace-nowrap",
                    h === headers[0] && "font-semibold text-brand-blue font-sans text-sm",
                  )}
                >
                  {row[h] ?? "—"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
