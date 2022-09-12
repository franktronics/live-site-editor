import React from 'react'
import { useCallback, useMemo, useState } from "react"
import {VisualEditorContext} from "../context/VisualEditorContext"

export const VisualEditorProvider = ({children}: {children: JSX.Element | string}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleOpen = useCallback(function(){
    setIsOpen(o => !o)
  }, [])

  const value = useMemo(function(){
    return {
      adminId: '',
      adminToken: '',
      opened: isOpen,
      toggleOpen: toggleOpen
    }
  }, [isOpen, setIsOpen])

  return <VisualEditorContext.Provider value={value}>
    {children}
  </VisualEditorContext.Provider>
}
