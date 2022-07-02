import React from "react";
import { ToDoComponent } from "./to-do/ToDo";

import { Container } from "@mui/material";

const App = () => {
  return (
    <Container maxWidth="md">
      <h1>Todo App</h1>
      <ToDoComponent />
    </Container>
  );
};

export default App;
