import * as React from "react";

import ListItem from "./ListItem";
import InputField from "../InputField";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export interface TodoData {
  text: string;
  id?: string;
  done?: boolean;
}

export const ToDoComponent = () => {
  const [todoList, setTodoList] = React.useState<TodoData[]>([]);

  const [showAlert, setShowAlert] = React.useState<boolean>(false);

  const addTodo = (text: string) => {
    setTodoList([
      ...todoList,
      { text: text, id: new Date().toISOString(), done: false },
    ]);

    setShowAlert(true);
  };

  const toggleTodoItem = (selectedItem: TodoData) => {
    setTodoList((todoList) =>
      todoList.map((item) => {
        if (item.id === selectedItem.id) {
          return { ...item, done: !item.done };
        }
        return item;
      })
    );
  };

  const removeItem = (delItem: TodoData) => {
    setTodoList((todoList) =>
      todoList.filter((item) => item.id !== delItem.id)
    );
  };

  return (
    <>
      <Collapse in={showAlert}>
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
        </Alert>
      </Collapse>

      <InputField addTodo={addTodo} />
      <br />

      <ListItem
        todoList={todoList}
        toggleTodoItem={toggleTodoItem}
        removeItem={removeItem}
      />
    </>
  );
};
