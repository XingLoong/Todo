import React, { useState, ChangeEvent, FormEvent } from "react";
import { FormControl, Grid, TextField, Button } from "@mui/material";

interface InputFieldProps {
  addTodo: (text: string) => void;
}

const InputField = ({ addTodo }: InputFieldProps) => {
  const [newTodo, setNewTodo] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleAdd = () => {
    if (newTodo.length > 0) {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <TextField
            id="outlined-search"
            label="Add your todo"
            type="text"
            value={newTodo}
            onChange={handleChange}
            fullWidth
            size="small"
            style={{ height: "30px" }}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            type="submit"
            onClick={handleAdd}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default InputField;
