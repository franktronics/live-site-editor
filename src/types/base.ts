
export interface VEContext {
  adminId: string,
  adminToken: string,
  opened: boolean,
  theme: ThemeValue,
  toggleTheme: Function,
  toggleOpen: Function
}

export type ThemeValue = {
  value: {
    themeName: any
  },
  colors: any,
  linear: any,
}

export type Theme = 'light' | 'dark'
