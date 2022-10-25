import { ReactNode, useReducer } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { Entry } from '../../interfaces'
import { EntriesContext, entriesReducer  } from './'

interface EntriesProviderProps {
  children: ReactNode
}

export interface EntriesState {
  entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: []
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)
  
  const addNewEntry = (description: string) => {

    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createdAt: Date.now(),
      status: 'pending'
    }

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })
  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Entry-Updated', payload: entry })
  }

  return (
    <EntriesContext.Provider value={{
      ...state,
       
      // Methods
      addNewEntry,
      updateEntry
    }}>
      {children}
    </EntriesContext.Provider>
  )
}