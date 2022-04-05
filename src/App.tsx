import React from "react";
import "./App.css";
import { NavbarComponent } from "./components/Navbar/Navbar";
import { AddTodoComponent } from "./components/TodoComponents/TodoComponent";
import { ITodos } from "./components/TodoComponents/TodosComponent";
import About from "./components/TabComponents/AboutComponent";
import Blog from "./components/TabComponents/BlogComponent";
import { Login } from "./components/LoginComponent";

function App() {
  const [todos, setTodos] = React.useState<ITodos>({ todos: [] });
  const addTodos = (title: string) => {
    setTodos({
      todos: [
        { title, completed: false, id: todos.todos.length + 1 },
        ...todos.todos,
      ],
    });
  };
  const deleteTodos = (id: number) => {
    setTodos({
      todos: todos.todos.filter((t) => t.id !== id),
    });
  };
  const toggleTodos = (id: number) => {
    setTodos({
      todos: todos.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  const [tab, setTab] = React.useState("");
  const getTab = () => {
    if (tab === "about") {
      return <About />;
    } else if (tab === "blog") {
      return <Blog />;
    } else if (tab === "login") {
      return <Login />
    } else {
      return <></>;
    }
  };
  return (
    <div className="App background">
      <div className="App-content">
        <NavbarComponent
          changeTab={(newTab: any) => {
            setTab(newTab);
          }}
        />
        {/* <AddTodoComponent addTodos={addTodos} /> */}
        {getTab()}
        {/* <TodosComponent
          todos={todos}
          toggleTodos={toggleTodos}
          deleteTodos={deleteTodos}
        /> */}
      </div>
    </div>
  );
}
export default App;
