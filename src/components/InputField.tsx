import React, { useState, ChangeEvent, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'

const InputField = ({addTodo}:{addTodo:AddTodo}) => {
  const [newTodo, setNewTodo] = useState<string>("")

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (newTodo.trim().length === 0) {
      return
    }
    addTodo(newTodo);
    setNewTodo("");
  }

  return (
    <div onSubmit={handleSubmit}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <Stack direction="row" spacing={0} justifyContent="center">
          <TextField 
            id="outlined-search" 
            label="Add your todo" 
            type="text" 
            value={newTodo}
            onChange={handleChange}
            /> 
          <Button 
            variant="contained" 
            size="medium" 
            type="submit"       
                 
          >
            Add
          </Button>              
        </Stack>
      </div>

    </Box>
    
      
    
    </div>
  )
}

export default InputField