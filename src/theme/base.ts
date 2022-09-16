import { Theme, ThemeValue } from "../types/base";


export const getTheme = (theme: Theme): ThemeValue => {
  const dataTheme = {
    value: {
      themeName: ['light', 'dark']
    },
    colors: {
      primary: ['#1771e6', '#17f1e6'],
      primaryLight: ['#1771e626', ''],
      primaryHover: ['#388afa', ''],
      secondary: ['', ''],
      error: ['', ''],
      warning: ['', ''],
      info: ['', ''],
      text0: ['', ''],
      text1: ['', ''],
      text2: ['', '']
    },
    linear: {}
  }

  console.log(dataTheme);
  let result: ThemeValue = {...dataTheme}
  for(const key in dataTheme){
    for(const prop in dataTheme[key]){
      result[key][prop] = dataTheme[key][prop][theme === 'light'? 0: 1]
    }
  }
  return result
}
