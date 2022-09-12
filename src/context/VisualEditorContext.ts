import { createContext } from "react";
import { VEContext } from "../types/base";

export const VisualEditorContext = createContext<VEContext>({
  adminId: '',
  adminToken: '',
  opened: false,
  toggleOpen: () => {}
})
