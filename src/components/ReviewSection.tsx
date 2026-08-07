import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
};

export default function ReviewSection({ title, children }: Props) {
  return (
    <div className="border-b px-6 py-5">
      <h3 className="mb-4 text-xs font-semibold tracking-wider uppercase text-gray-400">
        {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </div>
  );
}
