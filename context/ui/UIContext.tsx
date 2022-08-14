import { createContext } from 'react'
import { UIState } from './UIProvider'

interface ContextProps extends UIState{
  // Methods
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (state: boolean) => void
  startDragging: () => void
  endDragging: () => void
}

export const UIContext = createContext({} as ContextProps)