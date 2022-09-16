import React from 'react'
import { useCallback, useMemo, useState } from "react"
import { Button } from '../components/ui/Button'
import {VisualEditorContext} from "../context/VisualEditorContext"
import { getTheme } from "../theme/base"
import { Theme, ThemeValue } from '../types/base'

export const VisualEditorProvider = ({children}: {children: JSX.Element | string}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [theme, setTheme] = useState<ThemeValue>(getTheme('light'))

  const toggleOpen = useCallback(function(){
    setIsOpen(o => !o)
  }, [])
  const toggleTheme = useCallback(function(newTheme?: Theme){
    if(newTheme){
      setTheme(getTheme(newTheme))
    }else{
      if(theme.value.themeName === 'light') setTheme(getTheme('dark'))
      else if (theme.value.themeName === 'dark') setTheme(getTheme('light'))
    }
  }, [])

  const value = useMemo(function(){
    return {
      adminId: '',
      adminToken: '',
      opened: isOpen,
      theme: theme,
      toggleTheme: toggleTheme,
      toggleOpen: toggleOpen
    }
  }, [isOpen, setIsOpen])

  return <VisualEditorContext.Provider value={value}>
    <Button>Validre</Button>
    {children}
  </VisualEditorContext.Provider>
}
