import { Fragment, PropsWithChildren } from "react";
import { CursorType, cursorStore } from "../store/cursor-store";

export default function CursorObserver({
  state,
  children,
}: PropsWithChildren<{ state: CursorType }>) {
  const { setCursor } = cursorStore();

  return (
    <div
      onMouseEnter={() => setCursor(state)}
      onMouseLeave={() => setCursor(null)}
    >
      {children}
    </div>
  );
}
