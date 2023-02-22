import { DragEvent, useContext } from 'react'
import { useRouter } from 'next/router'

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui'

interface EntryCardProps {
  entry: Entry
}

const EntryCard = ({ entry }: EntryCardProps) => {

  const { startDragging, endDragging } = useContext(UIContext)
  const router = useRouter()

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)
    
    startDragging()
  }

  const handleClick = () => {
    router.push(`/entries/${entry._id}`)
  }

  return (
    <Card
      onClick={handleClick}
      sx={{ marginBottom: 1}}
      // Drag events
      draggable
      onDragStart={onDragStart}
      onDragEnd={endDragging}
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