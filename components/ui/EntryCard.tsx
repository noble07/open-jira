import { DragEvent } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'
import { Entry } from '../../interfaces'

interface EntryCardProps {
  entry: Entry
}

const EntryCard = ({ entry }: EntryCardProps) => {

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)

    // todo: Modificar el estado, para indentificar que estoy haciendo drag
  }

  const onDragEnd = () => {
    // todo: cancelar on drag
  }

  return (
    <Card
      sx={{ marginBottom: 1}}
      // Drag events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant="body2">hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default EntryCard