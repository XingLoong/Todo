import React from "react"

import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteRounded'
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

const Print = ({ todoList, toggleTodoItem, removeItem }: { todoList: Array<TodoData>, toggleTodoItem: (event: TodoData) => void, removeItem: (event: TodoData) => void }) => {
  return (
    <div>
      {todoList.map((item) => {
        return ( 
          <Stack style={{display: "flex", justifyContent: "space-between"}} key={item.id}>            
            <li              
              style={{ textDecoration: item.done ? 'line-through' : undefined }}
              onClick={()=>toggleTodoItem(item)}
            >
              {item.text} 
            <IconButton 
              type="button" 
              onClick={()=>removeItem(item)}>
              <DeleteForeverRoundedIcon sx={{ color: "darkred" }}/>
            </IconButton>
            </li> 
          </Stack>)}
        )
      }
    </div>
  )
}

  
export default Print




