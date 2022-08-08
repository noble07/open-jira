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

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, vero impedit quae at in fugit.',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      _id: uuidv4(),
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, accusantium eveniet dolorem dicta voluptatem impedit.',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      _id: uuidv4(),
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis iusto accusantium porro consectetur voluptate possimus!',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}

export const EntriesProvider = ({ children }: EntriesProviderProps) => {

  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

  return (
    <EntriesContext.Provider value={{
      ...state
    }}>
      {children}
    </EntriesContext.Provider>
  )
}