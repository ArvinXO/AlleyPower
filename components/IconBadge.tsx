import { type LucideIcon } from "lucide-react";

export default function IconBadge({ Icon, label }: { Icon: LucideIcon; label: string }) {
  return (
    <div className="flex items-center gap-3 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <Icon className="h-5 w-5" />
      <span className="font-medium">{label}</span>
    </div>
  );
}
