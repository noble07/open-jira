import { ReactNode, useReducer, useEffect } from 'react'

import { useSnackbar } from 'notistack'

import { entriesApi } from '../../apis'
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
  const { enqueueSnackbar } = useSnackbar();
  
  const addNewEntry = async(description: string) => {

    const { data } = await entriesApi.post<Entry>('/entries', { description })
    dispatch({ type: '[Entry] - Add-Entry', payload: data })

  }

  const updateEntry = async({ _id, description, status }: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status })
      dispatch({ type: '[Entry] - Entry-Updated', payload: data })

      if (showSnackbar)
        enqueueSnackbar('Entrada actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }

        })
      
    } catch (error) {
      console.log({ error })
    }
  }

  const deleteEntry = async(_id: string, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.delete<Entry>(`/entries/${_id}`)
      dispatch({ type: '[Entry] - Delete-Entry', payload: data })

      if (showSnackbar)
        enqueueSnackbar('Entrada eliminada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }

        })
      
    } catch (error) {
      console.log({error})
    }
  }

  const refreshEntries = async() => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entry] - Refresh-Data', payload: data })
  }

  useEffect(() => {
    refreshEntries()
  }, [])
  

  return (
    <EntriesContext.Provider value={{
      ...state,
       
      // Methods
      addNewEntry,
      updateEntry,
      deleteEntry
    }}>
      {children}
    </EntriesContext.Provider>
  )
}