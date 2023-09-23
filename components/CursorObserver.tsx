import { PropsWithChildren } from "react";
import { CursorType, cursorStore } from "../store/cursor-store";

export default function CursorObserver({
  state,
  className,
  children,
}: PropsWithChildren<{ state: CursorType; className?: string }>) {
  const { setCursor } = cursorStore();

  return (
    <div
      className={className}
      onMouseEnter={() => setCursor(state)}
      onMouseLeave={() => setCursor(null)}
    >
      {children}
    </div>
  );
}
