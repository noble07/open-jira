import { List, Paper } from '@mui/material'
import { useContext, useMemo } from 'react'
import { EntriesContext } from '../../context/entries'
import { EntryStatus } from '../../interfaces'
import EntryCard from './EntryCard'

interface EntryListProps {
  status: EntryStatus
}

const EntryList = ({ status }: EntryListProps) => {

  const { entries } = useContext(EntriesContext)

  const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status),[entries, status])

  return (
    // todo: aqué haremos dropo
    <div>
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
