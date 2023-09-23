import { create } from "zustand";

export type CursorType = null | "action" | "link" | "download";

interface CursorStoreType {
  cursor: CursorType;
  setCursor: (cursor: CursorType) => void;
}

export const cursorStore = create<CursorStoreType>((set) => ({
  cursor: null,
  setCursor: (cursor: CursorType) => set({ cursor }),
}));
