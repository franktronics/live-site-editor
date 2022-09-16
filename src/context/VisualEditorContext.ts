import { createContext } from "react";
import { getTheme } from "../theme/base";
import { VEContext } from "../types/base";

export const VisualEditorContext = createContext<VEContext>({
  adminId: '',
  adminToken: '',
  opened: false,
  theme: getTheme('light'),
  toggleTheme: () => {},
  toggleOpen: () => {}
})
