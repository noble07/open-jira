import { createContext } from 'react'

interface ContextProps {
  sidemenuOpen: boolean
  isAddingEntry: boolean

  // Methods
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (state: boolean) => void
}

export const UIContext = createContext({} as ContextProps)