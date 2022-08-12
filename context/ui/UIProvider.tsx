import { ReactNode, useReducer } from 'react'
import { UIContext, uiReducer  } from './'

interface UIProviderProps {
  children: ReactNode
}

export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false
}

export const UIProvider = ({ children }: UIProviderProps) => {

  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => {
    dispatch({ type: 'UI - Open Sidebar' })
  }

  const closeSideMenu = () => {
    dispatch({ type: 'UI - Close Sidebar' })
  }

  const setIsAddingEntry = (state: boolean) => {
    dispatch({ type: 'UI - Set is Adding Entry', payload: state })
  }

  return (
    <UIContext.Provider
      value={{
        ...state,

        // Methods
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry
      }}
    >
      {children}
    </UIContext.Provider>
  )
}