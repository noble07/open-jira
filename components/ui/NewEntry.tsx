import { ChangeEvent, useState } from 'react'
import { Box, Button, inputAdornmentClasses, TextField } from '@mui/material'

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const NewEntry = () => {

  const [isAdding, setIsAdding] = useState(false)

  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const onSave = () => {
    if (inputValue.length === 0) return

    console.log({ inputValue })
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1}}>
      
      {
        isAdding ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1 }}
              autoFocus
              multiline
              label="Nueva entrada"
              helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
              error={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onTextFieldChanged}
              onBlur={() => setTouched(true)}
            />

            <Box display="flex" justifyContent="space-between">
              <Button
                variant="text"
                onClick={() => setIsAdding(false)}
              >
                Cancelar
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<SaveOutlinedIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Box>
          </>
        ) : (
          <Button
            startIcon={<AddCircleOutlineOutlinedIcon />}
            fullWidth
            variant="outlined"
            onClick={() => setIsAdding(true)}
          >
            Agregar Tarea
          </Button>
        )
      }

    </Box>
  )
}

export default NewEntry