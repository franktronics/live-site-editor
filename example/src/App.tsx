import React, { useContext } from 'react'
import { VisualEditorContext, VisualEditorProvider } from 'live-site-editor'

const Menu = () => {
  const {opened, toggleOpen} = useContext(VisualEditorContext)

  const handleClick = () => {
    console.log('ok');

    toggleOpen()
  }

  return <div>
    <button onClick={handleClick}>{opened? 'Ouvert': 'Ferme'}</button>
  </div>
}

const App = () => {
  return <VisualEditorProvider>
    <Menu />
  </VisualEditorProvider>
}
export default App
