import { DragEvent, useContext, useMemo } from 'react'

import { List, Paper } from '@mui/material'
import { EntriesContext } from '../../context/entries'
import { EntryStatus } from '../../interfaces'
import EntryCard from './EntryCard'

interface EntryListProps {
  status: EntryStatus
}

const EntryList = ({ status }: EntryListProps) => {

  const { entries } = useContext(EntriesContext)

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status),[entries, status])

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text')
    console.log({ id })
  }

  return (
    // todo: aquí haremos drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
    >
      <Paper
        sx={{
          height: "calc(100vh - 180px)",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "3px",
            bgcolor: "#454545",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4a148c",
            border: "7px none #fffff",
            borderRadius: "10px",
          },
          padding: '1px 5px',
          backgroundColor: 'transparent'
        }}
      >
        {/* todo: cambiara si estoy haciendo drag o no */}
        <List sx={{ opacity: 1 }}>
          {
            entriesByStatus.map(entry => (
              <EntryCard key={entry._id} entry={entry} />
            ))
          }
        </List>
      </Paper>
    </div>
  );
};

export default EntryList;
