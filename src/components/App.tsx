import React, { useState} from "react";
import InputField from "./InputField";
import Print from "./TodoListItem";

const App = () => {

  const [todoList, setTodoList] = useState<Array<TodoData>>([])

  const toggleTodoItem = (selectedItem: TodoData) => {
    setTodoList(todoList => todoList.map((item) => {
      if (item.id === selectedItem.id) {
        return { ...item, done: !item.done};
      }
        return item
    }))
   
  };

  const removeItem = (delItem: TodoData) => {
 
    setTodoList(todoList => todoList.filter((item) => item.id !== delItem.id));
    
  };

  const addTodo: AddTodo = (newTodo) => {
    setTodoList([...todoList, {text: newTodo, id: new Date().toISOString(), done: false}])
  };

  return (
    <div>
      <h1>Todo App</h1>
      <InputField addTodo={addTodo} />
      <br />
      <Print todoList={todoList} toggleTodoItem={toggleTodoItem} removeItem={removeItem}/> 
    </div>
  );
}

export default App